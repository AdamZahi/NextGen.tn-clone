let isMinimized = false;
const startBtn = document.getElementById('startBtn');
const minimizeBtn = document.getElementById('minimizeBtn');
const studyHelpBtn = document.getElementById('study-help-btn');

startBtn.onclick= function(){
    console.log('Start button clicked');
}
minimizeBtn.onclick = function minimizeSideBar() {
    const sidebar = document.getElementById('sidebar');
    const sideTextElements = sidebar.querySelectorAll('span, h2, .flex-1');
    const textElements = document.getElementById('sideContent').querySelectorAll('span, h2, .flex-1');
    const mainContentWrapper = document.querySelector('.main-content');
    const arrow = document.getElementById('arrow');
    const iconsAndImages = document.getElementById('sideContent').querySelectorAll('img, svg');

    isMinimized = !isMinimized;

    if (isMinimized) {
        sidebar.classList.add('w-16');
        sidebar.classList.remove('w-auto');
        arrow.classList.add('rotate-180');
        mainContentWrapper.classList.remove('md:ml-72');
        mainContentWrapper.classList.add('md:ml-16');
        sideTextElements.forEach(el => el.classList.add('hidden'));
        textElements.forEach(el => el.classList.add('hidden'));
        iconsAndImages.forEach(el => el.classList.remove('hidden'));
    } else {
        sidebar.classList.remove('w-16');
        sidebar.classList.add('w-auto');
        arrow.classList.remove('rotate-180');
        mainContentWrapper.classList.remove('md:ml-16');
        mainContentWrapper.classList.add('md:ml-72');
        sideTextElements.forEach(el => el.classList.remove('hidden'));
        textElements.forEach(el => el.classList.remove('hidden'));
        // Ensure icons and images inside sideContent are visible
        iconsAndImages.forEach(el => el.classList.remove('hidden'));
    }
}
studyHelpBtn.onclick= function loadStudyHelpContent() {
    const studyHelpBtn = document.getElementById('study-help-btn');
    const dropdown = document.getElementById('study-help-dropdown');
    const content = [
        {iconPath: "Images/documents.png", title: "Document Chat"},
        {iconPath: "Images/contract.png", title: "Summarize"},
        {iconPath: "Images/quiz.png", title: "Quiz Maker"},
        {iconPath: "Images/card.png", title: "Flashcards Maker"},
        {iconPath: "Images/cheatsheet.png", title: "cheatsheet Maker"},
        {iconPath: "Images/feynman.png", title: "feynman Technique"},
        {iconPath: "Images/notebook.png", title: "Exercise Generator"},
        {iconPath: "Images/course-assign.png", title: "Assignment Checker"},
    ];
    if(dropdown.textContent===''){
        content.forEach(item => {
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'h-12 block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-800';
            link.innerHTML = `<img src="${item.iconPath}" alt="${item.title}" class="mr-2 inline-block" width="20" height="20">${item.title}`;
            dropdown.appendChild(link);
        });
    }else{
        dropdown.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const themeIcon = toggleThemeBtn.querySelector('img');
    
    // Enhanced theme setter
    function setTheme(isDark) {
        // Remove all theme classes first
        document.documentElement.classList.remove('light', 'dark');
        document.body.classList.remove('light', 'dark');
        
        if (isDark) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
            themeIcon.src = 'Images/moon.png';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light');
            document.body.classList.add('light');
            themeIcon.src = 'Images/sunny.png';
            localStorage.setItem('theme', 'light');
        }
        
        // Force repaint
        document.body.style.display = 'none';
        document.body.offsetHeight; // trigger reflow
        document.body.style.display = '';
    }

    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme === 'dark');
        } else {
            setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }

    initTheme();

    // Toggle theme
    toggleThemeBtn.addEventListener('click', function() {
        setTheme(!document.documentElement.classList.contains('dark'));
    });
});