import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductsTable from "../Components/ProductsTable";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {

  const {userAuth,loggedout}=useContext(AuthContext);
  const [data,setData]=useState([]);
  const [loader,setLoader]=useState(true);

  useEffect(()=>{
    fething();
    return setData([]);
  },[])

  const fething=async()=>{
    let a=await fetch(`http://localhost:8080/user`);
    let b=await a.json();
    setData(b.data);
    setLoader(false);
  }


  if(loader)
  return <Loader />

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={loggedout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{userAuth.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
      <ProductsTable data={data} />
        }
      </div>
    </div>
  );
}

export default Dashboard;
