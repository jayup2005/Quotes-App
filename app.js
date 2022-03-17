const btn = document.getElementById('btn')
const para = document.getElementById('quote')
const authy = document.getElementById('quote2')
btn.addEventListener('click',() =>{
    console.log("clicked1")
    const getData = async () => {
    const api = "https://type.fit/api/quotes"
    try {
        let data = await fetch(api)
        let realData =await data.json()
        let num = Math.floor((Math.random() * 100) + 1)
        para.innerText = realData[num].text
        authy.innerText = realData[num].author
    } catch (error) {
        
    }
}
getData();
})
