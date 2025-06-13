document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');

  // Apply saved theme to all pages
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleButton) toggleButton.textContent = '☀️ Light Mode';
  }

  // Add toggle functionality only if the button exists (i.e., on landing page)
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      toggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
