

const countries = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin",
      isLike: true,
      isBasket: true
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
      name: "Spain",
      population: "47,370,000",
      region: "Europe",
      capital: "Madrid",
      isLike: true,
      isBasket: true
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      capital: "Brasília",
      isLike: true,
      isBasket: true
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
      isLike: true,
      isBasket: true
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

  const elList = document.createElement("ul")
  elHero.appendChild(elList)
  elList.classList.add("hero__list")



// --------------find country function and inner hmtml tag writing -------------------

  function findCountry(array) {
    elList.innerHTML = ""
    const sortARR = array.sort((a, b) => a.name < b.name ? -1 : 1)
    sortARR.map(item =>{
      let elItem = document.createElement("li")
      elItem.classList.add("hero__item")
      elItem.innerHTML = `
      <img class="country__img" src=${item.img} alt="Countries flag img" width="250px" height="200px"><br>
      <b class="hero__btag">${item.id}</b>
      <h2 class="hero__item-title"> ${item.name}</h2>
      <p class="hero__item-text">Population: ${item.population}</p>
      <p class="hero__item-text">Region: ${item.region}</p>
      <p class="hero__item-text">Capital: ${item.capital}</p>
      
      <div class="hero__item-wrap">
      <button class="hero__like id="${item.id}">
        <svg class="${item.isLike ? "like" : "dislike"}"" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
      </button>
      <button class="basket" id="${item.id}">
        <svg class="${item.isBasket ? "buy" : "noBuy"}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg>
      </button>
      <button onclick="moreBtnClick(${item.id})" id="${item.id}" class="more">More</button>
      </div>
      `
    elList.appendChild(elItem)

    })
  }


// --------------find country function and inner hmtml tag writing end-------------------

 
  // ---------------modal start-----------


  function moreBtnClick(event) {
    elModalwrap.classList.add("modal-open")
    const data = countries.find(item => item.id == event)
    elModalCard.innerHTML = `
      <div class="modal-img">
       <img class="country__img modal__img" src=${data.img} alt="Countries flag img" width="400" height="200">
      </div>

      <div class="modal-demo">
       <h2 class="hero__item-title"> ${data.name}</h2>
       <p class="hero__item-text">Population: <span class="hero__item-line">${data.population}</span></p>
       <p class="hero__item-text">Region: <span class="hero__item-line">${data.region}</span></p>
       <p class="hero__item-text">Capital: <span class="hero__item-line">${data.capital}</span></p>
      </div>

      `
  }

  elModalwrap.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrap"){
      elModalwrap.classList.remove("modal-open")
    }
  })

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
  })


  // -----------select change end -------------------


  // -------------------like---------------

  let elcountryLike = document.querySelector(".like-count")

  function findCountryLike(arr){
    const data = arr.filter(item => item.isLike == true)
    elcountryLike.textContent = data.length
  }
  findCountryLike(countries)


  // -------------------basket---------------

  let elcountryBasket = document.querySelector(".basket-count")

  function findCountryBasket(arr){
    const result = arr.filter(item => item.isBasket == true)
    elcountryBasket.textContent = result.length
  }
  findCountryBasket(countries)

