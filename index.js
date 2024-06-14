console.log("this is my script")

submitBtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = ` <img  width="50" src="img/loading.svg">`
    let key="ema_live_WidvYVx700Ia70s1G0OG1VSmbQmVW4bI6W1LsLvr"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)){
        if(result[key] !== "" && result[key] !== " "){
        str = str + `<div>${key}:${result[key]}</div>`
    }
}
    console.log(str)
    resultCont.innerHTML = str
})




