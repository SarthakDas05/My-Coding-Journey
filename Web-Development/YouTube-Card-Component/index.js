let thumbnail = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"

let cName= prompt("Enter Channel name")
let views= prompt("Enter views")

function view(views){
    if (views>= 1000000){
        return (Math.floor(views/1000000)+"M" )
    }
    else if (views>=10000){
        return (Math.ceil(views/1000)+"K" )
    }
    else if (views>=1000){
    const formattedViews = Math.floor((views / 1000) * 10) / 10;
    return formattedViews + "K";
    }

    else{
        return views
    }
}
let duration= prompt("Enter duration")
let monthsOld = prompt("Enter months")
let title= prompt("Enter Title of the video")


function createCard( title,cName,views,monthsOld,duration,thumbnail){
    document.querySelector(".container").insertAdjacentHTML('beforeend',`<div class="thumb"><div class="img"><img src=${thumbnail}></img> <div class="dura">${duration}</div></div><div class="info"><div class="title">${title}</div><div class="cName">${cName} . ${view(views)} . ${monthsOld} months ago </div></div></div>`)

}

createCard(title,cName,views,monthsOld,duration,thumbnail)