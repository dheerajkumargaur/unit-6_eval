import * as React from "react";
import TextField from "@mui/material/TextField";

export const AddCity = () => {
  return (
    <form action="">
      <TextField if="standard-basic" label="City Name" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Population" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Country" variant="standard" />
      <br />
      <input
        style={{ marginTop: 13, padding: 7, width: 150 }}
        type="submit"
        name="standard"
        id=""
      />
    </form>
  );
};
