import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./logo.png";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import IngredientSearchForm from "./Components/IngredientSearchForm";
import { Routes, Route, Link } from "react-router-dom";
import SearchResultDisplay from "./Components/SearchResultDisplay";
import SavedIngredients from "./Components/SavedIngredients";

function App() {
  const [searchItemSrc, setSearchItemSrc] = useState("");
  const [APIData, setAPIData] = useState([]);
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    const ingredientsUrl = `https://awful-boot-crow.cyclic.app/ingredient`;
    console.log(ingredientsUrl);
    fetch(ingredientsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("API for title is successful", data);
        setAPIData(data);
      });
  }, []);

  const handleSubmitFromChild = (val) => {
    console.log("Parent received:" + val);
    setSearchItemSrc(val);
  };

  const handleAddToList = (el) => {
    console.log("Button clicked!");
    const oldList = [...list];
    const newList = oldList.concat(el);
    setList(newList);
    navigate("/list");
  };

  return (
    <div className="App">
      <nav>
        <Navbar bg="light">
          <Container>
            <Navbar.Collapse className="justify-content-start">
              <Navbar.Text></Navbar.Text>
              <Navbar.Text style={{ marginLeft: "0.8rem" }}>
                <i onClick={handleShow} class="fa-solid fa-bars fa-2xl"></i>
              </Navbar.Text>
            </Navbar.Collapse>
            <Link to ="/">
              <Navbar.Brand>
                <img
                  src={require("./logo.png")}
                  width="100px"
                  height="50px"
                  className="logo"
                  alt="No-itch Kitchen logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{ marginLeft: "0.8rem" }}>
                <i class="fa-solid fa-circle-user fa-2xl"></i>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <Offcanvas show={show} onHide={handleClose} className="Offcanvas">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img
              src={require("./logo-circle.png")}
              width="90px"
              height="90px"
              className="logo-circle"
              alt="No-itch Kitchen circle logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="Offcanvas-body">
          <h3>About</h3>
          <br/>
          <br/>
          <h3>Recipes</h3>
          <br/>
          <br/>
          <Link to ="/">
            <h3>Ingredient Search</h3>
          </Link>
          <br/>
          <br/>
          <Link to ="/list">
            <h3>Saved Ingredients</h3>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <IngredientSearchForm onHandleSubmit={handleSubmitFromChild} />
            }
          />
          <Route
            path="search"
            element={
              <SearchResultDisplay
                itemSrc={searchItemSrc}
                APIDataSrc={APIData}
                listItemSrc={handleAddToList}
              />
            }
          />
          <Route path="list" element={<SavedIngredients listSrc={list} />} />
        </Routes>
      </main>
      <nav>
        <Navbar fixed="bottom" bg="light">
          <Container>
            <Navbar.Brand href="#home" style={{ fontSize: "15px" }}>
              © 2023 No-itch Kitchen
            </Navbar.Brand>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
}

export default App;
