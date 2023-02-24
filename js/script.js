let clock = document.getElementById("time");

setInterval(() =>{
    let x = new Date();


    clock.innerHTML = x.toLocaleDateString() + "  |  " + x.toLocaleTimeString()
}, 1000)

 