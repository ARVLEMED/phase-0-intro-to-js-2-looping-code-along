const { Context } = require("mocha");

const ar=["Guadalupe","Ollie","Aki"]
function writeCards(ar, eventName){
    let messages=[];
    for (let i=0;i<ar.length; i++) {
    messages.push (`Thank you, ${ar[i]}, for the wonderful ${eventName} gift!`)
    }
return messages;
}

function countDown(k) {
    let countDown=k;
    while (countDown>= 0){
        console.log(countDown--)
    }
}
