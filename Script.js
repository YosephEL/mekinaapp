// Toggle Burger Menu Drawer
function toggleBurgerMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const navDrawer = document.getElementById('nav-drawer');
    
    burgerBtn.classList.toggle('active');
    navDrawer.classList.toggle('open');
}

// Close Burger Drawer and Switch Tab
function selectMenuFromBurger(tabName) {
    toggleBurgerMenu(); // Close drawer
    switchTab(tabName);  // Switch content
}

// Switch active tab section
function switchTab(tabName) {
    // Hide all content sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => section.classList.remove('active'));

    // Remove active style from all menu cards
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => card.classList.remove('active'));

    // Show selected section and highlight active card
    document.getElementById(tabName + '-section').classList.add('active');
    
    const activeCard = document.getElementById('card-' + tabName);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    // Smooth scroll down to body content area
    const contentBody = document.getElementById('content-body');
    contentBody.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Dynamically set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});