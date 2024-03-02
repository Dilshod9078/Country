

const countries = JSON.parse(window.localStorage.getItem("countries")) || [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin",
    isLike: false,
    isBasket: false
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    name: "Spain",
    population: "47,370,000",
    region: "Europe",
    capital: "Madrid",
    isLike: false,
    isBasket: false
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    capital: "Brasilia",
    isLike: false,
    isBasket: false
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavík",
    isLike: false,
    isBasket: false
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul",
    isLike: false,
    isBasket: false
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
    name: "Uzbekistan",
    population: "35,482,369",
    region: "Asia",
    capital: "Tashkent",
    isLike: false,
    isBasket: false
  },
  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
    name: "Albania",
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana",
    isLike: false,
    isBasket: false
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
    name: "Algeria",
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers",
    isLike: false,
    isBasket: false
  },
]



let elBody = document.querySelector("body")
let elBtnMode = document.querySelector(".modebtn")

elBtnMode.addEventListener("click", function(){
  elBody.classList.toggle("mode")
})

const elHero = document.querySelector(".hero")
const elSelect = document.querySelector(".hero__select")

let elModalwrap = document.querySelector(".modal-wrap")
let elModalCard = document.querySelector(".modal-card")

let elModaldemo = document.querySelector(".demo__modal")
let elModal = document.querySelector(".demo-modal")

let elcountryLike = document.querySelector(".like-count")
let elcountryBasket = document.querySelector(".basket-count")
let elInput = document.querySelector(".hero__input")
let elcountWrapper = document.querySelector(".twobtn")
let elcountBasket = document.querySelector(".twobtn-inner")

let elAdd = document.querySelector(".added")

const elList = document.createElement("ul")
elHero.appendChild(elList)
elList.classList.add("hero__list")



// --------------find country function and inner hmtml tag writing -------------------

function findCountry(array) {
  elList.innerHTML = ""
  array.map((item, index) =>{
    let elItem = document.createElement("li")
    elItem.classList.add("hero__item")
    elItem.innerHTML = `
    <img class="country__img" src=${item.img} alt="Countries flag img" width="327px" height="200px"><br>
    <b class="hero__btag">№: ${index + 1}</b>
    <h2 class="hero__item-title"> ${item.name}</h2>
    <p class="hero__item-text">Population: ${item.population}</p>
    <p class="hero__item-text">Region: ${item.region}</p>
    <p class="hero__item-text">Capital: ${item.capital}</p>
    
    <div class="hero__item-card">
    
    <div class="hero__item-wrap">
    <button onclick="likeBtn(${item.id})" class="hero__like">
    <svg class=${item.isLike ? "like" : "dislike"} id="Dark"  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
    </svg>
    </button>
    <button onclick="basketBtn(${item.id})" class="basket" id="${item.id}">
    <svg class=${item.isBasket ? "buy" : "nobuy"} id="Dark" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
    </button>
    <button onclick="moreBtnClick(${item.id})" id="${item.id}" class="more">More</button>
    </div>
    
    <div class="hero__item-box">
    <button onclick="updateClickBtn(${item.id})" class="pencil">
    <svg id="pencil" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
    </svg>
    </button>
    <button onclick="deleteClickBtn(${item.id})"  class="trash">
    <svg id="trash" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>
    </button>
    </div>
    
    </div>
    `
    elList.appendChild(elItem)
    
  })
}


// --------------find country function and inner hmtml tag writing end-------------------


// ---------------modal start-----------


function moreBtnClick(event) {
  elModaldemo.classList.add("open-modal")
  const data = countries.find(item => item.id == event)
  elModal.innerHTML = `
  <div class="modal-img">
  <img class="country__img modal__img" src=${data.img} alt="Countries flag img" width="400" height="200">
  </div>
  
  <div class="modal-demo">
  
  <button onclick="exitBtnClick(${data.id})" id="${data.id}" class="exit-btn">
  <svg id="Dark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  </svg>
  </button>
  
  <h2 class="hero__item-title"> ${data.name}</h2>
  <p class="hero__item-text">Population: <span class="hero__item-line">${data.population}</span></p>
  <p class="hero__item-text">Region: <span class="hero__item-line">${data.region}</span></p>
  <p class="hero__item-text">Capital: <span class="hero__item-line">${data.capital}</span></p>
  </div>
  `
}

elModaldemo.addEventListener("click", function(evt){
  if(evt.target.id == "demo__modal"){
    elModaldemo.classList.remove("open-modal")
  }
})


// -----------------exit btn------------

function exitBtnClick(evt){
  elModaldemo.classList.remove("open-modal")
}

// ---------------modal end-----------------


// --------------------select option created ------------------


function selectCountry(arr, selectTag) {
  arr.filter(item =>{
    let elOption = document.createElement("option")
    elOption.textContent = item.name;
    elOption.setAttribute("value", item.id)
    selectTag.appendChild(elOption)
  })
}
selectCountry(countries, elSelect)

// --------------------select option created end------------------


findCountry(countries)


// -----------select change------------------


elSelect.addEventListener("change", function(evt){
  const changeId =evt.target.value;
  if(changeId == 0){
    findCountry(countries)
  }
  else{
    const filterId = countries.filter(item => item.id == changeId)
    findCountry(filterId)
  }

  window.localStorage.setItem("countries", JSON.stringify(countries))

})


// -----------select change end -------------------


// -------------------like---------------


