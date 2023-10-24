import React, { useEffect, useState } from "react";
import ListMeetup from "../Component/listMeetup";

function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMeetups, setLoadingMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://meets-2cea8-default-rtdb.firebaseio.com/Meets.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meets = [];
        for (const key in data) {
          const meet = {
            id: key,
            ...data[key],
          };
          meets.push(meet);
        }
        setIsLoading(false);
        setLoadingMeetups(meets);
      });
  }, []);
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
  );
}

export default AllMeetup;
