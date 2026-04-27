import React from 'react';
 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/Sunny';
import Card from '@mui/material/Card';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?s=612x612&w=is&k=20&c=rDTJ1zsXF1A9U0aWY_RGLNjyLWwI6OI_a5NiJmY9dfI=";

 
    return(
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL:COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity > 80 ? <ThunderstormIcon />: info.temp > 15 ? <WbSunnyIcon />:<AcUnitIcon /> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>the weather can be described as <i>{info.weather}</i>and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
      </Card>
      </div>
        </div>
    )
}