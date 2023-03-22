var animal_likes = [3,5,8];

const animal_type = ["Any Pet", "Cat", "Dog"]

// function giveAlert(select) {
//     alert(select.options[select.selectedIndex].text)
// }


// I wanted to use a function like below to cover all three choices, but I had issues with the HTML side of things, 
// in addition to completing the function itself here on the script file. On the HTML side, both onclick and onclick and onselect
// did not yield anything. I would like to know how to make alerts on select tags' options.
// function giveAlert () {
//     alert("You are looking for a" + animal_type[0,1,2])
// }

function giveAlertAny() {
    alert("You are looking for a" + animal_type[0])
}

function giveAlertCat() {
    alert("You are looking for a" + animal_type[1])
}

function giveAlertDog() {
    alert("You are looking for a" + animal_type[2])
}

function giveAlert(select) {
    alert(select.options[select.animal_type].value);
}

// I had to do some research online with this function. I am drawing from the animal_likes array and creating a new array each time there is a button
// click (any of the three like buttons). I could not recall if a more practical way to accomplish was discussed in lecture/office hours. 
function addLike(animal_likes) {
    animal_likes[0] = animal_likes[0] + 1
    document.getElementById("pepper_likes").innerText = animal_likes[0]
    console.log(animal_likes)
}

var pepper_likes = document.querySelector("pepper_likes")
var bruce_likes = document.querySelector("bruce_likes")
var oscar_likes = document.querySelector("oscar_likes")

pepper_likes = 3
bruce_likes = 5
oscar_likes = 8

function likePepper() {
    pepper_likes = pepper_likes + 1
    document.getElementById("pepper_likes").innerText = pepper_likes
}

function likeBruce() {
    bruce_likes = bruce_likes + 1
    document.getElementById("bruce_likes").innerText = bruce_likes
}

function likeOscar() {
    oscar_likes = oscar_likes + 1
    document.getElementById("oscar_likes").innerText = oscar_likes
}