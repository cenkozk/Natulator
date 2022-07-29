import React from "react";
import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  const [displayNum, setDisplayNum] = React.useState("");
  const [displayAnswer, setDisplayAnswer] = React.useState("‎");
  const [num, setNum] = React.useState("");
  const [numsArray, setNumsArray] = React.useState([]);

  //fire it once click to any func..
  React.useEffect(() => {
    if (numsArray.length === 0) {
      return;
    }

    //set func symbol after eech click
    var tNum = "";
    numsArray.forEach((element) => {
      tNum += element;
    });
    setDisplayNum(tNum);
  }, [numsArray]);

  //fire it once click to any num
  React.useEffect(() => {
    if (num.length === 0) {
      return;
    }

    //calc eval
    var evalGo = "";
    var answer = "";

    var calcArray = [...numsArray, num];

    calcArray.forEach((element) => {
      evalGo += element;
    });

    setDisplayNum(evalGo);
    // eslint-disable-next-line
    if (numsArray.length === 0) {
      return;
    }
    answer = eval(evalGo);
    console.log(answer);
    setDisplayAnswer(answer);
    // eslint-disable-next-line
  }, [num]);

  function handleClickNum(num) {
    //return if not num
    var tNum;
    setNum((prevNum) => {
      tNum = prevNum + num.toString();
      return tNum;
    });
  }

  function handleClickFunctions(func) {
    //if there's no numbers return
    if (num.length === 0 && numsArray.length === 0) {
      return;
    }

    if (func === "=") {
      setNumsArray([]);
      setNum(`${displayAnswer}`);
      setDisplayAnswer("‎");
      return;
    }

    if (func === "C") {
      setDisplayNum("");
      setDisplayAnswer("‎");
      setNumsArray([]);
      setNum("");
      return;
    }

    if (func === "D") {
      if (numsArray.length === 0 || numsArray.length === 1) {
        setDisplayNum("");
        setDisplayAnswer("");
        setNumsArray([]);
        setNum(() => "");
        return;
      } else {
        var tArr = numsArray;
        tArr.pop();
        var tNum = !isNaN(parseInt(numsArray[numsArray.length - 1])) ? parseInt(numsArray[numsArray.length - 1]) : parseInt(numsArray[numsArray.length - 2]);
        setNumsArray([...tArr]);
        setNum("");
        return;
      }
    }

    if (num === "") {
      console.log("oko");
      return;
    }

    setNumsArray((prevNum) => [...prevNum, num, func]);
    setNum("");
  }

  return (
    <div className="natulator">
      <h1 className="calculation">{displayNum}</h1>
      <h1 className="answer">{displayAnswer}</h1>
      <Buttons handleClickNum={handleClickNum} handleClickFunctions={handleClickFunctions} />
    </div>
  );
}

export default App;
