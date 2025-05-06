import { useTheme } from '../context/ThemeContext';
import '../styles/toggle.css'; // CSS file for styling

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle ${dark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
