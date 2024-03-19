import Link from "next/link";
import React from "react";

const Another = () => {
  return (
    <div>
      <h1>Subpage</h1>
      <Link href="/users">Back</Link>
    </div>
  );
};

export default Another;
