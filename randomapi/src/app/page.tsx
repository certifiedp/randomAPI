import * as React from "react";

export default async function Home() {
  const data = await fetch("https://randomuser.me/api").then((res) => res.json());
  console.log(data);
  return (
    <><div>
      <h1>{data.results[0].name.first} {data.results[0].name.last}</h1>
      <p>{data.results[0].email} </p>
      <img src={data.results[0].picture.large} alt="user" />
    </div><div>
        <h1>{data.results[0].name.first} {data.results[0].name.last}</h1>
        <p>{data.results[0].email} </p>
        <img src={data.results[0].picture.large} alt="user" />
      </div></>
  );
}