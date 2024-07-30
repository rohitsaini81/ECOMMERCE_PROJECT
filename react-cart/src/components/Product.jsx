import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_address } from "../App";
import Loader from "./Loader";
import axios from "axios";


const Product = () => {
    const param = useParams();
    console.log(param.id)
    const [i, setI] = useState(0)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get(api_address + "item/" + param.id).then(O => O.data)
                console.log(data)
                setData(data);
                setLoading(false)
                setI(1);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [param.id]);

    if (loading) {
        <Loader />
    }
    else {
        return (
            <>
                <div className="container flex-center">
                    <div className="container flex-2">
                        <ul>
                            <li style={{ height: "80px", width: "80px" }}><img src={data.images[0]} className="img" alt="photoi" /></li>
                            <li style={{ height: "80px", width: "80px" }}><img src={data.images[1]} className="img" alt="photoi" /></li>
                            <li style={{ height: "80px", width: "80px" }}><img src={data.images[0]} className="img" alt="photoi" /></li>
                        </ul>
                    </div>
                    <div className="container flex-2" style={{width: "29rem"}}>
                        <img src={data.images[i]} alt="mainImage" />
                    </div>
                    <div className="container flex-2" style={{width: "34rem",border:"2px solid black"}}>
                    <p>{data.title}</p>
                    <p>{data.price} Rupees</p>
                    <p>{data.description}</p>
                    <p>{data.title}</p>

                    </div>
                </div>
            </>
        )
    }
}
export default Product;