//variables..................
let form = document.getElementById("form");
let submit = form.querySelector(".button");
let tweet = document.getElementById('tweet')
let tweetList = document.getElementById("tweet-list");

let getElement = getFromLocalStorage();


//eventListener....................

eventListener();

function eventListener() {
    submit.addEventListener("click", myTweet)
    document.addEventListener("DOMContentLoaded", addTweetFormLocalStorage)
    tweetList.addEventListener("click", removeTweet)
}

//function.................
function myTweet(e) {
    if(tweet.value != ""){
       
        myTweets(tweet.value);
        tweet.value="";
           
    }
}

function myTweets(tweet) {

    allTweet(tweet);
    
    setIntoLocalStorage(tweet)
}

function allTweet(tweet) {
    let tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${tweet}</td>
    <td class= "id">x</td>
    `;
    tweetList.appendChild(tr);
}

function setIntoLocalStorage(tweet) {
    getElement.push(tweet)
    localStorage.setItem("element", JSON.stringify(getElement))
}

//localStorage..................

function getFromLocalStorage(){
    let element = localStorage.getItem("element")

    if (element == null) {
        return [];
    }
    else{
        return JSON.parse(element);
    }
}

function addTweetFormLocalStorage(){
    getElement.forEach(function(tweet){
        allTweet(tweet);
    });
}



//remove item....................
function removeTweet(event) {
    if(event.target.classList.contains('id')){
        let element = event.target.previousElementSibling.innerText;
        removeItem(element);
        event.target.parentElement.remove();
    }
     
}

function removeItem(element) {
    getElement.forEach(function(value, index){
        if(value == element)
        {
            getElement.splice(index, 1);
        }

        localStorage.clear();
        localStorage.setItem("element", JSON.stringify(getElement))
    })
}