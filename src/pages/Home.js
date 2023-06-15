import { useEffect, useState } from "react";

function Home () {
    const date = new Date();
    const [time, setTime] = useState ({
        hour: date.getHours(),
        minutes: date.getMinutes(),
        sec: date.getSeconds()
    })

    const timer = () => {
        setTime((prev) => {
            let temp = {...prev};
            const tempDate = new Date();
            temp.hour = tempDate.getHours();
            temp.minutes = tempDate.getMinutes();
            temp.sec = tempDate.getSeconds();
            return temp;
        })
    }

    useEffect(() => {
        const timeNow = setInterval(timer, 1000);
        return () => {
            clearInterval(timeNow);
        }
    }, []);

    return (
        <div className="home-page">
            <p className="time-text">There is a time for everything, 
                and a season for every activity under the heavens...
            </p>
            <h2 className="pages-text time">{time.hour < 10 ? `0${time.hour}` : time.hour} : {time.minutes < 10 ? `0${time.minutes}` : time.minutes} : {time.sec < 10 ? `0${time.sec}` : time.sec}</h2>
        </div>
    )
}

export default Home;