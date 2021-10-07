import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Video from "../components/Video/Video";
import WaitingForStream from "../components/WaitingForStream/WaitingForStream";

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
            <h1 className="display-4">{eventResult.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <WaitingForStream
              startDate={eventResult.startDate}
              startTime={eventResult.startTime}
            >
              {(streamHasStarted) => (
                <>
                  {streamHasStarted && (
                    <Video
                      url={eventResult.streamUrl}
                      type={eventResult.streamVideoType}
                    />
                  )}
                  {streamHasStarted && (
                      <h2>Tämä lähetys on jo alkanut joten se on livestream WOW</h2>
                  )}
                  {!streamHasStarted && (
                      <h4>{eventResult.name}</h4>
                  )}
                  {!streamHasStarted && (
                      <p>{eventResult.desc}</p>
                  )}
                  {!streamHasStarted && (
                      <p>Puhe suorana lähetyksenä: {eventResult.startDate}: {eventResult.startTime} - {eventResult.endTime}</p>
                  )}
                  {!streamHasStarted && (
                      <Video
                          url={eventResult.placeholderVid}
                          type={eventResult.placeholderType}
                      />
                  )}
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
