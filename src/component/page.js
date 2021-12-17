import React from "react";
import { Link } from "react-router-dom";
export default function Page() {
  return (
    <>
      <div class="center">
        <Link to="/">
          <button className="buttonHome">COME BACK HOME</button>
        </Link>
      </div>
    </>
  );
}
