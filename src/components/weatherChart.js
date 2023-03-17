import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

import '../style/graph.css';

const WeatherChart = ({data, index}) => {

    console.log(data, 'index', index)
    

    const [temp, getTemp] = useState([])

    function changeGraph(){
        if(index === 0){
            const standard = [Math.ceil(data.forecast.forecastday[0].hour[9].temp_f),
    Math.ceil(data.forecast.forecastday[0].hour[12].temp_f),
    Math.ceil(data.forecast.forecastday[0].hour[15].temp_f),
    Math.ceil(data.forecast.forecastday[0].hour[18].temp_f),
    Math.ceil(data.forecast.forecastday[0].hour[21].temp_f)]
            getTemp(standard)
            console.log(temp, 'index 00')
        }else{
            const temps = [Math.ceil(data.hour[9].temp_f),
                            Math.ceil(data.hour[12].temp_f),
                            Math.ceil(data.hour[15].temp_f),
                            Math.ceil(data.hour[18].temp_f),
                            Math.ceil(data.hour[21].temp_f)]
            getTemp(temps)
            console.log(temp, 'index #')
        }
    }

    useEffect(() => {
        changeGraph();
    },[data])


    if(data === undefined){
        return(
            <div>
                Loading...
            </div>
        )
    }else{
        console.log(temp,'first')
        //getTemp(temps)
        //console.log(temp,'last')
    }

    const chartData = {
        labels: ['9 A.M.', '12 P.M.', '3 P.M.', '6 P.M.', '9 P.M.'],
        datasets: [
            {
                label: '',
                backgroundColor: "rgb(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132, 1)",
                borderWidth: 1,
                fill: true,
                data: temp
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        tension: 0.4
    }
    return (
        <div className="chart">
            <Line data = {chartData} options = {options}/>
        </div>
    )
}

export default WeatherChart;