import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Post } from '../Interface';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
type Props = {
    data: Post,
    faktors: string[]
}
const BarChart = ({ data, faktors }: Props) => {
    const [chartData, setChartData] = useState<any>({
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
    const riskCollor = (el: any) => {
        if (Number(el) <= 0.39) {
            return "rgb(79, 163, 93)";
        }
        if (Number(el) >= 0.4 && Number(el) <= 0.49) {
            return "rgb(107, 211, 80)";
        }
        if (Number(el) >= 0.5 && Number(el) <= 0.59) {
            return "rgb(149, 236, 131)";
        }
        if (Number(el) >= 0.6 && Number(el) <= 0.69) {
            return "rgb(240, 179, 84)";
        }
        if (Number(el) >= 0.7 && Number(el) <= 0.79) {
            return "rgb(226, 89, 45)";
        }
        if (Number(el) > 0.8) {
            return "rgb(173, 65, 50)";
        }
    };
    useEffect(() => {
        if (data) {
            const getValues = faktors.map((f: any) => {
                if (data.risk_factors[f]) {
                    return data.risk_factors[f]
                }
                else {
                    return 0
                }

            })
            const labels = data.risk_factors ? [...faktors, "Risk Rating"] : [];
            const values = data.risk_factors ? [...getValues, data.risk_rating] : [];
            const backgroundColors = values.map((val, index) => {
                return riskCollor(val)
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
        }
    }, [data]);

    return (
        <div className='content' >
            <Bar data={chartData} options={chartOptions} />
        </div>

    );
};

export default BarChart;