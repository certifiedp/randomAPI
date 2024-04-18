import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// export function CarouselDemo() {
//   return (
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
            
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }



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
        <CardTitle className="m-2 p-2">
        Name: {user.results[index].name.first}{" "}
          {user.results[index].name.last}
        </CardTitle>
        <CardDescription className="m-2 p-2">
          Information on some random.
        </CardDescription>
        <CardContent className="m2 p-2">
        <img src={user.results[index].picture.large} alt="user" />
        </CardContent>
        <CardFooter className="m-2 p-2">
          Email: {user.results[index].email}{", "}
          Number: {user.results[index].phone}
        </CardFooter>
      </Card>

    ))}
    </>
  );
}
