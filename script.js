// // // === THEME TOGGLE LOGIC ===
document.getElementById('theme-option-dark').addEventListener('click', toggleThemeDark);
document.getElementById('theme-option-light').addEventListener('click', toggleThemeLight);
document.getElementById('theme-option-pink').addEventListener('click', toggleThemePink);
document.getElementById('theme-option-red').addEventListener('click', toggleThemeRed);
document.getElementById('theme-option-blue').addEventListener('click', toggleThemeBlue);
document.getElementById('theme-option-purple').addEventListener('click', toggleThemePurple);
document.getElementById('theme-option-green').addEventListener('click', toggleThemeGreen);
document.getElementById('theme-option-yellow').addEventListener('click', toggleThemeYellow);
document.getElementById('theme-option-brown').addEventListener('click', toggleThemeBrown);
document.getElementById('theme-option-orange').addEventListener('click', toggleThemeOrange);




// Check if the mobile toggle exists before adding listener
// const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
// if (mobileThemeToggle) {
//     mobileThemeToggle.addEventListener('click', toggleTheme);
// }


function toggleThemeDark() {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');

        if (toggleThemeDark) {
        document.getElementById('theme-option-dark').classList.add('current-active');
        document.getElementById('theme-option-light').classList.remove('current-active');
    };

    // const isDark = document.body.classList.contains('dark-theme');
    // const icon = isDark ? 'fa-moon' : 'fa-sun';

    // Update icons for both desktop and mobile toggles
    // document.querySelectorAll('#theme-toggle i, #mobile-theme-toggle i').forEach(el => {
    //     el.className = `fa-solid ${icon}`;
    // });
}

function toggleThemeLight() {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');

    if (toggleThemeLight) {
        document.getElementById('theme-option-light').classList.add('current-active');
        document.getElementById('theme-option-dark').classList.remove('current-active');
    };

    // const isLight = document.body.classList.contains('light-theme');
    // const icon = isDark ? 'fa-moon' : 'fa-sun';

    // Update icons for both desktop and mobile toggles
    // document.querySelectorAll('#theme-toggle i, #mobile-theme-toggle i').forEach(el => {
    //     el.className = `fa-solid ${icon}`;
    // });
}

function toggleThemePink() {
    document.body.classList.remove('red-theme', 'blue-theme', 'purple-theme', 'green-theme', 'yellow-theme', 'brown-theme', 'orange-theme');
    document.body.classList.add('pink-theme');
    localStorage.setItem('color-theme', 'pink-theme');

        if (toggleThemePink) {
        document.getElementById('theme-option-pink').classList.add('current-theme');
        document.getElementById('theme-option-red').classList.remove('current-theme');
        document.getElementById('theme-option-blue').classList.remove('current-theme');
        document.getElementById('theme-option-purple').classList.remove('current-theme');
        document.getElementById('theme-option-green').classList.remove('current-theme');
        document.getElementById('theme-option-yellow').classList.remove('current-theme');
        document.getElementById('theme-option-brown').classList.remove('current-theme');
        document.getElementById('theme-option-orange').classList.remove('current-theme');
    };

    const isDark = document.body.classList.contains('dark-theme');
}

function toggleThemeRed() {
    document.body.classList.remove('pink-theme', 'blue-theme', 'purple-theme', 'green-theme', 'yellow-theme', 'brown-theme', 'orange-theme');
    document.body.classList.add('red-theme');
    localStorage.setItem('color-theme', 'red-theme');
  

            if (toggleThemeRed) {
        document.getElementById('theme-option-pink').classList.remove('current-theme');
        document.getElementById('theme-option-red').classList.add('current-theme');
        document.getElementById('theme-option-blue').classList.remove('current-theme');
        document.getElementById('theme-option-purple').classList.remove('current-theme');
        document.getElementById('theme-option-green').classList.remove('current-theme');
        document.getElementById('theme-option-yellow').classList.remove('current-theme');
        document.getElementById('theme-option-brown').classList.remove('current-theme');
        document.getElementById('theme-option-orange').classList.remove('current-theme');
    };
    const isDark = document.body.classList.contains('dark-theme');
}

function toggleThemeBlue() {
    document.body.classList.remove('pink-theme', 'red-theme', 'purple-theme', 'green-theme', 'yellow-theme', 'brown-theme', 'orange-theme');
    document.body.classList.add('blue-theme');
    localStorage.setItem('color-theme', 'blue-theme');

    
            if (toggleThemePink) {
        document.getElementById('theme-option-pink').classList.remove('current-theme');
        document.getElementById('theme-option-red').classList.remove('current-theme');
        document.getElementById('theme-option-blue').classList.add('current-theme');
        document.getElementById('theme-option-purple').classList.remove('current-theme');
        document.getElementById('theme-option-green').classList.remove('current-theme');
        document.getElementById('theme-option-yellow').classList.remove('current-theme');
        document.getElementById('theme-option-brown').classList.remove('current-theme');
        document.getElementById('theme-option-orange').classList.remove('current-theme');
    };
    const isDark = document.body.classList.contains('dark-theme');
}

