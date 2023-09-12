import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiCall() {
  let [initialData, setData] = useState<any>(null);
  useEffect(() => {
   reqData()
  }, []);
  
  let reqData = async()=>{
    let data = await axios.get("https://randomuser.me/api");
    setData(data["data"]["results"]);
  }
  if(!initialData){
    return <p>loading</p>
  }
  let showData = initialData.map((obj:any,idx:number) => {
      return <div key={'cc'+idx}>
        <h3>{obj.gender}</h3>
        <h3>{obj.email}</h3>
      </div>
  });
  return <div>
    {showData && showData.length > 0 ? showData : 'loading'}
  </div>;
}

export default ApiCall;
