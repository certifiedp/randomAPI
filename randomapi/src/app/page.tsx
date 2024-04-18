import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const data = await fetch("https://randomuser.me/api").then((res) =>
    res.json(),
  );
  console.log(data);
  return (
    <>
      <Card>
        <CardTitle className = 'p-2, m-2'>
          Name: {data.results[0].name.first} {data.results[0].name.last}
        </CardTitle>
        <CardDescription>Email: {data.results[0].email}</CardDescription>
        <CardContent className = 'p-2, m-2'>
          <img src={data.results[0].picture.large} alt="user" />
        </CardContent>
        <CardFooter className = 'p-2, m-2'>
          Number: {data.results[0].phone}
        </CardFooter>
      </Card>
    </>
  );
}
