import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import { Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";

const Table = () => {
  const [data, setData] = useState([]);

  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get("http://127.0.0.1:3333/crud");
      const arr = Object.entries(api.data);

      setData(arr[0][1]);
    };
    fetchData();
  }, [data]);

  const update = async () => {
    await axios.put(`http://127.0.0.1:3333/crud/${formData.id}`, formData);
  };
  const [showPop, setShowPop] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    update();
    setFormData({
      username: "",
      age: "",
      email: "",
    });
    // Close the form modal
    setShowForm(false);
  };
  const handleClick = (id) => {
    setShowForm(true);
    setShowPop(true);
    const idx = data.findIndex((e) => e.id === id);
    setFormData({
      id: id,
      username: data[idx].username,
      age: data[idx].age,
      email: data[idx].email,
    });
  };
  return (
      <div>
           <Home/>
      {/* //==================== userFormpopup============================ */}
      {showForm && (
        <div className={`form-popup ${showPop ? "show" : ""}`}>
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
            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                setShowForm(false);
                setShowPop(false);
              }}
            >
              Close
            </button>
          </form>
        </div>
      )}
      {/*=========================== userFrom end================================ */}
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleClick(user.id)}>Update</button>
              </td>
              <td>
                <button
                  onClick={() =>
                    axios.delete(`http://127.0.0.1:3333/crud/${user.id}`)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
