import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    // Initialize state for form data
    // Example: name: '',
    //          email: '',
    //          ...
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
      event.preventDefault(); 

    try {
      console.log(formData);
        // const response = await axios.post(
        //   "http://localhost:3333/projects",
        //   formData
        // );
        // console.log(response)
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Send Data to Adonis Backend</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="description"
          name="description"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
