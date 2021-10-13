import React, { useEffect, useState } from 'react';

const StreamHasEnded = ({startDate, endTime, children}) => {
    const [streamHasEnded, setStreamHasEnded] = useState(false);

    const [day, month, year] = startDate.split(".").map(Number);
    const [hour, minute] = endTime.split(":").map(Number);

    const eventDateObject = new Date(year, month - 1, day, hour, minute);

    const setStreamValue = () => {
        setStreamHasEnded(eventDateObject <= new Date());
    }

    useEffect(() => {
        setStreamValue();
        const interval = setInterval(setStreamValue, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return children(streamHasEnded);
}

export default StreamHasEnded;