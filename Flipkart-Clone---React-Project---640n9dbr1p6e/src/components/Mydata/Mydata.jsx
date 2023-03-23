import React, { useEffect, useState } from "react";
import ImageList from "../ImageList/ImageList";
import "./mydata.css"
import Offerdata from "../ImageList/Offerdata";



const url = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"

const Mydata = () => {
    const [data, setData] = useState([]);
    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);

        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchUsers(url);
    }, [])

    let menData = data.filter((deta) => deta.category === "men's clothing")
    let jeweleryData = data.filter((deta) => deta.category === "jewelery")
    let electronicsData = data.filter((deta) => (deta.category === "electronics" && deta.price!== 109))
    let womenData = data.filter((deta) => deta.category === "women's clothing" && deta.price > 10)
console.log(womenData);
    return (
        <>



            <Offerdata />
            <div className="imageContainer menImage">
                <div className="rightimage">
                    <div className="name">
                        <h2>Men's<br /> Clothing</h2>
                        <a href="">VIEW All</a>
                    </div>
                </div>

                <div className="imagedata">
                    {menData.map((data) => <ImageList id={data.id} category={data.title} price={data.price} photo={data.image} />)}
                </div>

            </div>
            <div className="imageContainer jeweleryImage " >
                <div className="rightimage">
                    <div className="name">
                        <h2>Jewelery</h2>
                        <a href="">VIEW All</a>
                    </div>
                </div>
                <div className="imagedata">
                    {jeweleryData.map((data) => <ImageList id={data.id} category={data.title} price={data.price} photo={data.image} />)}
                </div>
            </div>
            <div className="imageContainer ElectronicsImage ">
                <div className="rightimage">
                    <div className="name">
                        <h2>Electronics</h2>
                        <a href="">VIEW All</a>
                    </div>
                </div>
                <div className="imagedata ">
                    {electronicsData.map((data) => <ImageList id={data.id} category={data.title} price={data.price} photo={data.image} />)}
                </div>
            </div>
            <div className="imageContainer womenImage">
                <div className="rightimage">
                    <div className="name">
                        <h2>Women's Clothing</h2>
                        <a href="">VIEW All</a>
                    </div>
                </div>
                <div className="imagedata">
                    {womenData.map((data) => <ImageList id={data.id} category={data.title} price={data.price} photo={data.image} />)}
                </div>
            </div>



        </>
    )
}

export default Mydata