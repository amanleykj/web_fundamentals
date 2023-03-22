var neilLikes = document.querySelector("neilLikes")
var NicholeLikes = document.querySelector("NicholeLikes")
var JimLikes = document.querySelector("JimLikes")

function neilAdd() {
    neilLikes = neilLikes + 1
    document.getElementById("neilLikes").innerText = neilLikes
}

function NicholeAdd() {
    NicholeLikes = NicholeLikes + 1
    document.getElementById("NicholeLikes").innerText = NicholeLikes
}

function JimAdd() {
    JimLikes = JimLikes + 1
    document.getElementById("JimLikes").innerText = JimLikes
}

function addLike() {
    element = element + 1
    document.getElementsByClassName("userhere").innerText = element
}