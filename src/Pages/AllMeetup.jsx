import React, { useEffect, useState } from "react";
import ListMeetup from "../Component/listMeetup";
import AddMeetup from "./AddMeetup";
// const alertList = [
//   {
//     id: 1,
//     title: "Expiration",
//     description: "Apples are about to expire in 4 days!",
//     image:
//       "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
//     address: "No where,India",
//   },
//   {
//     id: 2,
//     title: "Receipt",
//     description: "(Custom receipt name) is added orage!",
//     image:
//       "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
//     address: "No where,India",
//   },
//   {
//     id: 3,
//     title: "Low Count",
//     description: "Onion is running low! plaese add more",
//     image:
//       "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
//     address: "No where,India",
//   },
// ];

function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMeetups,setLoadingMeetups]=useState([])

  useEffect(()=>{
    setIsLoading(true)
     fetch("https://meets-2cea8-default-rtdb.firebaseio.com/Meets.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meets=[]
      for(const key in data){
        const meet={
          id:key,...data[key]
      }
      meets.push(meet)
      }
      setIsLoading(false);
      setLoadingMeetups(meets)
    });
  },[])
  if (isLoading) {
    return <p>Loading...</p>;
  } 
    return (
      <>
        <div className="container">
          {loadingMeetups.map((val) => (
            <ListMeetup key={val.id} list={val} />
          ))}
        </div>
      </>
    )
}

export default AllMeetup;
