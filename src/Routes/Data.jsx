
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Components/Loader';
import Navbar from './Navbar';

function Data(props) {
const [data,setData]=useState([]);
const [country,setCountry]=useState("");
const [gender,setGender]=useState("");
const [name,setName]=useState("");
const [search,setSearch]=useState("");
const [loading,setLoading]=useState(true);

useEffect(()=>{
    setLoading(true)
setData([]);
let url
if(gender&&country&&name)
url=`http://localhost:8080/user?gender=${gender}&country=${country}&name=${name}`
else if(gender&&country)
url=`http://localhost:8080/user?gender=${gender}&country=${country}`
else if(gender&&name)
url=`http://localhost:8080/user?gender=${gender}&name=${name}`
else if(country&&name)
url=`http://localhost:8080/user?country=${country}&name=${name}`
else if(gender)
url=`http://localhost:8080/user?gender=${gender}`
else if(country)
url=`http://localhost:8080/user?country=${country}`
else if(name)
url=`http://localhost:8080/user?name=${name}`
else
url=`http://localhost:8080/user`;

getData(url)

}
,[country,gender,name])

async function getData(url){
    let a=await fetch(url);
    let b=await a.json();
    setData(b);
    setLoading(false);
}

function Changecountry(e){
    setCountry(e.target.value);
}

function Changegender(e){
    setGender(e.target.value);
}


    return (
        <div>
            <Navbar />
            <h1>User Data</h1>
            <select onChange={Changecountry}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Usa">Usa</option>
                <option value="China">China</option>
                <option value="Nepal">Nepal</option>
            </select>

            <select onChange={Changegender}>
            <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
            </select>
        <input placeholder='Search by name' name="name" onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>setName(search)}>Search</button>

            <div style={{display:"grid"}}>

            {
                data.length?
                data.map((el,i)=>{
                    return <div key={el.id}>
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' />
                   <h1>Name:{el.name}</h1>
                   <h3>Age:{el.age}</h3>
                   <h3>Country:{el.country}</h3>
                   <h3>Gender:{el.gender}</h3>
                   <h3>Profession:{el.profession}</h3>
                   
                    </div>
                })
                 
                :<>{loading?<Loader />:<h1>No Such Data Available</h1>}</>
            }
            </div>
        </div>
    );
}
export default Data;