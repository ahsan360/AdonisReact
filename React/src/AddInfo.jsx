import { useState } from "react";
import Home from "./Home";
import  axios  from "axios";

const AddInfo = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const ret = await axios.post("http://127.0.0.1:3333/crud", formData);
    setFormData({
      username: "",
      age: "",
      email: "",
    });
  };

  return (
    <>
      <Home />
      <br />
      <div className={`form-popup show`}>
        <form onSubmit={handleSubmit} className="form-container ">
          <h2>User Information</h2>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="age">
            <b>Age</b>
          </label>
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="15"
            max="30"
            required
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default AddInfo;
