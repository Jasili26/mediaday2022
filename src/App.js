import './App.css';
import './styles/nav.css'
import { Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


import AboutPage from './pages/AboutPage'
import PromoVideo from './pages/PromoVideo';
import EventPage from './pages/EventPage';
import SchedulePage from './pages/SchedulePage';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <h3>Mediaday 2022</h3>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav defaultActiveKey="/home" className="me-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/about"><h4>Tietoja</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/schedule"><h4>Kalenteri</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/promovideo"><h4>Promo</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/event/live"><h4>Mediaday LIVE</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/"><h4>Kirjaudu Sisään</h4></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <AboutPage name="Tietoja" />
        </Route>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
        <Route path="/promovideo">
          <PromoVideo />
        </Route>
        <Route path="/event/:id" children={<EventPage />} />
        <Route path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
