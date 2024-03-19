import axios from "axios";
import { useEffect, useState } from "react";


const Product = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const data = await axios.get("https://raw.githubusercontent.com/ProgrammingHero1/my-phone-server/main/phones.json")
            setProduct(data.data);

        }
        loadData()
    }, [])
    return (
        <div className="px-3 grid lg:grid-cols-3 container mx-auto gap-20 mt-[100px]">
            {
                products.map((pd, idx) => {
                    return (
                        <div key={idx} className="flex flex-col justify-self-center items-center gap-5 border-2 p-8 rounded-lg bg-blue-100">
                            <div><img src={pd.image} alt="" /></div>
                            <div className="space-y-3">
                                <h1 className="text-3xl font-semibold">{pd.name}</h1>
                                <p>{pd.description}</p>
                                <h3 className="text-4xl text-blue-600 font-bold">{pd.price} $</h3>
                                <div className="flex justify-end">
                                    <button className="btn bg-green-600 text-white font-semibold">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Product;