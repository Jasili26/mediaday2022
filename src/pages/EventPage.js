import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useParams } from "react-router";
import Video from "../components/Video/Video";
import WaitingForStream from "../components/WaitingForStream/WaitingForStream";
import StreamHasEnded from "../components/StreamHasEnded/StreamHasEnded";
import CountDown from "../components/CountDown/CountDown";
import eventData from "../data/events.json";

const EventPage = () => {
  document.title = "Tapahtuma"
  const { id } = useParams();

  const eventResult = eventData.events.find(({ videoUrl }) => videoUrl === id);

  if (!eventResult) {
    return <div>Event {id} was not found :(</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>

          </Col>
        </Row>
        <Row style={{backgroundColor: "#871e1e", margin: "2px"}}>
          <Col md={12}>
            <WaitingForStream
              startDate={eventResult.startDate}
              startTime={eventResult.startTime}
            >
              {(streamHasStarted) => (
                <>

                  <Row>
                    <Col md={3} style={{margin: "15px"}}>
                      {streamHasStarted && (
                          <img style={{margin: "15px"}} width="140px" height="140px" src={eventResult.pic}/>
                      )}
                      {streamHasStarted && (
                          <h3 style={{color: "white"}}>{eventResult.name}</h3>
                      )}
                    </Col>
                    <Col md={8}>
                      {streamHasStarted && (
                          <h2 className="display-6" style={{color: "white", backgroundColor: "rgb(0, 0, 0, 0.1)"}}>{eventResult.title}</h2>
                      )}

                      {streamHasStarted && (
                          <p style={{color: "white"}}>{eventResult.desc}</p>
                      )}
                    </Col>

                  </Row>


                  <Row>
                    <Col md={3} style={{margin: "15px"}}>
                  {!streamHasStarted && (
                      <img style={{margin: "15px"}} width="140px" height="140px" src={eventResult.pic}/>
                  )}
                      {!streamHasStarted && (
                          <h3 style={{color: "white"}}>{eventResult.name}</h3>
                      )}
                    </Col>
                    <Col md={8}>
                      {!streamHasStarted && (
                          <h2 className="display-6" style={{color: "white", backgroundColor: "rgb(0, 0, 0, 0.1)"}}>{eventResult.title}</h2>
                      )}

                  {!streamHasStarted && (
                      <p style={{color: "white"}}>{eventResult.desc}</p>
                  )}
                  {!streamHasStarted && (
                      <p style={{color: "white"}}>Suora lähetys tulossa: {eventResult.startDate}: {eventResult.startTime} - {eventResult.endTime}</p>
                  )}

                    </Col>

                  </Row>
                  <StreamHasEnded
                      startDate={eventResult.startDate}
                      endTime={eventResult.endTime}
                  >
                    {(streamHasEnded) => (
                        <>
                  {!streamHasStarted && (
                      <Video
                          url={eventResult.placeholderVid}
                          type={eventResult.placeholderType}
                      />
                  )}
                  {streamHasStarted && !streamHasEnded &&(
                      <Video
                          url={eventResult.streamUrl}
                          type={eventResult.streamVideoType}
                      />
                  )}
                  {streamHasStarted && !streamHasEnded &&(
                      <h2 style={{color: "black"}}>LIVE</h2>
                  )}
                  {streamHasStarted && streamHasEnded &&(
                      <Video
                          url={eventResult.EndedVid}
                          type={eventResult.EndedType}
                      />
                  )}
                          {streamHasStarted && streamHasEnded &&(
                              <h2 style={{color: "black"}}>Kooste</h2>
                          )}
                  {!streamHasStarted && (
                      <p style={{color: "black"}}>Mediaday 2022</p>
                  )}
                        </>
                    )}
                  </StreamHasEnded>
                </>

              )}
            </WaitingForStream>
          </Col>
        </Row>


          <Col>
            {eventResult.Title}
            <br />


          </Col>
      </Container>
      <br />
      {/*  */}
    </div>
  );
};

export default EventPage;
