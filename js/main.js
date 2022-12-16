let img = document.querySelector(".img1")
let text = document.querySelector(".p1")


let col = document.querySelector(".col")

function chiz() {
    col.innerHTML=""
    massiv.map((item, index) => {

        let div1 = document.createElement("div")
        
        let p= document.createElement("h3")
        p.textContent = item.narx

        let img1 = document.createElement("img")
        img1.classList.add("img2")
        img1.src = item.src
        img1.setAttribute("onclick",`add(${index})`)
        

        div1.appendChild(img1)
        div1.appendChild(p)
        col.appendChild(div1)

    })
}
chiz()

function add(nimadir){
    let text2 = text.textContent
    
    text.textContent = massiv[nimadir].narx
    massiv[nimadir].narx = text2

    let img2 = img.src
    img.src = massiv[nimadir].src
    massiv[nimadir].src = img2 
    chiz()
}


