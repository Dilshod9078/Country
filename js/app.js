

const countries = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
      name: "Spain",
      population: "47,370,000",
      region: "Europe",
      capital: "Madrid"
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      capital: "Brasília"
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      capital: "Reykjavík"
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
      name: "Afghanistan",
      population: "27,657,145",
      region: "Asia",
      capital: "Kabul"
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
      name: "Uzbekistan",
      population: "35,482,369",
      region: "Asia",
      capital: "Tashkent"
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
      name: "Albania",
      population: "2,886,026",
      region: "Europe",
      capital: "Tirana"
    },
    {
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
      name: "Algeria",
      population: "40,400,000",
      region: "Africa",
      capital: "Algiers"
    },
  ]
  
  let elBody = document.querySelector("body")
  let elBtnMode = document.querySelector(".modebtn")

  elBtnMode.addEventListener("click", function(){
   elBody.classList.toggle("mode")
  })

  let elhero = document.querySelector(".hero")
  let elDiv = document.createElement("div")
  elhero.append(elDiv)
  elDiv.classList.add("hero__wrapper")

  function findCountry(arr) {
    arr.map(item => {

      let elDIvcard = document.createElement("div")
      elDiv.append(elDIvcard)
      elDIvcard.classList.add("hero___wrapper-card")

      let elImg = document.createElement("img")
      elDIvcard.appendChild(elImg)
      elImg.classList.add("country-img")
      elImg.src = item.img
      
      let elTitle = document.createElement("h3")
      elDIvcard.appendChild(elTitle)
      elTitle.classList.add("hero__title")
      elTitle.textContent = item.name

      let elDivinner = document.createElement("div")
      elDIvcard.appendChild(elDivinner)
      elDivinner.classList.add("hero__demo")
     
      
      let elText1 = document.createElement("p")
      elDivinner.appendChild(elText1)
      elText1.classList.add("hero__text1")
      elText1.textContent = "Population: "

      let elSpan1 = document.createElement("span")
      elText1.appendChild(elSpan1)
      elSpan1.classList.add("hero__line")
      elSpan1.textContent = item.population

      let elText2 = document.createElement("p")
      elDivinner.appendChild(elText2)
      elText2.classList.add("hero__text1")
      elText2.textContent = "Region: "

      let elSpan2 = document.createElement("span")
      elText2.appendChild(elSpan2)
      elSpan2.classList.add("hero__line")
      elSpan2.textContent = item.region

      let elText3 = document.createElement("p")
      elDivinner.appendChild(elText3)
      elText3.classList.add("hero__text1")
      elText3.textContent = "Capital: "

      let elSpan3 = document.createElement("span")
      elText3.appendChild(elSpan3)
      elSpan3.classList.add("hero__line")
      elSpan3.textContent = item.capital
    })
  }
  findCountry(countries)