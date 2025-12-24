import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCEUDD0iB4iGFSDoC0a3wCXF8PT098Su3w",
    authDomain: "anonymous-messaging-f93c0.firebaseapp.com",
    projectId: "anonymous-messaging-f93c0",
    storageBucket: "anonymous-messaging-f93c0.firebasestorage.app",
    messagingSenderId: "990716606250",
    appId: "1:990716606250:web:a82a15347cc5980aa01053"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

let currentUser = null;
const activeChatId = new URLSearchParams(window.location.search).get('id');

// --- AUTH & STARTUP ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        if (activeChatId) startLiveChat(activeChatId);
    } else {
        signInAnonymously(auth);
    }
});

// --- THE REMAINING PROCESS: CREATE & REDIRECT ---
window.createChatRoom = async (type) => {
    if (!currentUser) return;
    
    // 1. Visual Feedback: Close the modal immediately
    document.getElementById('chat-modal-overlay').classList.remove('active');
    
    try {
        // 2. Create the room with a 'vibe' name based on selection
        const vibeName = type === 'private' ? 'One-on-One Vibe' : 'Community Vibe';
        
        const docRef = await addDoc(collection(db, "rooms"), {
            type: type,
            vibeName: vibeName,
            createdBy: currentUser.uid,
            createdAt: serverTimestamp(),
        });

        // 3. Move to the specific chat
        window.location.href = `chat.html?id=${docRef.id}`;
    } catch (e) { 
        console.error("Process Failed", e); 
    }
};

// --- THE LIVE CHAT INTERFACE ---
function startLiveChat(roomId) {
    const chatUI = document.getElementById('active-chat-interface');
    const emptyUI = document.getElementById('no-chat-selected');
    const headerTitle = document.getElementById('active-vibe-name');

    if (chatUI) chatUI.style.display = 'flex';
    if (emptyUI) emptyUI.style.display = 'none';

    // Listener for messages
    const q = query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", "asc"));
    
    onSnapshot(q, (snap) => {
        const box = document.getElementById('chat-messages');
        if (!box) return;
        box.innerHTML = '';
        
        snap.forEach(doc => {
            const m = doc.data();
            const isMe = m.senderId === currentUser.uid;
            
            box.insertAdjacentHTML('beforeend', `
                <div class="message-wrapper ${isMe ? 'me' : 'them'}">
                    <div class="message-bubble">${m.text}</div>
                </div>
            `);
        });
        box.scrollTop = box.scrollHeight;
    });
}

// --- SENDING MESSAGES ---
document.getElementById('chat-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('message-input');
    if (!input?.value.trim() || !activeChatId) return;

    await addDoc(collection(db, "rooms", activeChatId, "messages"), {
        text: input.value,
        senderId: currentUser.uid,
        timestamp: serverTimestamp()
    });
    input.value = '';
});

// --- UI HELPERS (THEMES & MODALS) ---
document.addEventListener('DOMContentLoaded', () => {
    // Restore Theme
    const savedTheme = localStorage.getItem('tbh-theme') || 'dark-theme';
    document.body.classList.add(savedTheme);

    const themeModal = document.getElementById('themeModalOverlay');
    const chatModal = document.getElementById('chat-modal-overlay');

    // Button Triggers
    document.querySelectorAll('#theme-toggle, #mobile-theme-toggle').forEach(b => b.onclick = () => themeModal?.classList.add('active'));
    document.querySelectorAll('#open-chat-modal-main, #open-chat-modal-sidebar').forEach(b => b.onclick = () => chatModal?.classList.add('active'));

    // Closer Logic
    document.querySelectorAll('.close-btn, .close-theme-btn').forEach(b => {
        b.onclick = () => {
            themeModal?.classList.remove('active');
            chatModal?.classList.remove('active');
        };
    });
    
    // Theme Switchers
    ['dark', 'light', 'pink', 'blue', 'green', 'purple'].forEach(c => {
        const btn = document.getElementById(`theme-option-${c}`);
        if (btn) btn.onclick = () => {
            document.body.className = `${c}-theme has-sidebar`;
            localStorage.setItem('tbh-theme', `${c}-theme`);
        };
    });
});
