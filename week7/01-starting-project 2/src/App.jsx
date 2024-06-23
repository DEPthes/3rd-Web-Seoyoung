import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const [darkMode, setDarkMode] = useState(true); // 다크 모드 추가

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function toggleDarkMode() {
    setDarkMode((dark) => !dark);
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* 다크모드 상태에 따라서 클래스 이름 변경 */}
      <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* 토글 핸들러를 헤더 컴포넌트로 전달 */}

      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
