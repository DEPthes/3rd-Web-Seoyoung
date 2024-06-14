import React, { useState } from "react";
import Display from "./Display.jsx";
import ButtonPanel from "./ButtonPanel.jsx";
import "./Calculator.css";

const App = () => {
  const [currentValue, setCurrentValue] = useState("0"); //현재값 저장
  const [previousValue, setPreviousValue] = useState(null); //이전값 저장
  const [operator, setOperator] = useState(null); //연산자 저장
  const [resetDisplay, setResetDisplay] = useState(false); //디스플레이 리셋 상태

  //숫자버튼 클릭. 현재 값이 0이거나 디스플레이를 리셋해야 하면 number를 현재 값에 저장
  const inputNumber = (number) => {
    if (currentValue === "0" || resetDisplay) {
      setCurrentValue(number);
      setResetDisplay(false); //이어서 입력중에 리셋되지 않도록 함
    } else {
      setCurrentValue(currentValue + number); //아닌 경우 현재값에 이어서 숫자 작성
    }
  };

  //소수점 클릭. 소수점이 포함되어 있지 않으면 소수점 추가
  const inputDecimal = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  };

  // 연산자 클릭. 현재값과 연산자가 null이 아닌경우 연산 시행. 결과를 현재값으로 저장.
  const inputOperator = (op) => {
    if (!resetDisplay && previousValue != null && operator) {
      setCurrentValue(String(operate(previousValue, currentValue, operator)));
    }
    setPreviousValue(currentValue); //현재 값을 이전값에 저장
    setOperator(op); //연산자를 op로 설정
    setResetDisplay(true); //다음 숫자가 입력되면 디스플레이 다시 리셋
  };

  // =버튼 누르면 시행
  const calculate = () => {
    if (previousValue != null && operator && !resetDisplay) {
      setCurrentValue(String(operate(previousValue, currentValue, operator)));
      setPreviousValue(null);
      setOperator(null);
    }
    setResetDisplay(true);
  };

  // 부호 변경 함수
  const plusMinus = () => {
    if (currentValue.startsWith("-")) {
      setCurrentValue(currentValue.substring(1)); //-로 시작하면 currentVlaue의 index 1부터 끝까지만 돌려줌(-만 제거)
    } else {
      setCurrentValue("-" + currentValue);
    }
  };

  //  % 계산
  const percent = () => {
    setCurrentValue(String(parseFloat(currentValue) / 100));
  };

  //연산수행 함수
  const operate = (a, b, op) => {
    a = parseFloat(a);
    b = parseFloat(b); //a,b 값을 실수로 변환
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return b;
    }
  };

  //AC 버튼 클릭. 디스플레이 초기화
  const clearDisplay = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
    setResetDisplay(false);
  };

  return (
    <div className="calculator">
      <Display value={currentValue} />
      <ButtonPanel
        onNumberClick={inputNumber}
        onOperatorClick={inputOperator}
        onDecimalClick={inputDecimal}
        onEqualsClick={calculate}
        onClearClick={clearDisplay}
        onPlusMinusClick={plusMinus}
        onPercentClick={percent}
      />
    </div>
  );
};

export default App;
