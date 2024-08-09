import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Search from "./components/Search";

const API_BASE_URL = "http://localhost:8000";

const App = () => {
  return (
    <>
    <Navbar bg="light">
      <Navbar.Brand className="ps-3">Web Page Analyzer</Navbar.Brand>
    </Navbar>
    <Container className="pt-3">
      <Search apiBaseUrl={API_BASE_URL} />
    </Container>
    </>
  );
}

export default App;
