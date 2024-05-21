import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {useEffect, useState} from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Ahr999Chart() {

    const [ahrFeed, setFeed] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/ahr999.json');
            const data = await response.json();
            setFeed(data);
        }
        fetchData();
    }, []);

    let timestampList: any = [];
    let ahr999IndexList: any = [];
    let btcPriceList: any = [];
    let daysCostList: any = [];
    let fixedInvestmentList: any = [];
    let buyAtTheBottomList: any = [];

    ahrFeed.forEach((ahr: any) => {
        timestampList.push(ahr.timestamp);
        ahr999IndexList.push(ahr.ahr999);
        btcPriceList.push(ahr.low);
        daysCostList.push(ahr.geomean);
        fixedInvestmentList.push(1.2);
        buyAtTheBottomList.push(0.45);
    });

    const data = {
        labels: timestampList,
        datasets: [
            {
                label: 'Ahr999 Index',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
                data: ahr999IndexList,
            },
            {
                label: 'BTC Price',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: btcPriceList,
            },
            {
                label: '200 Day Cost',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
                hoverBorderColor: 'rgba(54, 162, 235, 1)',
                data: daysCostList,
            },
            {
                label: 'Fixed Investment',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 206, 86, 0.4)',
                hoverBorderColor: 'rgba(255, 206, 86, 1)',
                data: fixedInvestmentList,
            },
            {
                label: 'Buy at the bottom',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(153, 102, 255, 0.4)',
                hoverBorderColor: 'rgba(153, 102, 255, 1)',
                data: buyAtTheBottomList,
            },
        ],
    };

    const options = {
        // maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options}/>;
}
