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

  // My calculator should contain a clickable element with an id="clear"
  const calcButtons = buttons.map((btn) => (
    <button className={btn.class} key={btn.id} id={btn.id}>
      {btn.value}
    </button>
  ));

  return (
    <>
      <div className="calc-wrapper">
        <main className="calculator">
          <div className="formula-screen">Expression Here</div>
          <div className="output-screen" id="display">
            Display
          </div>
          <div className="calc-buttons">{calcButtons}</div>
          <div className="grid-wrapper"></div>
        </main>
      </div>
    </>
  );
}

export default App;
