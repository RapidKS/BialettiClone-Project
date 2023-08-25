import { footer } from "../components/footer.js";

document.querySelector("footer").innerHTML = footer()

async function apiRequest(id) {

    try {
        let res = await fetch(`https://bialettiserver.onrender.com/products?id=${id}`)
        let mData = await res.json();

        // console.log(mData)
        showCoffee(mData)
    } catch (err) {
        console.log(err)
    }
}

let id = localStorage.getItem("id")
//  console.log(id)

apiRequest(id)

let img_container = document.getElementById("img_container")

function  showCoffee(data){

let img_show  =document.getElementById("img_show")
let detail = document.getElementById("about_product")
let video_container = document.getElementById("video_container")
let bottom_container = document.getElementById("bottom_container")

    data.forEach(element => {
        img_show.innerHTML = ""
        detail.innerHTML = ""
        video_container.innerHTML = ""
        bottom_container.innerHTML = ""

        let img_box = document.createElement("div")
        img_box.setAttribute("class", "img_box")

        let li1 = document.createElement("li")
        let liImg1 = document.createElement("img")
        liImg1.src = element.image

        let ul1 = document.createElement("ul")
        let ulImg1 = document.createElement("img")
        ulImg1.src = element.image;
        ul1.setAttribute("id", "active")

        ul1.append(ulImg1)
        img_show.append(ul1)

        li1.append(liImg1)

        let li2 = document.createElement("li")
        let liImg2 = document.createElement("img")
        liImg2.src = element.img1


        li2.append(liImg2)

        let li3 = document.createElement("li")
        let liImg3 = document.createElement("img")
        liImg3.src = element.img2
 

        li3.append(liImg3)


        let li4 = document.createElement("li")
        let liImg4 = document.createElement("img")
        liImg4.src = element.img3

        
        li4.append(liImg4)

        let li5 = document.createElement("li")
        let liImg5 = document.createElement("img")
        liImg5.src = element.img4

         
        
        li5.addEventListener("click", function(){
            // console.log("working")
            ulImg1.src = element.img4;
            img_show.append(ul1)


        })
        li4.addEventListener("click", function(){
            // console.log("working")
            ulImg1.src = element.img3;

        })
        
        li3.addEventListener("click", function(){
            ulImg1.src = element.img2;
            // console.log("working")
            img_show.append(ul1)


        })
        
        liImg2.addEventListener("click", function(){
            // console.log("LI2")
            ulImg1.src = element.img1;


        })
        li5.append(liImg5)


        liImg1.setAttribute("class", "liImg")
        liImg2.setAttribute("class", "liImg")
        liImg3.setAttribute("class", "liImg")
        liImg4.setAttribute("class", "liImg")
        liImg5.setAttribute("class", "liImg")

       
        
        img_box.append(li1, li2, li3, li4, li5)


        img_container.append(img_box)



        // about product

        let h1 = document.createElement("h1")
        h1.setAttribute("class", "product_detail")
        h1.textContent  = element.product_name

        let p  = document.createElement("p")
        p.setAttribute("class", "description")
        p.textContent = element.description

        let span = document.createElement("span")
        span.setAttribute("class", "intensity")
        span.textContent = element.intensity

        let btns = document.createElement("div")
        btns.setAttribute("class", "btns")

        let btn1 = document.createElement("button")
        btn1.setAttribute("class", "btn1")
        btn1.textContent = "Buy Now"

        btn1.addEventListener("click", function(){
            localStorage.setItem("buyId", element.id)
            location.href = "paymentPage.html"
        })

        let btn2 = document.createElement("button")
        btn2.setAttribute("class", "btn2")

        btn2.textContent = "Add To Cart"
        btn2.addEventListener("click", function(){
            let cartId = element.id;

            localStorage.setItem("cartId", cartId);
            // console.log(cartId)
            location.href = "./cartpage.html"

        })

        btns.append(btn1, btn2)

        detail.append(h1, p, span, btns)

        // video container

        let useBtns = document.createElement("div")
        useBtns.setAttribute("class","useBtns")

        let useBtn1 = document.createElement("button")
        useBtn1.textContent = "HOW TO USE"
        useBtn1.setAttribute("class", "useBtn1")
        
        let useBtn2 = document.createElement("button")
        useBtn2.textContent = "TECHNICAL FEATURES"
        useBtn2.setAttribute("class", "useBtn2")

        useBtns.append(useBtn1, useBtn2)

        if(element.video != ""){

        const video = document.createElement('video');
        video.className = 'full-width';
        video.style.width = '100%';
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.setAttribute('playsinline', '');

        const source = document.createElement('source');
        source.src = element.video
        source.type = 'video/mp4';

        // Add the source element to the video element
        video.appendChild(source);


        video_container.append(video,useBtns)
    }else{
        let p = document.createElement("p")

        p.textContent = element.use

        // useBtns.append(p)
        video_container.append( useBtns)
    }


    let bottom_title = document.createElement("h1")
    bottom_title.textContent = element.description_title

    let bottom_img = document.createElement("img")
    bottom_img.setAttribute("src", element.image)

    bottom_container.append(bottom_title, bottom_img)

    });
}