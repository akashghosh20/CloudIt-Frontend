import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { "day": 1, "views": 100 },
    { "day": 2, "views": 110 },
    { "day": 3, "views": 105 },
    { "day": 4, "views": 120 },
    { "day": 5, "views": 125 },
    { "day": 6, "views": 150 },
    { "day": 7, "views": 130 },
    { "day": 8, "views": 140 },
    { "day": 9, "views": 145 },
    { "day": 10, "views": 150 },
    { "day": 11, "views": 155 },
    { "day": 12, "views": 160 },
    { "day": 13, "views": 160 },
    { "day": 14, "views": 170 },
    { "day": 15, "views": 175 },
    { "day": 16, "views": 180 },
    { "day": 17, "views": 185 },
    { "day": 18, "views": 190 },
    { "day": 19, "views": 195 },
    { "day": 20, "views": 200 },
    { "day": 21, "views": 205 },
    { "day": 22, "views": 210 },
    { "day": 23, "views": 215 },
    { "day": 24, "views": 220 },
    { "day": 25, "views": 225 },
    { "day": 26, "views": 230 },
    { "day": 27, "views": 235 },
    { "day": 28, "views": 200 },
    { "day": 29, "views": 245 },
    { "day": 30, "views": 250 },
    { "day": 31, "views": 250 }
];


const chart = { x: 'day', y: 'views' };

const HomeChart = () => {
    return (
        <>
            <ResponsiveContainer width={1000} height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={chart.x} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={chart.y} fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default HomeChart;
