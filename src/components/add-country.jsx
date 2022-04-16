import * as React from "react";
import Box from "@mui/material/box";
import TextField from "@mui/material/textField";
import Stack from "@mui/material/stack";
import Button from "@mui/material/button";
import axios from "@mui/material/axios";
export const County = () => {
  const [country, setCountry] = React.useState("");
  const consthandChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };
  const addCountry = () => {
    axios;
  };
  return (
    <div>
      <h2>India</h2>
    </div>
  );
};
