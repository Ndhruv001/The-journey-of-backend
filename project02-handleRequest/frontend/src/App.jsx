import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/places")
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log("ERROR", error);
    }
  }, []);

  return (
    <div>
      <h1>Beautifull Places in the World!</h1>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.content}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
