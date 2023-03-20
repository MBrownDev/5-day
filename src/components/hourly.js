import React, {useState, useEffect} from "react";
import '../style/cards.css';

const Hourly = ({hours, index}) => {

    const [hour, getHour] = useState(hours.forecast.forecastday[index])
    const time = [hour.hour[9], hour.hour[12], hour.hour[15], hour.hour[18],hour.hour[21]]
    
    useEffect(() => {
        getHour(hours.forecast.forecastday[index])
    },[hours, index])
    console.log(hour, 'time', index)
    return(
        <div className="condition-card">
            {time.map((e,index) => 
            <div key={index} style={{width: '20vw'}}>
                <h2>{Math.ceil(e.temp_f)}</h2>
                <img src={e.condition.icon} alt='' />
                <p style={{margin: 0}}>Feels Like</p>
                <h3>{Math.ceil(e.feelslike_f)}</h3>
            </div>
            )}
        </div>
    )
}

export default Hourly;