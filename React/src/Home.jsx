import { useNavigate } from "react-router-dom";

const Home = () => {
  const navgat = useNavigate();
  return (
    <div>
      <button onClick={() => navgat("/addinfo")}>Add Info</button>
      <button onClick={() => navgat("/showinfo")}>Show Info</button>
    </div>
  );
};
export default Home;
