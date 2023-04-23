import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => { // передаем пропсы в качестве аргумента
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                backgroundColor: [],
            },
        ],
    });
    const [chartOptions, setChartOptions] = useState({});
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    useEffect(() => {
        if (data) {
            const labels = data.risk_factors ? Object.keys(data.risk_factors) : [];
            const values = data.risk_factors ? Object.values(data.risk_factors) : [];
            const backgroundColors = labels.map((_, index) => {
                return getRandomColor()
            });

            setChartData({
                labels,
                datasets: [
                    {
                        label: '',
                        data: values,
                        backgroundColor: backgroundColors,
                    },
                ],
            });
            console.log(data)
        }
    }, [data]);

    return (
        <div className='content'>
            <Pie data={chartData} options={chartOptions} />
        </div>
    );
};

export default PieChart;
