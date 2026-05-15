"use client"
import { Button } from "@/components/ui/button";


export default function Home() {

  function clickBtn() {
    window.alert("Hellow form nextjs")
  }

  return (
    <div>
      <Button onClick={()=> clickBtn()}>Click</Button>
    </div>
  );
}
