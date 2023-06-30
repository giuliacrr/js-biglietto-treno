const fullName =prompt("What's your full name?");
const userAge = parseInt(prompt("How old are you?"));
const userKilometers = parseInt(prompt("How many kilometers you want to travel?"));
const price = userKilometers * 0.21;
const date = new Date();

// Date
const currentDay = date.getDate()
const currentMonth = date.getUTCMonth() + 1 ;
const currentYear = date.getFullYear();
const currentDate = `${currentDay}/${currentMonth}/${currentYear}`
document.getElementById("currentDate").innerHTML = `${currentDate}`

//Informations
document.getElementById("fullName").innerHTML = `${fullName}`
document.getElementById("userAge").innerHTML = `${userAge}`
document.getElementById("userKilometers").innerHTML = `${userKilometers}`



if (userAge < 18) {
    const coupon = ((price * 20) / 100);
    document.getElementById("price").innerHTML = (price - coupon).toFixed(2) + "€";

} else if (userAge >= 65) {
    const coupon = ((price * 40) / 100);
    document.getElementById("price").innerHTML = (price - coupon).toFixed(2) + "€";

} else {
    console.log(price);
    document.getElementById("price").innerHTML = (price).toFixed(2) + "€";
}
