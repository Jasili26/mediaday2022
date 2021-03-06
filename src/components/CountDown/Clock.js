import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (

        <Fragment>
            <section className="timer-container" id="moimoi">
                <section className="timer">
                    <div className="clock">
                        <section>
                            <p>{timerDays}</p>
                            <small>vrk</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <small>t</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <small>min</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                            <small>sek</small>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>

    );
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Clock;
