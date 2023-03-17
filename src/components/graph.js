import React, {useEffect, useState} from "react";
import Chart from '../components/weatherChart';
import Hourly from '../components/hourly';
import '../style/graph.css';

const Graph = ({weather, index}) => {

    console.log(weather, '2')

    const [days, getDays] = useState([])
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4c7a064da4msh5ccd0e67f7ea2a3p1b9bb8jsnb338e5384ed9',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=chicago&days=3', options)
            .then(response => response.json())
            .then(response => {
                getDays(response)
                console.log(response)
                //console.log(weather.current.temp_f, 'temp')
                //console.log(days.current.condition.icon)
            })
            .then(response => {
                if(!response){
                    console.log(response)
                    throw new Error("Loading...")
                }
            })
            .catch(err => console.error(err));
    },[])

    if(weather === undefined || days.current === undefined){
        return(
            <div>
                Loading...
            </div>
        );
    }

    if(index === 0){
        return(
            <div className="graph-container">
                {console.log(index)}
                <div className="card">
                    <div className="weather">
                        <img width='130' src={days.current.condition.icon} alt=''/>
                        <h1 id="weather-text">{Math.ceil(days.current.temp_f)}</h1>
                    </div>
                    <div className="curr-conditions">
                        <h2 id="weather-text">{days.current.condition.text}</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>
                    <div className="conditions">
                        <p>Feel Like</p>
                        <h3>{Math.ceil(days.current.feelslike_f)}</h3>  
                    </div>
                    <div className="conditions">
                        <p>Wind Speed</p>
                        <h3>{days.current.wind_mph} mph</h3>
                    </div>
                    </div>
                </div>

                <div className="graph">
                    <Chart data={days} index={index} />
                    <Hourly hours={days}/>
                </div>
            </div>
        )
    }else{
        return(
            <div className="graph-container">
                {console.log(index)}
                <div key={index} className="card">
                    <div className="weather">
                        <img width='130' src={weather.day.condition.icon} alt=''/>
                        <h1 id="weather-text">{Math.ceil(weather.day.avgtemp_f)}</h1>
                    </div>
                    <div className="curr-conditions">
                        <h2 id="weather-text">{weather.day.condition.text}</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>
                    <div className="conditions">
                        <p>Max Temp</p>
                        <h3>{Math.ceil(weather.day.maxtemp_f)}</h3>  
                    </div>
                    <div className="conditions">
                        <p>Wind Speed</p>
                        <h3>{weather.day.maxwind_mph} mph</h3>
                    </div>
                    </div>
                </div>

                <div className="graph">
                    <Chart data={weather} index={index} />
                    <Hourly hours={days}/>
                </div>
            </div>
        )
    }
}

export default Graph;