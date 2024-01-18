import './style.css'

const toggleMenuBtn = document.querySelector("#menu-btn")
const toggleMenuImg = document.querySelector("#menu-btn img")
const toggledMenu = document.querySelector("#toggled-menu")
const menuLinks = document.querySelector("#main-nav ul a")
const discordtext = document.querySelector("#discordtext")
const discordimg = document.querySelector("#discordimg")

toggleMenuBtn.addEventListener("click",toggleNav);



function toggleNav(){
  toggledMenu.classList.toggle("-translate-y-full")
  toggledMenu.classList.toggle("flex")
  toggledMenu.classList.toggle("hidden")

  if(toggledMenu.classList.contains("-translate-y-full")) { 

    toggleMenuImg.setAttribute("src", "assets/burger.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "false")
  }
  else {

    toggleMenuImg.setAttribute("src", "assets/cross.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "true")
  }
}



request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8721195f-ae01-423b-822d-1afe8298b96e')
.then((r1) => {
const bitcoin = document.querySelector("#bitcoin");
const eth = document.querySelector("#eth");
const cryptothird = document.querySelector("#cryptothird");
const cryptofourth = document.querySelector("#cryptofourth");
const marketcontainer = document.querySelector("#marketcontainer")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")


  var x1 = JSON.parse(r1.target.responseText);
  console.log(x1.data[0])

function tendigits(index){
  let coinvalue = x1.data[index].quote.USD.price
  let ten= JSON.stringify(coinvalue).substring(0,10)
  return ten
}
function greenorred(index, elem){
  let last= x1.data[index].quote.USD.percent_change_24h;
  if(last>0){
    return `<span class='text-green-500'>+${last}%</span>`
  }
  else {
    return `<span class='text-red-500'>${last}%</span>`
  }
}

function tendigitsmarketcap(index){
  let coinvalue = x1.data[index].quote.USD.fully_diluted_market_cap
  let ten= JSON.stringify(coinvalue).substring(0,15)
  return ten+'$'
}
function marketupdate(a,b,c){
  
  for (a=b; a<c; a++){
marketcontainer.innerHTML+=`<div class="border-b text-stone-300 border-white gap-y-5 lg:gap-y-2 lg:py-4 py-2 marketcontainer w-svw lg:w-full grid grid-cols-3 lg:grid-cols-4 text-xs lg:text-2xl xl:text-3xl mx-auto"><span class="">${x1.data[a].name}</span><span>${tendigits(a)}</span><span class="hidden lg:block">${tendigitsmarketcap(a)}</span>${greenorred(a,marketcontainer)}</div>`
}}

function newpage(a,b,c){
  marketcontainer.innerHTML=""
  marketupdate(a,b,c)

}

marketupdate(0,0,6)

eth.innerHTML+=`${x1.data[1].name}<br/>${tendigits(1)} $ <br/> ${greenorred(1,eth)} `
bitcoin.innerHTML+=`${x1.data[0].name}<br/>${tendigits(0)} $ <br/> ${greenorred(0,bitcoin)}` 
cryptothird.innerHTML+=`${x1.data[2].name}<br/>${tendigits(2)} $ <br/> ${greenorred(2,cryptothird)}` 
cryptofourth.innerHTML+=`${x1.data[3].name}<br/>${tendigits(3)} $ <br/> ${greenorred(3,cryptofourth)}` 




btn1.addEventListener('click',()=>{newpage(0,0,6)})
btn2.addEventListener('click',()=>{newpage(6,6,12)})
btn3.addEventListener('click',()=>{newpage(12,12,18)})
btn4.addEventListener('click',()=>{newpage(18,18,24)})
btn5.addEventListener('click',()=>{newpage(24,24,30)})

}).catch()



function request(method,url){
  return new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send()
  });
}




