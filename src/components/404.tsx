import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Error() {
  const [message, setMessage] = useState<string>("login");
  const [logged, setLogged] = useState<boolean>(false);
  useEffect(() => {
    const log = localStorage.getItem("logged");
    if (log == "true") {
      setLogged(true);
      setMessage("homepage");
    }
  });

  return (
    <>
      <h1 className="text-4xl text-white text-center mb-10 mt-36">
        404 Not Found
      </h1>
      <h1 className="text-xl text-white text-center">
        Try to go back to the{" "}
        <a className="font-bold underline" href={logged ? "/home" : "/login"}>
          {message}
        </a>
      </h1>
    </>
  );
}

export default Error;
