import "./about.css";
import Franz from "./PuhujaIMG/frans_tihverainen.jpg";
//import Mikko from "./PuhujaIMG/mikko_kodisoja.jpg";
import React from "react";
//import { Card, Button } from 'react-bootstrap';
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
                      <hr></hr>
                      <h4 className="text-center"><strong>Franz Tihverainen</strong></h4>
                      <card>
                          <div className="profile-card-4 text-center">
                              <img src={Franz} alt="Logo" />
                              <div className="profile-content">
                                  <div className="profile-name">
                                  </div>
                                  <div className="profile-description">Erilainen urapolku - Frans Tihveräinen: Suoraan koulun penkiltä pitkän linjan AR-ammattilaiseksi. Frans kertoo omasta nousustaan AR-ammattilaiseksi, ja esittelee omat vinkkinsä yrittäjyydestä haaveileville opiskelijoille. Puheenvuoro esitetään suomeksi.
                                  </div>

                              </div>

                          </div>
                      </card>
                  </div>
                  <div className="col-md-6">
                      <hr></hr>
                      <h4 className="text-center"><strong>Franz Tihverainen</strong></h4>

                      <div className="profile-card-4 text-center">
                          <img src={Franz} alt="Logo" />
                          <div className="profile-content">
                              <div className="profile-name">
                              </div>
                              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing
                                  elitr, sed diam nonumy eirmod tempor.
                              </div>

                          </div>

                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                      <hr></hr>
                      <h4 className="text-center"><strong>Franz Tihverainen</strong></h4>

                      <div className="profile-card-4 text-center">
                          <img src={Franz} alt="Logo" />
                          <div className="profile-content">
                              <div className="profile-name">
                              </div>
                              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing
                                  elitr, sed diam nonumy eirmod tempor.
                              </div>

                          </div>
                      </div>

                  </div>
                  <div className="col-md-6">
                      <hr></hr>
                      <h4 className="text-center"><strong>Franz Tihverainen</strong></h4>

                      <div className="profile-card-4 text-center">
                          <img src={Franz} alt="Logo" />
                          <div className="profile-content">
                              <div className="profile-name">
                              </div>
                              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing
                                  elitr, sed diam nonumy eirmod tempor.
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </div>


      </div>


  );
};

export default About;
