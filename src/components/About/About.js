import "./about.css";
import Franz from "./PuhujaIMG/fransbest.png";
import Mikko from "./PuhujaIMG/mikkobest.png";
import Sami from "./PuhujaIMG/samibest.png";
import Ulrich from "./PuhujaIMG/ulrichbest.png";
import Avita from "./SponsoriIMG/avita2.png";
import Crestron from "./SponsoriIMG/crestron3.png";
import fireframe from "./SponsoriIMG/fireframe.png";
import flyar from "./SponsoriIMG/flyar.png";
import swappie from "./SponsoriIMG/swappie.png";
import fazer from "./SponsoriIMG/fazer.jpg";
import sony from "./SponsoriIMG/sony.png";
import panasonic from "./SponsoriIMG/panasonic.png";
import trail from "./SponsoriIMG/trail.jpg";
import metropolia from "./SponsoriIMG/metropolia2.png"

import React from "react";
import {Card, Button, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Video from "../Video/Video";
import CountDown from "../CountDown/CountDown";
import plogo from "../../mediadaypng.png";
//import Hello from "../Hello/Hello";
const About = ({ name }) => {

    document.title = "Mediaday 2022 Etusivu"

    return (
        <div className="container">
            <div className="bgimg-1">
                <div className="caption">
                    {/*<span className="border">Mediaday 2022</span>*/}
                    <img src={plogo}
                         alt="MediaDaylogo"
                         height="50"
                         className="d-inline-block align-top"
                    />
                </div>
            </div>
            <Link to="event/live">

                <Button variant="danger" size="lg" style={{margin: "5px"}}>
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
            <div>
                <CountDown />
            </div>
            <header>
                <div className="container text-center">
                    <div className="blocker">
                        <h1 className="display-6" style={{color: "white", height: "55px"}}>Puhujat</h1>
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

                                    <Button variant="danger" size="sm">
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

                                    <Button variant="danger" size="sm">
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

                                    <Button variant="danger" size="sm">
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

                                    <Button variant="danger" size="sm">
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
                        <Button variant="danger" size="md">
                            Kalenteri
                        </Button>
                    </div>
                </Link>


            </div>
            <header>
                <div className="container text-center">
                    <div className="blocker">
                        <h1 className="display-6" style={{color: "white", margin: "10px", height: "55px"}}>Yhteistyökumppanit</h1>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Card.Img src={Crestron} alt="Card image" />
                    </div>
                    <div className="col-md-2">
                        <Card.Img src={sony} alt="Card image" />
                    </div>
                    <div className="col-md-2">
                        <Card.Img src={swappie} alt="Card image" />
                    </div>
                    <div className="col-md-2">
                        <Card.Img src={fazer} alt="Card image" />
                    </div>
                    <div className="col-md-2">
                        <Card.Img src={Avita} alt="Card image" />
                    </div>
                    <div className="col-md-2">
                        <Card.Img src={fireframe} alt="Card image" />
                    </div>
                    <div className="col-md-3">
                        <Card.Img src={trail} alt="Card image" />
                    </div>
                    <div className="col-md-3">
                        <Card.Img src={flyar} alt="Card image" />
                    </div>
                    <div className="col-md-3">
                        <Card.Img src={panasonic} alt="Card image" />
                    </div>
                    <div className="col-md-3">
                        <Card.Img src={metropolia} alt="Card image" />
                    </div>
                </div>



            </div>


        </div>


    );
};

export default About;
