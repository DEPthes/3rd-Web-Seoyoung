import React from "react";
import Button from "./Button";

const ButtonPanel = ({
  onNumberClick, //숫자 클릭
  onOperatorClick, //연산자 클릭
  onDecimalClick, //소수점
  onEqualsClick, //등호
  onClearClick, //AC
  onPlusMinusClick, //+/-
  onPercentClick, //%
}) => {
  return (
    <div className="button-container">
      <Button className="button gray" onClick={onClearClick} label="AC" />
      <Button className="button gray" onClick={onPlusMinusClick} label="+/-" />
      <Button className="button gray" onClick={onPercentClick} label="%" />
      <Button
        className="button orange"
        onClick={() => onOperatorClick("/")}
        label="÷"
      />
      <Button className="button" onClick={() => onNumberClick("7")} label="7" />
      <Button className="button" onClick={() => onNumberClick("8")} label="8" />
      <Button className="button" onClick={() => onNumberClick("9")} label="9" />
      <Button
        className="button orange"
        onClick={() => onOperatorClick("*")}
        label="×"
      />
      <Button className="button" onClick={() => onNumberClick("4")} label="4" />
      <Button className="button" onClick={() => onNumberClick("5")} label="5" />
      <Button className="button" onClick={() => onNumberClick("6")} label="6" />
      <Button
        className="button orange"
        onClick={() => onOperatorClick("-")}
        label="-"
      />
      <Button className="button" onClick={() => onNumberClick("1")} label="1" />
      <Button className="button" onClick={() => onNumberClick("2")} label="2" />
      <Button className="button" onClick={() => onNumberClick("3")} label="3" />
      <Button
        className="button orange"
        onClick={() => onOperatorClick("+")}
        label="+"
      />
      <Button
        className="button zero"
        onClick={() => onNumberClick("0")}
        label="0"
      />
      <Button className="button" onClick={onDecimalClick} label="." />
      <Button className="button orange" onClick={onEqualsClick} label="=" />
    </div>
  );
};

export default ButtonPanel;
