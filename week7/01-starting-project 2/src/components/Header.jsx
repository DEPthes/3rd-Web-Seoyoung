import logo from "../assets/investment-calculator-logo.png";

export default function Header({ onToggleDarkMode, darkMode }) {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
      <button onClick={onToggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </header>
  );
}
