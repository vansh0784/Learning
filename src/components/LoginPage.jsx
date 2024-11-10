const LoginPage = () => {
  return (
    <>
      <div className="modal">
        <div >
          <h1 id="signinHead">Sign in to Dil Se Dine </h1>
          <div id="loginform">
            <form>
              <fieldset>
                <label htmlFor="Username">
                  UserName or Email
                </label>
                <input type="text" id="Username" />
              </fieldset>
              <fieldset>
                <label htmlFor="Password">
                  Password
                </label>
                <input type="password" id="Password" />
              </fieldset>

              <input type="button" value="Sign In" id="signinbtn" />
              <h4>
                Don't have an account?<a href="">Signup</a>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
