import './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientSearchForm from './Components/IngredientSearchForm';
import { Routes, Route } from 'react-router-dom';
import SearchResultDisplay from './Components/SearchResultDisplay';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={require("./logo.png")}
                width= "100px"
                height= "50px"
                className="logo"
                alt="No-itch Kitchen logo"
              />
            </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                SIGN IN 
                </Navbar.Text>
                <Navbar.Text style={{ marginLeft: '0.8rem' }}>
                  <img
                  src={require("./login.jpg")}
                  width= "25px"
                  height= "25px"
                  className="login"
                  alt="Login logo"
                  margin="5px"
                  />
                </Navbar.Text>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<IngredientSearchForm/>} />
          <Route path="search" element={<SearchResultDisplay/>} />
        </Routes>
      </main>
      <nav>
        <Navbar fixed="bottom" bg="light">
          <Container>
            <Navbar.Brand href="#home" style={{fontSize:"15px"}}>
            © 2023 No-itch Kitchen
            </Navbar.Brand>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
}

export default App;
