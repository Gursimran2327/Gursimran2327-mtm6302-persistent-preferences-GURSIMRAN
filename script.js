// Select elements
const itemList = document.getElementById('itemList');
const themeSelect = document.getElementById('themeSelect');
const listStyleSelect = document.getElementById('listStyleSelect');

// Add list items dynamically
const items = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
});

// Load saved preferences
const loadPreferences = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedListStyle = localStorage.getItem('listStyle') || 'expanded';

    document.body.className = savedTheme;
    itemList.className = `list ${savedListStyle}`;

    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;
};

// Save preferences to local storage
const savePreferences = () => {
    localStorage.setItem('theme', themeSelect.value);
    localStorage.setItem('listStyle', listStyleSelect.value);
};

// Update theme
themeSelect.addEventListener('change', () => {
    document.body.className = themeSelect.value;
    savePreferences();
});

// Update list style
listStyleSelect.addEventListener('change', () => {
    itemList.className = `list ${listStyleSelect.value}`;
    savePreferences();
});

// Initialize preferences on page load
loadPreferences();
