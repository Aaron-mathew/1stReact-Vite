const App = () => {
  const testHandler = (msg) => {
    console.log("Function called",msg);
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => testHandler("heloo")}>Call Function</button>
    </div>
  );
};

export default App


//Differnce between function and methods,tdz,hoisting,hof,pure and impure function,{os}

