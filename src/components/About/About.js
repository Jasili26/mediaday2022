import "./about.css";
import Franz from "./PuhujaIMG/frans_tihverainen.jpg";
import Mikko from "./PuhujaIMG/mikko_kodisoja.jpg";
import Sami from "./PuhujaIMG/sami_marttinen.jpg";
import Ulrich from "./PuhujaIMG/Ulrich_Mors.jpg";
import React from "react";
import { Card, Button } from 'react-bootstrap';
//import Hello from "../Hello/Hello";
const About = ({ name }) => {

    document.title = "hello from about"

  return (
      <div className="container">
          <div className="row">
              <div className="col-sm">
                 <h4> Puhujia eri teollisuudenaloilta </h4>
                  <p>Huipputason ammattilaisten puheenvuoroja, mukana onta rautaista puhujaa monelta mediakentän osa-alueelta.</p>
              </div>
              <div className="col-sm">
                 <h4> Mediaday yhdistää</h4>
                  <p>Mediaday tuo opiskelijat ja yritysmaailman yhteen. Näet uusimmat jutut ja tutustu ammattilaisten maailmaan.</p>
              </div>
              <div className="col-sm">
                  <h4> Rento ilmapiiri</h4>
                  <p>Hyväntuulinen tekemisen meininki. Meillä voi vapaasti kysellä ja ihmetellä.</p>
              </div>
          </div>
          <header>
              <div className="container text-center">
                  <div className="blocker">
                      <h1><b>Puhujat</b></h1>
                  </div>
              </div>
          </header>

          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Mikko} alt="Card image" />
                          <Card.ImgOverlay>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Mikko Kodisoja, FIREFRAME</Card.Title>
                              <Card.Text>
                                  Yrityksen perustaja Mikko Kodisoja kertoo, miksi vaihtoi peliteollisuuden elokuvamaailmaan. Kuumana puheenaiheena Suomen ensimmäinen Hollywood-tason ledseinä-studio. Puheenvuoro esitetään englanniksi.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
                  <div className="col-md-6">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Sami} alt="Card image" />
                          <Card.ImgOverlay>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Sami Marttinen, SWAPPIE</Card.Title>
                              <Card.Text>
                                  Sami Marttinen esittelee Swappien tarinan, ja teknologian merkityksen yrityksen nousun taustalla. Puheenvuoro esitetään suomeksi.

                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
              </div>
              <div className="row">


                  <div className="col-md-6">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Franz} alt="Card image" />
                          <Card.ImgOverlay>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Frans Tihveräinen, FLYAR</Card.Title>
                              <Card.Text>
                                  Erilainen urapolku - Frans Tihveräinen: Suoraan koulun penkiltä pitkän linjan AR-ammattilaiseksi. Frans kertoo omasta nousustaan AR-ammattilaiseksi, ja esittelee omat vinkkinsä yrittäjyydestä haaveileville opiskelijoille. Puheenvuoro esitetään suomeksi.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
                  <div className="col-md-6">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Ulrich} alt="Card image" />
                          <Card.ImgOverlay>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Ulrich Mors, Sony Independent Expert</Card.Title>
                              <Card.Text>
                                  Ulrich Mors esittelee Sonyn uusimmat videokamerauutuudet ammattimaisten videotuotantojen käyttöön. Näkökulmana kameroiden käyttö eurooppalaisessa indie-elokuvatuotannossa, josta Ulrichilla on itsessään paljon kokemusta. Puheenvuoro esitetään englanniksi.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
              </div>
          </div>


      </div>


  );
};

export default About;
