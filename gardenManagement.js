const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//If else statement turning water on or off

if (temperature > 80){

    console.log("Watering on")
}
else{

    console.log("Watering off")
}

//if else statement turning lights on or off

if (timeOfDay === "evening" || "night"){

    console.log("Lights on")
}
else{

    console.log("Lights off")
}

//while loop raising soil moisture

while (soilMoisture <= 40){

    soilMoisture + 5
}