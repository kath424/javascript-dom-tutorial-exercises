let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
countries.forEach(element =>{
   const option = document.createElement("option")
   option.innerHTML = element
   document.querySelector("#mySelect").appendChild(option)
})

function alertCountry(event){
    alert(event.target.value)
}

document.querySelector("#mySelect").addEventListener("change",alertCountry)