import React, {useEffect, useState} from "react";
import '../style/cards.css'

const DaysOfWeek = () => {
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
                console.log(days.current.condition.icon)
            })
            .catch(err => console.error(err));
    },[])
    //testerCall()
    return (
        <>
            <div className='box'>
                <div style={{display: 'flex', flexDirection:'column', justifyContent: 'flex-end', position: 'relative'}}>
                    <label className="text" for='date'>MONDAY</label>
                    <input id='date' type='checkbox'></input>
                </div>

            </div>
        </>
    )
}

export default DaysOfWeek;