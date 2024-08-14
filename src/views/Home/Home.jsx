import { useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Home</h1>
      <Link to="/profile">Profile</Link>
      <Link to={`/about/${count}`}>About</Link>

      <div>
        <h1
          style={{
            display: "block",
          }}
        >
          {count}
        </h1>
        <button onClick = {handleIncrement}>Increment</button>
        <button onClick = {handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Home;
