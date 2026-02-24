import React from "react";

function Apirequest() {
    useEffect(()=>{
        const response = await axios.put("https://dummy/json.com/products/add", {
            title:"Post request",
            headers:{
                "Content-Type":"application/json"
            },
            })
            console.log(response)
            
        }
        const postData = async()=>{
            
        }
    },[])
    
    
  return (
    <>
      <h3>Hello api request</h3>
    </>
  );
}
export default Apirequest;
