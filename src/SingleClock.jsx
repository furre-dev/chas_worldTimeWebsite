import { useParams } from "react-router-dom"
import { timeZones } from "./timeZones"
import { useState, useEffect } from "react";


export default function SingleClock() {
    const [time, setTime] = useState();
    const { cityKey } = useParams();
    const { city, timeZone, country } = timeZones[cityKey];

    function timeInterval() {
        const date = new Date();
        setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }

    useEffect(() => {
        timeInterval();
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
        }, 1000);
    }, []);

    return (
        <main className="flex items-center justify-center h-screen">
            <div className="flex flex-col justify-center items-center bg-blue-800 p-10 max-w-full rounded-2xl space-y-5">
                <div className="text-3xl text-white">{country}</div>
                <div className="text-9xl text-white">{city}</div>
                <div className="text-7xl text-white font-semibold font-mono">
                    {time}
                </div>
            </div>
        </main>
    )
}