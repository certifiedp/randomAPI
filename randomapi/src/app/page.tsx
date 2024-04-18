import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import type { Config } from "tailwindcss";


export default async function Home() {
  let promiseArray = [];
  for (let i = 0; i < 20; i++) {
    const data = fetch('https://randomuser.me/api/?results=30').then((res) =>
      res.json(),
    );
    promiseArray.push(data);
  }

  const resultArr = await Promise.all(promiseArray);
  return (
    <>
    {resultArr.map((user, index) => (
      <Card key = {index}>
        <CardTitle className="p-2, m-2">
        Name: {user.results[index].name.first}{" "}
          {user.results[index].name.last}
        </CardTitle>
        <CardDescription className="p-2, m-2">
          Information on some random.
        </CardDescription>
        <CardContent className="p-2, m-2">
        <img src={user.results[index].picture.large} alt="user" />
        </CardContent>
        <CardFooter className="p-2, m-2">
          Email: {user.results[index].email}{", "}
          Number: {user.results[index].phone}
        </CardFooter>
      </Card>

    ))}
    </>
  );
}