function toggleThemePurple() {
    document.body.classList.remove('pink-theme', 'red-theme', 'blue-theme', 'green-theme', 'yellow-theme', 'brown-theme', 'orange-theme');
    document.body.classList.add('purple-theme');
    localStorage.setItem('color-theme', 'purple-theme');

    
            if (toggleThemePink) {
        document.getElementById('theme-option-pink').classList.remove('current-theme');
        document.getElementById('theme-option-red').classList.remove('current-theme');
        document.getElementById('theme-option-blue').classList.remove('current-theme');
        document.getElementById('theme-option-purple').classList.add('current-theme');
        document.getElementById('theme-option-green').classList.remove('current-theme');
        document.getElementById('theme-option-yellow').classList.remove('current-theme');
        document.getElementById('theme-option-brown').classList.remove('current-theme');
        document.getElementById('theme-option-orange').classList.remove('current-theme');
    };
    const isDark = document.body.classList.contains('dark-theme');
}

function toggleThemeGreen() {
    document.body.classList.remove('pink-theme', 'red-theme', 'blue-theme', 'purple-theme', 'yellow-theme', 'brown-theme', 'orange-theme');
    document.body.classList.add('green-theme');
    localStorage.setItem('color-theme', 'green-theme')

    
                if (toggleThemePink) {
        document.getElementById('theme-option-pink').classList.remove('current-theme');
        document.getElementById('theme-option-red').classList.remove('current-theme');
        document.getElementById('theme-option-blue').classList.remove('current-theme');
        document.getElementById('theme-option-purple').classList.remove('current-theme');
        document.getElementById('theme-option-green').classList.add('current-theme');
        document.getElementById('theme-option-yellow').classList.remove('current-theme');
        document.getElementById('theme-option-brown').classList.remove('current-theme');
        document.getElementById('theme-option-orange').classList.remove('current-theme');
    };
    const isDark = document.body.classList.contains('dark-theme');
}

function toggleThemeYellow() {
    document.body.classList.remove('pink-theme', 'red-theme', 'blue-theme', 'purple-theme', 'green-theme', 'brown-theme', 'orange-theme');
    document.body.classList.add('yellow-theme');
    localStorage.setItem('color-theme', 'yellow-theme')

    
                if (toggleThemePink) {
        document.getElementById('theme-option-pink').classList.remove('current-theme');
        document.getElementById('theme-option-red').classList.remove('current-theme');
        document.getElementById('theme-option-blue').classList.remove('current-theme');
        document.getElementById('theme-option-purple').classList.remove('current-theme');
        document.getElementById('theme-option-green').classList.remove('current-theme');
        document.getElementById('theme-option-yellow').classList.add('current-theme');
        document.getElementById('theme-option-brown').classList.remove('current-theme');
        document.getElementById('theme-option-orange').classList.remove('current-theme');
    };
    const isDark = document.body.classList.contains('dark-theme');
}

function toggleThemeBrown() {
    document.body.classList.remove('pink-theme', 'red-theme', 'blue-theme', 'purple-theme', 'green-theme', 'yellow-theme', 'orange-theme');
    document.body.classList.add('brown-theme');
    localStorage.setItem('color-theme', 'brown-theme')

    
                if (toggleThemePink) {
        document.getElementById('theme-option-pink').classList.remove('current-theme');
        document.getElementById('theme-option-red').classList.remove('current-theme');
        document.getElementById('theme-option-blue').classList.remove('current-theme');
        document.getElementById('theme-option-purple').classList.remove('current-theme');
        document.getElementById('theme-option-green').classList.remove('current-theme');
        document.getElementById('theme-option-yellow').classList.remove('current-theme');
        document.getElementById('theme-option-brown').classList.add('current-theme');
        document.getElementById('theme-option-orange').classList.remove('current-theme');
    };
    const isDark = document.body.classList.contains('dark-theme');
}

