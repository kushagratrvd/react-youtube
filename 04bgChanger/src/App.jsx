import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="justify-center bottom-12 fixed flex flex-wrap inset-x-0 px-2 gap-2">
        <button className="bg-white text-black px-4 py-2 rounded shadow-lg" onClick={() => setColor("red")} style={{ backgroundColor: 'red', color: 'white' }}>Red</button>
        <button className="bg-white text-black px-4 py-2 rounded shadow-lg" onClick={() => setColor("blue")} style={{ backgroundColor: 'blue', color: 'white' }}>Blue</button>
        <button className="bg-white text-black px-4 py-2 rounded shadow-lg" onClick={() => setColor("green")} style={{ backgroundColor: 'green', color: 'white' }}>Green</button>
        <button className="bg-white text-black px-4 py-2 rounded shadow-lg" onClick={() => setColor("black")} style={{ backgroundColor: 'black', color: 'white' }}>Black</button>
      </div>
    </div>
  );
}

export default App;
