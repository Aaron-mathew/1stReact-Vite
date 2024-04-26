import { useState } from "react";

const App = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  setInterval(() =>{
    settime(new Date().toLocaleTimeString())
  ,1000})



  return (
    <>
      <h1>{time}</h1>
    </>
  );
};

export default App
