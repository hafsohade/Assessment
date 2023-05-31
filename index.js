document.title ="myAssessment";

const url ="https://randomuser.me/api/"

const main = document.getElementsByClassName("main")

const container = document.getElementsByClassName("container");

const image = document.getElementById("img");
const fName = document.getElementById("names");
const phoneNumber = document.getElementById("number");


let getProfile = ()=>{
 fetch(url).then(response=>{
    return response.json();
 }).then(data =>{
    image.src = data.results[0].picture.large;
    fName.textContent = `Full Name: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
    phoneNumber.textContent = `Phone Number: ${data.results[0].phone}`;
 }
 )}
 getProfile();
    