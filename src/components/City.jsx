import { useState, useEffect } from "react"
import BackButton from "./BackButton"

const CityDetails = ({ name, main, sys, weather }) => {
    const sunset = new Date(sys?.sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' })
    const sunrise = new Date(sys?.sunrise * 1000).toLocaleTimeString([], { timeStyle: 'short' })
    //[], {hour: '2-digit', minute:'2-digit'}
    //const time = new Date().toLocaleTimeString([], { timeStyle: 'short' })
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <BackButton />
            <div className="list">
                <div className="list-items inline-block mx-auto w-[40px] break-words list-items__time text-3xl text-blue-100">
                    {time.toLocaleTimeString([], { timeStyle: 'short' })}
                </div>
                <div className="list-items list-item__city text-blue-900 text-2xl">
                    <b>{name}</b>
                </div>
                <div className="list-items flex flex-col flex-wrap">
                    {weather?.map((w, i) => {
                        return (
                            <div key={i}>
                                <img src={`http://openweathermap.org/img/w/${w.icon}.png`}
                                    alt="wthr img" />
                                <small className="text-xs text-blue-900">{w.description}</small>
                            </div>
                        )
                    })}
                </div>
                <div className="list-items">
                    <span className="icon icon-thermometer" /><span>{parseInt(main?.temp)} &#8451;</span>
                </div>
                <div className="list-items">
                    <span className="icon icon-sunrise" />
                    <span>{sunrise}</span>
                </div>
                <div className="list-items">
                    <span className="icon icon-sunset" />{sunset}
                </div>

            </div>
        </>
    )
}

export default CityDetails