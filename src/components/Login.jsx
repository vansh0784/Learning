import { Link } from "react-router-dom";

const Login = ({closeModal}) => {
  return (
    <>
      <div id="contain-login" className="modal-Overlay">
        <div className="modal-OverContent">
        <h1>Login to your account</h1>

        <label htmlFor="username-email">
          UserName/E-mail:
          <input
            id="username-email"
            className="forLogin"
            type="text"
            placeholder="Enter your Username/E-mail"
            size={25}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            id="password"
            className="forLogin"
            type="password"
            placeholder="Enter Password"
          />
        </label>

        <input id="lgn-btn" type="button" value="Submit" />

        <Link to="/forgot-password">
          <h3>Forgot your password?</h3>
        </Link>
        <h4>
          Don't have an account?{" "}
          <Link to="/signup">
            <strong>Signup</strong>
          </Link>
        </h4>
        <button onClick={closeModal}>Close</button>
      </div>
      </div>
    </>
  );
};

export default Login;
