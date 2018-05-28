var positionX = 0
var positionY = 0

window.addEventListener('keydown', function (event) {
    console.log(event.key)
    let ev = event.key
    if (ev == "ArrowUp") {
        positionY = positionY - 100
        document.getElementById("ROV").style.marginTop = positionY
    } else if (ev == "ArrowDown") {
        positionY = positionY + 100
        document.getElementById("ROV").style.marginTop = positionY

    } else if (ev == "ArrowRight") {
        positionX = positionX + 100
        document.getElementById("ROV").style.marginLeft = positionX
    }
    else if (ev == "ArrowLeft") {
        positionX = positionX - 100
        document.getElementById("ROV").style.marginLeft = positionX

    }
})

// document.getElementById("my-buttom").onclick = function () {
//     positionX = positionX + 100
//     document.getElementById("ROV").style.marginLeft = positionX
// }
// document.getElementById("my-buttom2").onclick = function () {
//     positionX = positionX - 100
//     document.getElementById("ROV").style.marginLeft = positionX
// }
// document.getElementById("my-buttom3").onclick = function () {
//     positionY = positionY + 100
//     document.getElementById("ROV").style.marginTop = positionY
// }
// document.getElementById("my-buttom4").onclick = function () {
//     positionY = positionY - 100
//     document.getElementById("ROV").style.marginTop = positionY
// }