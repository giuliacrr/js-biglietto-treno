//const fullName =prompt("What's your full name?");
const userAge = parseInt(prompt("How old are you?"));
const userKilometers = parseInt(prompt("How many kilometers you want to travel?"));
const price = userKilometers * 0.21;



//document.getElementById("fullName").innerHTML = `${fullName}`
document.getElementById("userAge").innerHTML = `${userAge}`
document.getElementById("userKilometers").innerHTML = `${userKilometers}`



if (userAge < 18) {
  const coupon = ((price * 20) / 100);
    console.log(price - coupon);

} else if (userAge >= 65) {
    const coupon = ((price * 40) / 100);
    console.log(price - coupon);
    
} else {
    console.log(price);
}
