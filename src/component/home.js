import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div class="center">
        <h1> <Link to="/page"><button className='buttonHome'>GO TO PAGE</button></Link></h1>
      </div>
    </>
  );
}
