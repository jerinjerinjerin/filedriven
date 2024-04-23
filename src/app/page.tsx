"use client";

import { Button } from "@/components/ui/button";
import { SignedOut} from "@clerk/clerk-react";
import { SignInButton, 
         SignOutButton,
         SignedIn} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";




export default function Home() {

  const createFile = useMutation(api.files.createFile);
  const getFile = useQuery(api.files.getfile);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton >
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
     
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      {
         getFile?.map((data) =>{ 
          return(
            <div key={data._id}>
              <h1>{data.name}</h1>
            </div>
          )
})
      }
    <Button onClick={() => createFile({
      name:"hellow  world",
    })}>click</Button>
    <h1>jerin</h1>
    </main>
  );
}
