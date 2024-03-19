import { data } from 'autoprefixer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const LineGraph = () => {
    const [phoneData, setPhoneData] = useState([]);
    useEffect(() => {
        const loadPhons = async () => {
            const response = await axios.get('https://raw.githubusercontent.com/ProgrammingHero1/my-phone-server/main/phones.json')


            setPhoneData(response.data);
            console.log(response.data)
        }
        loadPhons()
    }, [])
    return (
        <div className='container mx-auto flex flex-col justify-center items-center mt-[100px]'>
            <h1 className='text-3xl font-semibold text-center mb-10 border-b-2 py-3'>Pricing Chart</h1>
            <LineChart className='hidden lg:block' width={1000} height={400} data={phoneData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>


            {/* -------For pie Chart------ */}
            <div className='size-[320px] lg:hidden'>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="price" data={phoneData} fill="#8884d8" label>

                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineGraph;



// // <ResponsiveContainer>
// <PieChart>
// <Pie dataKey="value" data={data} fill="#8884d8" label />
// </PieChart>
// </ResponsiveContainer>