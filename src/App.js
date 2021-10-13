import './App.css';
import './styles/nav.css'
import { Switch, Route, Link } from "react-router-dom";
import {Card, Image, Nav, Navbar} from 'react-bootstrap';


import AboutPage from './pages/AboutPage'
import PromoVideo from './pages/PromoVideo';
import EventPage from './pages/EventPage';
import SchedulePage from './pages/SchedulePage';
import logo from './mdlogonen.png';
import plogo from './mediadaypng.png';
import facebooklogo from './facebookicon.png';
import instagramlogo from './instagramicon.png';
import twitterlogo from './twittericon.png';

import React from "react";

function App() {

  return (
      <div className="App">
        <Navbar id="navbar1" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Navbar.Brand as={Link} to="/">
            <img src={plogo}
                 alt="MediaDaylogo"
                 height="35"
                 className="d-inline-block align-top"
            />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">


            <Nav defaultActiveKey="/home" className="me-auto">

              <Nav.Item>
                <Nav.Link as={Link} to="/schedule"><p className="navtext">Kalenteri</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/promovideo"><p className="navtext">Promo</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/event/live"><p className="navtext">Live</p></Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link id="login" as={Link} to="/"><p className="navtext">Kirjaudu sisään</p></Nav.Link>
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

              <a target="_blank" href="https://www.facebook.com/">
                <Image
                    alt="Facebook ikoni"
                    height="53"
                    src={facebooklogo} className="facebookIcon" />
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <Image
                    alt="Instagram ikoni"
                    height="55"
                    src={instagramlogo} className="instagramIcon" />
              </a>
              <a target="_blank" href="https://twitter.com/">
                <Image
                    alt="Twitter ikoni"
                    height="55"
                    src={twitterlogo} className="twitterIcon" />
              </a>
            </div>
            <div className="col-md-4">

            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;
