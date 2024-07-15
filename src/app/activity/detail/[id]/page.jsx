"use client";

import { useEffect } from "react";

export default function DetailActivity({ params }) {
  const test = () => {
    console.log(params);
  };

  useEffect(() => {
    test();
  }, []);

  return <div>DetailActivity </div>;
}
