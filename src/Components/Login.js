import { useRef, useState, useEffect, useContext } from "react";
import { useLocalStorage } from "@har4s/use-local-storage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import LoginBackground from '../Images/login-background.jpg';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [uid, setUid] = useLocalStorage("UID");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: user,
        password: pwd,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://awful-boot-crow.cyclic.app/auth/signin", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result?.user?.email ? result.user.email : null);
          //setAuth({ uid: result?.user?.uid ? result.user.uid : null });
          setUid(result?.user?.email ? result.user.email : null);
          setSuccess(true);
        })
        .catch((error) => console.log("error", error));
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="Login-Container">
      <img src={LoginBackground} className="Login-Image"/>
      {success ? (
        <section className="Login-Form">
          <h1 className="Login-Header">You are logged in!</h1>
          <br />
          <p>
            <a href="/search">Click here to proceed</a>
          </p>
        </section>
      ) : (
        <section className="Login-Form">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Form className="Login-Form" onSubmit={handleSubmit}>
            <h2>Sign in to your account</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                className="Login-Form-Field"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                // aria-invalid={validName ? "false" : "true"}
                // aria-describedby="uidnote"
                // onFocus={() => setUserFocus(true)}
                // onBlur={() => setUserFocus(false)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                className="Login-Form-Field"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                // aria-invalid={validName ? "false" : "true"}
                // aria-describedby="uidnote"
                // onFocus={() => setUserFocus(true)}
                // onBlur={() => setUserFocus(false)}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
            Sign In
          </Button>
          </Form>

        </section>
      )}
    </div>
  );
};

export default Login;
