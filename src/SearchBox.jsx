import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBoss.css";
import Button from '@mui/material/Button';

export default function SearchBox({updateInfo}) {
  let [City,SetCity] = useState("");
  let [error,SetError] = useState(false);
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "03d019213de5e8af4419b0117d669f87";

  let getWeatherInfo = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`);
    let jsonReasponse = await response.json();
    console.log(jsonReasponse);
    let result = {
      city: City,
      temp: jsonReasponse.main.temp,
      tempMin: jsonReasponse.main.temp_min,
      tempMax: jsonReasponse.main.temp_max,
      humidity: jsonReasponse.main.humidity,
      feelsLike: jsonReasponse.main.feels_like,
      weather: jsonReasponse.weather[0].description,
      
};

console.log(result);
return result;

  }catch (err) {
  throw err;
  }
    
}
  

let handleChange =async (evt) =>{
  SetCity(evt.target.value);

};

let handleSubmit = async (evt) =>{
    try {
      evt.preventDefault();
      console.log(City);
      SetCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);

    // eslint-disable-next-line no-unused-vars
    }catch(err) {
      SetError(true);

    }
  
  };
  
  return(
    <div className="Searchbox">
        
        <form onSubmit={handleSubmit}>
            <TextField id="city"
             label="City Name" 
             variant="outlined" 
             required 
             value={City}
             onChange={handleChange}
             />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" >search</Button>
            {error && <p style={{color:"red"}}>NO SUCH PLACCE EXIXTS!</p>}
        </form>
    </div>
  )
}
