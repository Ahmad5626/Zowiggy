const product = [{
    "product": "BURGER",
    "before": "₹199.00",
     "rate": 149.00,
    "rating": "3.8",
    "img": "image/burger1.webp",
    "off": "25% off | Use WELLCOME"
},
{
    "product": "PIZZA",
    "before": "₹299.00",
     "rate": 249.00,
    "rating": "4.0",
    "img": "image/pizza4.jpg",
    "off": "20% off | Use WELLCOME"
}, {
    "product": "SANDWICH",
    "before": "₹150.00",
     "rate": 100.00,
    "rating": "3.8",
    "img": "image/sandwich.jpg",
    "off": "35% off | Use WELLCOME"
},
{
    "product": "SWEET",
    "before": "₹130.00",
     "rate": 70.00,
    "rating": "3.8",
    "img": "image/sweet3.jfif",
    "off": " 40% off | Use WELLCOME"
},
{
    "product": "MOMOS",
    "before": "₹199.00",
     "rate": 140.00,
    "rating": "3.8",
    "img": "image/momos1.jpg",
    "off": " 35% off | Use WELLCOME"
},
{
    "product": "CAKE",
    "before": "₹250.00",
     "rate": 200.00,
    "rating": "3.8",
    "img": "image/cake.jfif",
    "off": " 18% off | Use WELLCOME"
},
{
    "product": "BURGER",
    "before": "₹199.00",
     "rate": 149.00,
    "rating": "3.8",
    "img": "image/th.jfif",
    "off": "25% off | Use WELLCOME"
},
{
    "product": "PIZZA",
    "before": "₹299.00",
     "rate": 249.00,
    "rating": "4.0",
    "img": "image/pizza2.jpg",
    "off": "20% off | Use WELLCOME"
}, {
    "product": "SANDWICH",
    "before": "₹150.00",
     "rate": 100.00,
    "rating": "3.8",
    "img": "image/sandwich2.jpg",
    "off": "35% off | Use WELLCOME"
},
{
    "product": "SWEET",
    "before": "₹130.00",
     "rate": 70.00,
    "rating": "3.8",
    "img": "image/sweet1.jfif",
    "off": " 40% off | Use WELLCOME"
},
{
    "product": "MOMOS",
    "before": "₹199.00",
     "rate": 140.00,
    "rating": "3.8",
    "img": "image/momos4.webp",
    "off": " 35% off | Use WELLCOME"
},
{
    "product": "CAKE",
    "before": "₹250.00",
     "rate": 200.00,
    "rating": "3.8",
    "img": "image/cake3.jfif",
    "off": " 18% off | Use WELLCOME"
},
{
    "product": "BURGER",
    "before": "₹199.00",
     "rate": 149.00,
    "rating": "3.8",
    "img": "image/burger2.jfif",
    "off": "25% off | Use WELLCOME"
},
{
    "product": "PIZZA",
    "before": "₹299.00",
     "rate": 249.00,
    "rating": "4.0",
    "img": "image/pizza3.jpg",
    "off": "20% off | Use WELLCOME"
}, {
    "product": "SANDWICH",
    "before": "₹150.00",
     "rate": 100.00,
    "rating": "3.8",
    "img": "image/sandwich4.jpg",
    "off": "35% off | Use WELLCOME"
},
{
    "product": "SWEET",
    "before": "₹130.00",
     "rate": 70.00,
    "rating": "3.8",
    "img": "image/sweet4.jpg",
    "off": " 40% off | Use WELLCOME"
},
{
    "product": "MOMOS",
    "before": "₹199.00",
     "rate": 140.00,
    "rating": "3.8",
    "img": "image/momos2.jpg",
    "off": " 35% off | Use WELLCOME"
},
{
    "product": "CAKE",
    "before": "₹250.00",
     "rate": 200.00,
    "rating": "3.8",
    "img": "image/cake4.png",
    "off": " 18% off | Use WELLCOME"
},
{
    "product": "BURGER",
    "before": "₹199.00",
     "rate": 149.00,
    "rating": "3.8",
    "img": "image/burger4.jpg",
    "off": "25% off | Use WELLCOME"
},
{
    "product": "PIZZA",
    "before": "₹299.00",
     "rate": 249.00,
    "rating": "4.0",
    "img": "image/pizza1.jpg",
    "off": "20% off | Use WELLCOME"
}, {
    "product": "SANDWICH",
    "before": "₹150.00",
     "rate": 100.00,
    "rating": "3.8",
    "img": "image/sandwich3.jfif",
    "off": "40% off | Use WELLCOME"
},
{
    "product": "SWEET",
    "before": "₹130.00",
     "rate": 70.00,
    "rating": "3.8",
    "img": "image/sweet2.jfif",
    "off": " 40% off | Use WELLCOME"
},
{
    "product": "MOMOS",
    "before": "₹199.00",
    "rate": 140.00,
    "rating": "3.8",
    "img": "image/momos3.jpg",
    "off": " 35% off | Use WELLCOME"
},
{
    "product": "CAKE",
    "before": "₹449.00",
     "rate": 399.00,
    "rating": "3.8",
    "img": "image/cake2.jfif",
    "off": " 38% off | Use WELLCOME"
},


]

