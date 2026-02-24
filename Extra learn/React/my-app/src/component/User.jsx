import React, { useEffect, useState } from "react";

function User() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // console.log("useeffect called");  //it will call automaticly
  //   const fetchData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);
  // console.log(data);

  const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });
  console.log(data);

  console.log(isLoading);
  console.log(isError);

  return (
    <>
      <h1>Hello {}</h1>
      {/* {data.map((item) => (
        <ul>
          <li>{item.name}</li>
          <li>{item.email}</li>
        </ul>
      ))} */}
    </>
  );
}
export default User;
