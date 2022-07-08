import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../../context/RegisterContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    country: undefined,
    img: undefined,
    city: undefined,
    phone: undefined,
  });

  const { loading, error, dispatch } = useContext(RegisterContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "NEW_USER" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {}
  };

  return (
    <div>
      <Navbar />
      <div className="register">
        <div className="rContainer">
          <h1>CRÉER UN COMPTE</h1>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="text"
            placeholder="Pays"
            id="country"
            onChange={handleChange}
            className="rInput"
          />
          <br />
          <input type="file" id="img" onChange={handleChange} />
          <br />
          <input
            type="text"
            placeholder="Ville"
            id="city"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="text"
            placeholder="N° Telephone"
            id="phone"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          {/* <input
              type="password"
              placeholder="confirmpassword"
              value={confirmpassword}
              onChange={(event) => setconfirmpassword(event.target.value)}
              className="rInput"
            />
            <br /> */}
          <button disabled={loading} onClick={handleClick} className="lButton">
            CRÉER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
