import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from './Form'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3333/api");
      setData(result.data);
    }
    fetchData();
  }, []);
  console.log("data", data);
  return (
    <div>
      {/* {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))} */}
      <Form /> 
    </div>
  );
}

export default App;