let listCards = [];
function itemshow() {
    product.forEach((value, key) => {

        var box = document.createElement('div')
        box.classList.add('itemschild1')
        box.innerHTML = `
        <img class="block"src=${value.img} alt="">
        <div class="name">
            <p class="product_name">${value.product}</p>
            <P><DEL>${value.before}</DEL>${value.rate}
            </P>
        </div>
        <div class="rate">
            <p class="star"><i class="fa-solid fa-star"></i>${value.rating}</p>
           <button onclick="currentItem(${key})"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        <div class="png">
            <img class="png2"src="image/percent_gold.png" alt="">
            <p> 20% off | Use WELLCOME</p>
         </div>
            
        `
        let items2 = document.getElementsByClassName('items2')[0]
        items2.appendChild(box)

    })


}

itemshow()
function currentItem(key) {
    if (listCards[key]== null){
        listCards[key]=JSON.parse(JSON.stringify(product[key]));
        listCards[key].quantity=1

        
    }
    console.log(listCards[key]);
    addTocard()
}
let total=document.querySelector('.total')
let close=document.querySelector('close')
let count=document.querySelector('.count')
let cardName=document.querySelector('.card-current')
console.log(cardName);
function addTocard(){
    cardName.innerHTML='';
    let totalPrice=0;
    let CountProduct=0;
    listCards.forEach((value,key)=>{

        totalPrice=totalPrice+value.rate;
        CountProduct=CountProduct+value.quantity
        let box3=document.createElement('div')
        box3.classList.add('card-1')

        box3.innerHTML=`
        <div class="card-img">
        <img src=${value.img} alt="">
    </div>
    <div class="card-name">
        <p class="card-name-1">${value.product}</p>
        
        
    </div>
    <div class="card-name">
        <p id="card-rate">₹${value.rate}</p>
        
        
    </div>
   
    <div class="button">
        <button onclick="growItem(${key},${value.quantity-1})">-</button>
        <div class="number"> &nbsp;&nbsp;${value.quantity} &nbsp;&nbsp; </div>
        <button onclick="growItem(${key},${value.quantity+1})">+</button>
    </div>
        `
        cardName.appendChild(box3)
    })
    total.innerText=totalPrice.toLocaleString()+".00";
    count.innerText=CountProduct;
}


function growItem(key, value){
    if(value == 0){
        delete listCards[key]
    }else{
      listCards[key].quantity=value
      listCards[key].rate=value*product[key].rate
       
    }
    addTocard()
}




function fixed4() {


    let filter = document.getElementById('text1').value.toUpperCase()
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')

    for (var i = 0; i < l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent
        console.log(value);
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }
}

function Showmore1() {
    let filter = document.getElementById('Pizza').innerText
    console.log(filter);
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent


        if (value == filter) {
            item[i].style.display = "";

        } else {
            item[i].style.display = "none";
        }

    }

}

function Showmore2() {
    let filter = document.getElementById('Sandwich').innerText
    console.log(filter);
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent


        if (value == filter) {
            item[i].style.display = "";

        } else {
            item[i].style.display = "none";
        }

    }

}


function Showmore3() {
    let filter = document.getElementById('Burger').innerText
    console.log(filter);
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent


        if (value == filter) {
            item[i].style.display = "";

        } else {
            item[i].style.display = "none";
        }

    }

}


function Showmore4() {
    let filter = document.getElementById('Cake').innerText
    console.log(filter);
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent


        if (value == filter) {
            item[i].style.display = "";

        } else {
            item[i].style.display = "none";
        }

    }

}

function Showmore5() {
    let filter = document.getElementById('Momos').innerText
    console.log(filter);
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent


        if (value == filter) {
            item[i].style.display = "";

        } else {
            item[i].style.display = "none";
        }

    }

}


function Showmore6() {
    let filter = document.getElementById('Sweet').innerText
    console.log(filter);
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent


        if (value == filter) {
            item[i].style.display = "";

        } else {
            item[i].style.display = "none";
        }

    }

}

function Showmore() {
    let filter = document.getElementById('all').innerText
    console.log(filter);
    let item = document.getElementsByClassName('itemschild1')
    let l = document.getElementsByTagName('p')
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('P')[0]

        let value = a.innerHTML || a.innerText || a.innerContent


        item[i].style.display=""

    }

}


$(document).ready(function(){
    $('.line').click(function(){
        $('.scroll').toggleClass('scroll-show')
    })
})





// <div class="itemschild1 burger">
//
//     </div>
