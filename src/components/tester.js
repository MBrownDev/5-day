import React, {useEffect, useState} from "react";
import '../style/cards.css'

const Tester = (props) => {
    const [days, getDays] = useState([])
    const [forecast, getForcast] = useState([])
    const daysOfWeek = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
    
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
                console.log(response, 'stop 1')
                getDays(response)
                console.log(days, 'stop 2')
            })
            .catch(err => console.error(err));
            changeForecast();
    },[props])

    function changeForecast(){
        console.log(days, 'stop 3')
        if(days === undefined){
            throw new Error('Loading...')
        }else{
            getForcast(days.forecast.forecastday)
            //console.log(date.getDay('2023-03-06'))
            //console.log(response)
            //console.log(forecast)
        }
    }

    const passData = (data) => {
        console.log(data, 'test')
        if(data === 0){
            props.func(days.current, data)
        }else{
            props.func(days.forecast.forecastday[data], data)
        }
    }
    //testerCall()
    try {
        if(days.forecast === undefined){
            return(
                <div>
                    Loading...
                </div>
            );
        }
    } catch (error) {
        console.error(error)
    }
    
    return (
        <div className="top-container">
            {forecast.map((e, index) => {
                const date = new Date(e.date+', 0:00:00');
                return(
                <div key={index} className='box' onClick={() => passData(index)}>
                    <div>
                        {console.log(daysOfWeek[date.getDay()], 'look')}
                        <h1 className="text">{daysOfWeek[date.getDay()]}</h1>
                    </div>
                    <div className="weather">
                        <img src={days.current.condition.icon} alt='' width='100' height='100'/>
                        <h2>{Math.ceil(e.day.avgtemp_f)}</h2>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Tester;