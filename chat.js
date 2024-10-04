const messageDisplay = document.getElementById("messageDisplay")

function blueSend(){
    let blInput = document.getElementById("blueInput")
    let blValue = blInput.value
    if(blValue === ""){
        alert("no blue text")
    }
    else{
        messageDisplay.innerHTML +=`
        <div class="bluemsg">
        ${blValue}
        </div>`
    }
}

function redSend(){
    let rdInput = document.getElementById("redInput")
    let rdValue = rdInput.value
    if(rdValue === ""){
        alert("no red text")
    }
    else{
        messageDisplay.innerHTML +=`
        <div class="redmsg">
        ${rdValue}
        </div>`

    }
}