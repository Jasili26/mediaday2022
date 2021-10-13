import './App.css';
import './styles/nav.css'
import { Switch, Route, Link } from "react-router-dom";
import {Card, Nav, Navbar} from 'react-bootstrap';


import AboutPage from './pages/AboutPage'
import PromoVideo from './pages/PromoVideo';
import EventPage from './pages/EventPage';
import SchedulePage from './pages/SchedulePage';
import logo from './mdlogonen.png';
import plogo from './mediadaypng.png';

import React from "react";

function App() {

  return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Navbar.Brand as={Link} to="/">
            <img src={plogo}
                 alt=""
                 height="35"
                 left="5px"
                 className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
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
                <Nav.Link as={Link} to="/event/live"><h4>Live</h4></Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link id="login" as={Link} to="/"><h4>Kirjaudu sisään</h4></Nav.Link>
              </Nav.Item>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage name="Tietoja"/>
          </Route>
          <Route path="/schedule">
            <SchedulePage/>
          </Route>
          <Route path="/promovideo">
            <PromoVideo/>
          </Route>
          <Route path="/event/:id" children={<EventPage/>}/>
          <Route path="/">
            <AboutPage name="Tietoja"/>

          </Route>
        </Switch>
        <footer style={{background: "#292b2c", padding: "30px", marginTop: "75px", color: "white"}}>
          <div className="row">
            <div className="col-md-6">
              <img src={logo}/>
            </div>


            <div className="col-md-6" style={{color: "white"}}>
              <h4>Yhteystiedot:</h4>
              <p>Ota yhteyttä
                Haluatko ottaa osaa tapahtumaan tai sinulla on muuta kysyttävää? Yhteydenotot ja tiedustelut
                puhelimitse tuottaja Päivi Pitkäseen 040 123 4567
                tai sähköpostilla mediaday2021@metropolia.fi</p>
              <h4>Järjestäjät:</h4>
              <p>Mediadayn järjestää Metropolia Ammattikorkeakoulu yhteistyökumppaneiden kanssa.</p>
              <h4>Medioille:</h4>
              <p>Löydät Mediadayn lehdistötiedotteen täältä suomeksi ja englanniksi (julkaistaan 12/2021).</p>
            </div>
            <div className="col-md-4">

            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;
