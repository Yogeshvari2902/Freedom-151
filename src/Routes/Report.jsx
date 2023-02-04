import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../Components/Loader';
import Navbar from './Navbar';

function Report() {
    const[data,setData]=useState([]);
    const [mAge,setMAge]=useState();
    const [lAge,setLAge]=useState();
    const [uAge,setUAge]=useState();
    useEffect(()=>{
        getData(`http://localhost:8080/user`);
    },[])

    async function getData(url){
        let req=await fetch(``);
        let res=await req.json();
        setData(res);
    }
    if(data.length)
    <Loader />
    if(data.length>0){
        let k,m,l
        data.map((el,i)=>{
            if(+el.age>=13&&+el.age<=18)
            k++;
            else if(+el.age>18&&+el.age<=25)
            m++;
            else
            l++
        })
    }
    if(!(lAge&uAge&mAge))
    <Loader />

    return (
        <div>
                <Navbar />
            <h4>Number of People age between 13-18 are:{lAge}</h4>
            <h4>Number of People age between 18-25 are:{mAge}</h4>
            <h4>Number of People age above 25 are:{uAge}</h4>
        </div>
    );
}

export default Report;