import React from 'react';
import { Bar } from 'react-chartjs-2';
import {ChartOptions} from "chart.js";
import { CategoryScale, Chart } from "chart.js";

Chart.register(CategoryScale);

type RatingsChartProps = {
    ratings: number[];
};

const RatingsChart: React.FC<RatingsChartProps> = ({ ratings }) => {
    const data = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
                label: 'Ratings',
                data: ratings,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions = {
        indexAxis: 'y',
        scales: {
            x: {
                type: 'category',
                beginAtZero: true,
            },
            y: {
                type: 'linear',
            },
        },
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default RatingsChart;