function likeBtn(id){
  countries.filter(item =>{
    if(item.id == id){
      item.isLike = !item.isLike
    }
  })
  const countFilter = countries.filter(item => item.isLike == true)
  elcountryLike.textContent = countFilter.length
  findCountry(countries)
  
  window.localStorage.setItem("countries", JSON.stringify(countries))
  elcountWrapper.addEventListener("click", function(){
    findCountry(countFilter)

  })
}


// -------------------basket---------------


function basketBtn(arr){
  countries.filter(item =>{
    if(item.id == arr){
      item.isBasket = !item.isBasket
    }
  })
  const countBasketfilter = countries.filter(item => item.isBasket == true)
  elcountryBasket.textContent = countBasketfilter.length
  findCountry(countries)
  
  elcountBasket.addEventListener("click", function(){
    findCountry(countBasketfilter)

    window.localStorage.setItem("countries", JSON.stringify(countries))

  })
}


// -------------search-----------

elInput.addEventListener("keyup", function(evt){
  const inputvalue = evt.target.value.trim();
  const data = countries.filter(item => item.name.toLowerCase().includes(inputvalue.toLowerCase()) || item.population.split(",").join("").includes(inputvalue) || item.region.toLowerCase().includes(inputvalue.toLowerCase()) || item.capital.toLowerCase().includes(inputvalue.toLowerCase()))
  findCountry(data)

})

// -------------------- Add --start---------------------

elAdd.addEventListener("click", function(evt){
  elModalwrap.classList.add("modal-open")
  elModalCard.innerHTML = `
  <form onsubmit="addclickBtn(${Event})" class="form">
  <label class="form-label">
    Enter country name: 
    <input type="text" class="form-input" required placeholder="Enter country name">
  </label>
  <label class="form-label">
    Population: 
    <input type="text" class="form-input" required placeholder="Enter country population">
  </label>
  <label class="form-label">
    Region: 
    <input type="text" class="form-input" required placeholder="Enter country region">
  </label>
  <label class="form-label">
    Capital: 
    <input type="text" class="form-input" required placeholder="Enter country capital">
  </label>
  <label class="form-label">
    Choose img: 
    <input type="text" class="form-input" required placeholder="Enter country image">
  </label>
  <button class="form-btn">Submit</button>
  </form>
  `
let elformAdd = document.querySelector(".form")
elformAdd.addEventListener("submit", function(evt){
  evt.preventDefault()
  const data = {
    id: countries[countries.length -1].id +1,
    img: evt.target[4].value,
    name: evt.target[0].value,
    population: evt.target[1].value,
    region: evt.target[2].value,
    capital: evt.target[3].value,
    isLike: false,
    isBasket: false,
  }
  countries.push(data)
  findCountry(countries)
  elModalwrap.classList.remove("modal-open")

window.localStorage.setItem("countries", JSON.stringify(countries))

})

})

// -------------------- Add --end---------------------

// ---------------All Modal exit--------------------

elModalwrap.addEventListener("click", function(evt){
  if(evt.target.id == "modal-wrap"){
    elModalwrap.classList.remove("modal-open")
  }
})

// -------------Update start--------------------

function updateClickBtn(id){
  elModalwrap.classList.add("modal-open")
  const result = countries.find(item => item.id == id)
  elModalCard.innerHTML = `
  <form class="update-form">
  <label class="form-label">
    Enter country name: 
    <input value=${result.name} type="text" class="form-input" required placeholder="Enter country name">
  </label>
  <label class="form-label">
    Population: 
    <input value=${result.population} type="text" class="form-input" required placeholder="Enter country population">
  </label>
  <label class="form-label">
    Region: 
    <input value=${result.region} type="text" class="form-input" required placeholder="Enter country region">
  </label>
  <label class="form-label">
    Capital: 
    <input value=${result.capital} type="text" class="form-input" required placeholder="Enter country capital">
  </label>
  <label class="form-label">
    Choose img: 
    <input value=${result.img} type="text" class="form-input" required placeholder="Enter country image">
  </label>
  <button class="form-btn">Submit</button>
  </form>
  `

  let updateCountry = document.querySelector(".update-form")
  updateCountry.addEventListener("submit", function(evt){
    evt.preventDefault()
    console.log(evt);
    result.img = evt.target[4].value
    result.name = evt.target[0].value
    result.population = evt.target[1].value
    result.region = evt.target[2].value
    result.capital = evt.target[3].value

    findCountry(countries)
  elModalwrap.classList.remove("modal-open")

window.localStorage.setItem("countries", JSON.stringify(countries))

  })

}

// -------------Update end--------------------


// ----------------Delete start ------------------

function deleteClickBtn(id){
  elModaldemo.classList.add("open-modal")
  elModal.innerHTML = `
    <div class="delete__card">
      <strong class="delete__bold">Are you sure you want to remove this country from the list of countries?</strong>
     <div class="delete__card-box">
       <button onclick="cancelClickbtn()" class="delete__cancel">Cancel</button>
       <button onclick="deleteClickbtn(${id})" class="delete__inner">Delete</button>
     </div>
    </div>
  `
}

function cancelClickbtn(){
  elModaldemo.classList.remove("open-modal")
}

function deleteClickbtn(id){
  elModaldemo.classList.add("open-modal")
  const res = countries.findIndex(item => item.id == id)
  countries.splice(res, 1)
  elModaldemo.classList.remove("open-modal")
  findCountry(countries)

window.localStorage.setItem("countries", JSON.stringify(countries))

}

// ----------------Delete end ------------------