function toggleThemeOrange() {
    document.body.classList.remove('pink-theme', 'red-theme', 'blue-theme', 'purple-theme', 'green-theme', 'yellow-theme', 'brown-theme');
    document.body.classList.add('orange-theme');
    localStorage.setItem('color-theme', 'orange-theme')

    document.body.classList.remove('red-theme');
    document.body.classList.remove('blue-theme');
    document.body.classList.remove('purple-theme');
    document.body.classList.remove('green-theme');
    document.body.classList.remove('yellow-theme');
    document.body.classList.remove('brown-theme');
    document.body.classList.add('orange-theme');
    document.body.classList.remove('pink-theme');
    
                if (toggleThemePink) {
        document.getElementById('theme-option-pink').classList.remove('current-theme');
        document.getElementById('theme-option-red').classList.remove('current-theme');
        document.getElementById('theme-option-blue').classList.remove('current-theme');
        document.getElementById('theme-option-purple').classList.remove('current-theme');
        document.getElementById('theme-option-green').classList.remove('current-theme');
        document.getElementById('theme-option-yellow').classList.remove('current-theme');
        document.getElementById('theme-option-brown').classList.remove('current-theme');
        document.getElementById('theme-option-orange').classList.add('current-theme');
    };
    const isDark = document.body.classList.contains('dark-theme');
}

// === MOBILE SLIDER DOTS LOGIC (Only relevant for index.html) ===
const track = document.querySelector('.prompt-track');
const dots = document.querySelectorAll('.dot');

if (track && dots.length > 0) {
    track.addEventListener('scroll', () => {
        // Calculation of card width + gap for smooth snapping
        // 280px (card) + 20px (gap) = 300px (approx)
        const cardWidth = 300; 
        const index = Math.round(track.scrollLeft / cardWidth);

        // Update the active dot
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    });
}


// === NEW CHAT MODAL / BOTTOM SHEET LOGIC (Only relevant for chat.html) ===
const modalOverlay = document.getElementById('chat-modal-overlay');
// Select all buttons that open the chat modal
const openButtons = document.querySelectorAll('#open-chat-modal-main, #open-chat-modal-sidebar');
const closeButton = document.querySelector('.chat-modal .close-btn');

function openModal() {
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

if (modalOverlay && openButtons.length > 0 && closeButton) {
    // Attach listener to all open buttons
    openButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);
    
    // Close modal when clicking the overlay backdrop (but not the modal itself)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Optional: Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}


// === NEW THEME MODAL / BOTTOM SHEET LOGIC
const themeOverlay = document.getElementById('themeModalOverlay');
// Select all buttons that open the chat modal
const openThemes = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
const closeThemes = document.querySelector('.close-theme-btn');

function openThemeModal() {
    themeOverlay.classList.add('active');
}

function closeThemeModal() {
    themeOverlay.classList.remove('active');
}

if (themeOverlay && openThemes.length > 0 && closeThemes) {
    // Attach listener to all open buttons
    openThemes.forEach(button => {
        button.addEventListener('click', openThemeModal);
    });

    closeThemes.addEventListener('click', closeThemeModal);
    
    // Close modal when clicking the overlay backdrop (but not the modal itself)
    themeOverlay.addEventListener('click', (e) => {
        if (e.target === themeOverlay) {
            closeThemeModal();
        }
    });

    // Optional: Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && themeOverlay.classList.contains('active')) {
            closeThemeModal();
        }
    });
}

// === NEW PERSISTENCE LOGIC (Add this block at the end of your script) ===

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Light/Dark Theme Preference
    const savedLdTheme = localStorage.getItem('theme');
    if (savedLdTheme === 'dark-theme') {
        // Since we cannot call toggleThemeDark() to avoid triggering UI updates,
        // we manually apply the body classes and active indicator.
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        document.getElementById('theme-option-dark').classList.add('current-active');
        document.getElementById('theme-option-light').classList.remove('current-active');
    } else if (savedLdTheme === 'light-theme') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        document.getElementById('theme-option-light').classList.add('current-active');
        document.getElementById('theme-option-dark').classList.remove('current-active');
    }
    // Note: If savedLdTheme is null, it defaults to whatever is defined in your CSS/HTML.
    // 2. Load Color Theme Preference
    const savedColorTheme = localStorage.getItem('color-theme');
    if (savedColorTheme) {
        // List of all color theme classes and their corresponding option IDs
        const colorThemesMap = {
            'pink-theme': 'theme-option-pink',
            'red-theme': 'theme-option-red',
            'blue-theme': 'theme-option-blue',
            'purple-theme': 'theme-option-purple',
            'green-theme': 'theme-option-green',
            'yellow-theme': 'theme-option-yellow',
            'brown-theme': 'theme-option-brown',
            'orange-theme': 'theme-option-orange'
        };

        // Remove all color classes from the body first
        Object.keys(colorThemesMap).forEach(themeClass => {
            document.body.classList.remove(themeClass);
            const optionElement = document.getElementById(colorThemesMap[themeClass]);
            if (optionElement) {
                optionElement.classList.remove('current-theme');
            }
        });

        // Apply the saved color theme and set its active indicator
        document.body.classList.add(savedColorTheme);
        const activeOptionId = colorThemesMap[savedColorTheme];
        const activeOptionElement = document.getElementById(activeOptionId);
        if (activeOptionElement) {
            activeOptionElement.classList.add('current-theme');
        }
    }
});