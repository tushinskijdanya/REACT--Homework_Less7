import { useEffect } from "react";

let date = new Date();
let hour, minutes, sec = 0;
let m, h = 0;
getDate(date);

liveTime ();
// setInterval(liveTime, 1000);

function getDate (date) {
    hour = date.getHours() < 9 ? '0' + date.getHours() : date.getHours();
    minutes = date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds();
}

function liveTime () {
    hour = hour - 0;
    minutes = minutes - 0;
    sec++
    if (sec > 59) {
        minutes++;
        sec = 0;
    }
    if (minutes > 59) {
        hour++;
        minutes = 0;
    }
      m = minutes < 10 ? "0" + minutes : minutes;
      h = hour < 10 ? "0" + hour : hour;
}

function Home () {
    useEffect(() => {
        setInterval(liveTime, 1000);
    }, []);

    return (
        <div className="home-page">
            <p className="time-text">There is a time for everything, 
                and a season for every activity under the heavens...
            </p>
            <h2 className="pages-text time">{`${h}:${m}`}</h2>
        </div>
    )
}

export default Home;