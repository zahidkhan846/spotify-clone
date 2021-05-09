import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=1fb661a4e82e4c078177213f7bf94c32&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center full-height">
      <a href={AUTH_URL} className="btn btn-success btn-lg">
        Login with spotify
      </a>
    </Container>
  );
}

export default Login;
