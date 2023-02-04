import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader";

function SingleProductPage(){
    const {id}=useParams();
    const [data,setData]=useState({});
    const [loader,setLoader]=useState(true);

    useEffect(()=>{
        fething();
    },[id])

    const fething=async()=>{
        let a=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
        let b=await a.json();
        console.log(b.data);
        setData(b.data);
        setLoader(false);
    }

    if(loader)
    return <Loader />
    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">
                    {data.brand}
                </h3>
            </div>
            <div >
            <img data-testid="product-image" src={data.img} alt={data.brand} />
            </div>
            <div data-testid="product-category">
                {data.category}
            </div>
           
            <div data-testid="product-details">
                {data.details}
            </div>
            <div data-testid="product-price">
                {data.price}
            </div>

            </div>
    )
}
export default SingleProductPage