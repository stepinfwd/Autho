import React from "react";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleLogout,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>

        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{passError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                dont have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>SingUp</button>
              <p>
                have an account{" "}
                <span onClick={() => setHasAccount(!hasAccount)}> sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
