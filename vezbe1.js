
function dimensionsOfScreen(){
    console.log(screen.height);
    console.log(screen.width);
}
dimensionsOfScreen();

function test(){
    console.log(location.hostname);
    console.log(navigator.vendor);
    console.log(location.search);
}
window.test();

function storageTest(){
    localStorage.setItem("name", "My name");
    var name = localStorage.getItem("name");
    console.log("Local storage: " + name);
    console.log("Local storage 1: " + localStorage.getItem("name"));


    sessionStorage.setItem("name1", name);
    var name1 = sessionStorage.getItem("name1");
    console.log("Session storage: " + name1);
    console.log("Session storage 1: " + sessionStorage.getItem("name1"));

}
storageTest();

function readFromStorage(){
    console.log(localStorage.getItem("name"));
    console.log(sessionStorage.getItem("name1"))
}
readFromStorage();

function removeFromLocalStorage(key){
    var remove = sessionStorage.removeItem(key);
    console.log("removed "+ remove);
}

// function openGoogle(){
//     var win = window.open("https://wikipedia.org");

//     setTimeout(function(){
//         win.close();
//     }, 2000);
// }

// openGoogle();

function alertPromptConfirm(){
    alert ("Hello!!");
    var userInput = prompt('How are you?');
    // console.log(userInput);
    var YesNo = confirm("We will submite this answer now:  "+ userInput);
    console.log(YesNo);

    (function confirmation (){
    
        alert ("Confirmed!")
    }());

    function foo(){ console.log('foo'); }
    var fooIntervalId = setInterval(foo,2000);
    setTimeout (function(){
        clearInterval(fooIntervalId);
        console.log("clear");
    },8000);

}

alertPromptConfirm();