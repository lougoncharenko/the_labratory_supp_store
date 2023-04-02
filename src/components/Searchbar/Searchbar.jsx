import { React } from "react";
import TextField from "@mui/material/TextField";
import './Searchbar.css'

export default function Searchbar({setInputText, setType, type}) {
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
          <select
          className='supplement-type'
					onChange={(e) => setType(e.target.value.toLowerCase())}
					value = {type}
					>
						<option>Please choose one option</option>
						<option value= 'protein'> Protein </option>
						<option value= 'pre-workout'> Preworkout </option>
						<option value = 'creatine'> Creatine </option>
					</select>
            </div>
        </section>
       
      );
}