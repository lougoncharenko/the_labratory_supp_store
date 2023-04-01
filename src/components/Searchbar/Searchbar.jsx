import { React } from "react";
import TextField from "@mui/material/TextField";
import './Searchbar.css'

export default function Searchbar({setInputText}) {
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
      return (
        <section className="search-parent">
            <div className="search-child">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search band name"
            />
            </div>
        </section>
       
      );
}