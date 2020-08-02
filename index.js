var randomNumberOne=Math.random();

randomNumberOne=(randomNumberOne*6)+1;
randomNumberOne=Math.floor(randomNumberOne);
imageNameOne="images/"+"dice"+randomNumberOne+".png";
document.querySelector(".img1").setAttribute("src",imageNameOne);

var randomNumberTwo=Math.random();

randomNumberTwo=(randomNumberTwo*6)+1;
randomNumberTwo=Math.floor(randomNumberTwo);
imageNameTwo="images/"+"dice"+randomNumberTwo+".png";
document.querySelector(".img2").setAttribute("src",imageNameTwo);

if (randomNumberTwo===randomNumberOne){
    document.querySelector("h1").innerHTML="🚩Draw!";
}
else if(randomNumberOne>randomNumberTwo){
    document.querySelector("h1").innerHTML="🐯Abhishek Wins!";
}
else {
    document.querySelector("h1").innerHTML="😺Ashish Wins!";
}

