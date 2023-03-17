import React, {useEffect, useState} from "react";
import '../style/cardtest.css'

const Test = () => {
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
                <div>
                    <h3 className="text">MONDAY</h3>
                </div>
                <div>
                    <img src={days.current.condition.icon} alt='' width='100' height='100'/>
                </div>
            </div>
        </>
    )
}

export default Test;