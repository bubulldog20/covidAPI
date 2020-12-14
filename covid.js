let url = 'https://api.covid19api.com/summary';
// let earth = document.querySelector('div');
// earth.setAttribute('class', 'earth');
let topSection = document.querySelectorAll('h3');
let section = document.querySelector('section'); 
section.setAttribute('class', 'section') ;



fetch(url)
  .then(function(result){
    console.log('results:' + result)
    return result.json()
  })
  .then(function(json) {
    displayResults(json);
})
 function displayResults(json){
    let data = json;

    let first = data.Global.NewConfirmed;
    topSection[0].textContent += first;

    let second = data.Global.TotalConfirmed;
    topSection[1].textContent += second;

    let third = data.Global.NewDeaths;
    topSection[2].textContent += third;

    let fourth = data.Global.TotalDeaths;
    topSection[3].textContent += fourth;

    let fifth = data.Global.NewRecovered;
    topSection[4].textContent += fifth;

    let sixth = data.Global.TotalRecovered;
    topSection[5].textContent += sixth;


    let countries = data.Countries;
    //console.log(countries[0].Country);
  
    countries.forEach(function(countryName){
        let names = document.getElementById('country');
        let printName = document.createElement('div');
        printName.setAttribute('class', 'cNameTag');
        printName.textContent = countryName.Country;
        names.appendChild(printName);
    });

    countries.forEach(function(totalConfirmed){
        let confirmed = document.getElementById('confirmed');
        let printConfirmed = document.createElement('div');
        printConfirmed.setAttribute('class', 'cTotConfirmed');
        printConfirmed.textContent = totalConfirmed.TotalConfirmed;
        confirmed.appendChild(printConfirmed);
    });

    countries.forEach(function(totalDeaths){
        let deaths = document.getElementById('deaths');
        let printDeaths = document.createElement('div');
        printDeaths.setAttribute('class', 'cTotDeaths');
        printDeaths.textContent = totalDeaths.TotalDeaths;
        deaths.appendChild(printDeaths);
  });
    countries.forEach(function(totalRecovered){
        let recovered = document.getElementById('recovered');
        let printRecovered = document.createElement('div');
        printRecovered.setAttribute('class', 'cTotRecovered');
        printRecovered.textContent = totalRecovered.TotalRecovered;
        recovered.appendChild(printRecovered);
});

}
