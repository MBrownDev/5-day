import React, { useState } from "react";
import '../style/cards.css'
import Graph from '../components/graph'
import Days from '../components/tester'

const Main = () => {
    const [weather, getWeather] = useState([])
    const [index, getIndex] = useState(0)
    
    const data_pull = (data, num) => {
        console.log(data, num, 'main')
        getWeather(data);
        getIndex(num)
    }
    
    return (
        <div className="holder">
            <Days func={data_pull}/>
            <Graph weather={weather} index={index}/>
        </div>
    )
    
}

export default Main;