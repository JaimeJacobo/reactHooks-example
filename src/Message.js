import { useEffect, useState } from "react";

export default function Message() {
  useEffect(()=>{
    return ()=>console.log('Message unmounted')
  }, [])
  return <h1>User is logged in</h1>;
}
