import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// json format
interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };

  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

export default function Random() {
  const [user, setUser] = useState(null);

  const getRandom = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Error");
    }
    return data.results[0];
  };

  useEffect(() => {
    getRandom()
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Random User</CardTitle>
      </CardHeader>
      <CardDescription>
        <p>Random user</p>
        <Button onClick={() => getRandom().then(data => setUser(data))}>Get Random User</Button>
      </CardDescription>
      {user && (
        <div>
          <img src={(user as User).picture.large} alt="Random User" />
          <p>
            {(user as User).name.first} {(user as User).name.last}
          </p>
          <p>{(user as User).email}</p>
        </div>
      )}
    </Card>
  );
}

export default Random;
