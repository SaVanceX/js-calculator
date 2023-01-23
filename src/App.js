import { useState, useRef } from "react";
function App() {
  const buttons = [
    {
      id: "equals",
      value: "=",
      class: "equal-sign",
    },
    {
      id: "one",
      value: "1",
    },
    {
      id: "two",
      value: "2",
    },
    {
      id: "three",
      value: "3",
    },
    {
      id: "four",
      value: "4",
    },
    {
      id: "five",
      value: "5",
    },
    {
      id: "six",
      value: "6",
    },
    {
      id: "seven",
      value: "7",
    },
    {
      id: "eight",
      value: "8",
    },
    {
      id: "nine",
      value: "9",
    },
    {
      id: "zero",
      value: "0",
    },
    {
      id: "add",
      value: "+",
      class: "operator add",
    },
    {
      id: "subtract",
      value: "-",
      class: "operator subtract",
    },
    {
      id: "multiply",
      value: "X",
      class: "operator multiply",
    },
    {
      id: "divide",
      value: "/",
      class: "operator divide",
    },
    {
      id: "decimal",
      value: ".",
    },
    {
      id: "clear",
      value: "AC",
      class: "all-clear",
    },
  ];
  const outPutRef = useRef(null);
  const [output, setOutput] = useState("0");
  const [expression, setExpresion] = useState("");
  const [decimalCounter, setDicimalCounter] = useState(0);

  const handleClick = (event) => {
    const input = event.target.innerText;

    // clears output display on "AC/All Clear click"
    if (input === "AC") {
      setOutput("0");
      setExpresion("");
      setDicimalCounter(0);
      return;
    }

    // Handle Decimal use cases
    // if expression is empty and output is only 0 and input is decimal
    if (input === "." && expression === "" && output === "0") {
      setOutput("0" + ".");
      setExpresion("0" + ".");
      setDicimalCounter(1);
      console.log("Decimal case 1");
    }
    if (
      input === "." &&
      expression === "0" &&
      output === "0" &&
      decimalCounter < 1
    ) {
      setOutput(output + input);
      setExpresion(expression + input);
      setDicimalCounter(1);
      console.log("Decimal case 2");
    }

    if (
      input === "." &&
      expression !== "0" &&
      output !== "0" &&
      decimalCounter < 1
    ) {
      setOutput(output + input);
      setExpresion(expression + input);
      setDicimalCounter(1);
      console.log("Decimal case 3");
    }

    if (Number.isInteger(Number(input))) {
      //////////////////////////////////////////////////////
      // Handle whole number
      // user clicks integer
      // if decimal exist concat number after decimal
      if (decimalCounter === 1) {
        // Decimal Case 4
        setOutput(output + input);
        setExpresion(expression + input);
        console.log("Decimal Case 4");
      }

      if (input === "0" && output === "0" && expression === "") {
        setExpresion("0");
        console.log("Case 4");
      }

      if (
        input !== "0" &&
        input !== "." &&
        output.length === 1 &&
        output === "0"
      ) {
        console.log("Case 5");
        setOutput(input);
        setExpresion(input);
      }

      if (input !== "." && output !== "0") {
        setOutput(output + input);
        setExpresion(expression + input);
        console.log("Case 6");
      }
    }
  };
  // My calculator should contain a clickable element with an id="clear"
  const calcButtons = buttons.map((btn) => (
    <button
      onClick={handleClick}
      className={btn.class}
      key={btn.id}
      id={btn.id}
    >
      {btn.value}
    </button>
  ));

  return (
    <>
      <div className="calc-wrapper">
        <main className="calculator">
          <div className="formula-screen">{expression}</div>
          <div className="output-screen" ref={outPutRef} id="display">
            {output}
          </div>
          <div className="calc-buttons">{calcButtons}</div>
          <div className="grid-wrapper"></div>
        </main>
      </div>
    </>
  );
}

export default App;
