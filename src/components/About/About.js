import "./about.css";
import Franz from "./PuhujaIMG/fransbest.png";
import Mikko from "./PuhujaIMG/mikkobest.png";
import Sami from "./PuhujaIMG/samibest.png";
import Ulrich from "./PuhujaIMG/ulrichbest.png";
import Mika from "./PuhujaIMG/mikabest.png";
import cover from "./PuhujaIMG/sometest.jpg";
import React from "react";
import {Card, Button, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
//import Hello from "../Hello/Hello";


const About = ({ name }) => {

    document.title = "Tietoja"

  return (

      <div className="container">
          <div className="bgimg-1">
              <div className="caption">
                  <span className="border">Mediaday 2022</span>
              </div>
          </div>

          <Link to="event/live">

              <Button variant="success" size="lg">
                  LIVESTREAM
              </Button>

          </Link>

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
                      <h1 style={{color: "white"}}><b>Puhujat</b></h1>
                  </div>
              </div>
          </header>

          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Mikko} alt="Card image" />
                          <Card.ImgOverlay>
                              <Link to="event/mikko">

                                  <Button variant="success" size="sm">
                                      Lisätietoja
                                  </Button>

                              </Link>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Mikko Kodisoja</Card.Title>
                              <Card.Text>
                                  1.4.2022 Kello 10:00
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
                  <div className="col-md-3">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Sami} alt="Card image" />
                          <Card.ImgOverlay>
                              <Link to="event/sami">

                                  <Button variant="success" size="sm">
                                      Lisätietoja
                                  </Button>

                              </Link>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Sami Marttinen</Card.Title>
                              <Card.Text>
                                  1.4.2022 Kello 11:00

                              </Card.Text>
                          </Card.Body>

                      </Card>
                  </div>
                  <div className="col-md-3">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Franz} alt="Card image" />
                          <Card.ImgOverlay>
                              <Link to="event/franz">

                                  <Button variant="success" size="sm">
                                      Lisätietoja
                                  </Button>

                              </Link>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Frans Tihveräinen</Card.Title>
                              <Card.Text>
                                  1.4.2022 Kello 12:00
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
                  <div className="col-md-3">
                      <Card className="bg-dark text-white">
                          <Card.Img src={Ulrich} alt="Card image" />
                          <Card.ImgOverlay>
                              <Link to="event/ulrich">

                                  <Button variant="success" size="sm">
                                      Lisätietoja
                                  </Button>

                              </Link>

                          </Card.ImgOverlay>
                          <Card.Body>
                              <Card.Title>Ulrich Mors</Card.Title>
                              <Card.Text>
                                  1.4.2022 Kello 13:00
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
              </div>
                  <Link to="/schedule">
                      <div className="d-grid gap-1">
                  <Button variant="success" size="md">
                      Kalenteri
                  </Button>
                      </div>
                  </Link>


          </div>


      </div>


  );
};

export default About;
