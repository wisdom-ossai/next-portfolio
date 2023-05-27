"use client";

import { FC, useEffect } from "react";

interface ErrorType {
  error: unknown;
  reset: () => void;
}
const Error: FC<ErrorType> = ({ error, reset }) => {
  useEffect(() => {
    console.log("page error", error);
  }, []);

  return (
    <div>
      <h2>Aw something went wrong</h2>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Error;
