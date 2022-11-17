let isRetracted = true

function retractor (){
    isRetracted = !isRetracted //Toggle Code
    if (isRetracted === true){
        document.getElementById("demo").innerHTML = "Down"
    } else if (isRetracted === false){
        document.getElementById("demo").innerHTML = "Up"
    }
}

retractor()