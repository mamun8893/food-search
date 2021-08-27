const loadCountry = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => displayCountry(data));
};

loadCountry();

const displayCountry = (countryies) => {
    const countryList = document.getElementById("country-list");
    for (const country of countryies) {
        const div = document.createElement("div");
        div.classList.add("country-item");
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="countryDetails('${country.name}')">Details</button>
        `;
        countryList.appendChild(div);
    }
};

const countryDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
    const contryDetails = document.getElementById("country-details");
    console.log(country);
    contryDetails.innerHTML = `
     <h4> ${country.name} </h4>
     <p> ${country.population}</p>
     <img width="100px" src="${country.flag}"/>
     
    `;
};