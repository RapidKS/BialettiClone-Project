import { footer } from "../components/footer.js";

document.querySelector("footer").innerHTML = footer()

async function apiRequest(page) {

    try {
        let res = await fetch(`https://bialettiserver.onrender.com/products?_limit=6&_page=${page}`)
        let mData = await res.json();

        // console.log(mData)
        showCoffee(mData)
    } catch (err) {
        console.log(err)
    }
}
// hello

apiRequest(1)

let container = document.getElementById("product_container")
let paginationBtns = document.getElementById("pagination")


function showCoffee(data){
    // console.log(data)
    container.innerHTML = ""
    paginationBtns.innerHTML = ""


    let cardList = document.createElement("div")
    cardList.setAttribute("class", "card-list")

    data.forEach(element => {
         let card  = document.createElement("div")
        card.setAttribute("class", "card")

         let cardImg  = document.createElement("div")
        cardImg.setAttribute("class", "card-img")

        let aImg = document.createElement("a")
        aImg.addEventListener("click",function(){

            if(element.id<5){

                localStorage.setItem("id", element.id)
                window.location.href = "product_details.html"
            }else{
                alert("details not available")
            }
        })
        aImg.href = "#"
        let img = document.createElement("img")
        img.setAttribute("src", element.image)
        img.setAttribute("class", "img")
        aImg.append(img)
        
        
        cardImg.append(aImg)
        img.onmouseover= function(){
            //   cardImg.append(img1)
            img.setAttribute("src", element.img3)
        }
        img.onmouseout = function(){
            img.setAttribute("src", element.image)

        }
       

        let cardBody = document.createElement("div")

        let a = document.createElement("a")
        a.setAttribute("class", "title_head")
        a.setAttribute("href", "#")

        let price = document.createElement("p")
        price.setAttribute("class", "price")
        price.textContent = "Price "+ element.price +"$";
        let name = document.createElement("a")
        name.href = "#"
        name.setAttribute("class", "product-name")

        name.addEventListener("click",function(){

            if(element.id<5){

                localStorage.setItem("id", element.id)
            }else{
                alert("details not available")
            }
        })
        name.textContent = element.product_name;

        cardBody.append(a,name,price)

        card.append(cardImg, cardBody)
        cardList.append(card)

        container.append(cardList)
    });

    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button")
    let btn3 = document.createElement("button")
    let btn4 = document.createElement("button")
    

    btn1.textContent = "1"
    btn2.textContent = "2"
    btn3.textContent = "3"
    btn4.textContent = " > "
    

    btn1.setAttribute("class", "pagination_btn")
    btn2.setAttribute("class", "pagination_btn")
    btn3.setAttribute("class", "pagination_btn")
    btn4.setAttribute("class", "pagination_btn")

    paginationBtns.append(btn1, btn2, btn3, btn4 )

    btn1.addEventListener("click", function(){
        apiRequest(1)
    })
    btn2.addEventListener("click", function(){
        apiRequest(2)
    })
    btn3.addEventListener("click", function(){
        apiRequest(3)
    })
    
}

async function sortApiRequest(sort) {

    try {
        let res = await fetch(`https://bialettiserver.onrender.com/products?_limit=4&${sort}`)
        let mData = await res.json();

        // console.log(mData)
        showCoffee(mData)
    } catch (err) {
        console.log(err)
    }
}
// ?_sort=price&_order=desc
   function sortApply(){
    let sort = document.getElementById("sort").value
    // console.log("its value",sort)

    if(sort === "HTL"){
        sortApiRequest("_sort=price&_order=desc")
    }
    if(sort === "LTH"){
        sortApiRequest("_sort=price&_order=asc")
    }
    if(sort === ""){
        apiRequest(1)
    }
   }
 