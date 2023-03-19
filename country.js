const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = (countries) => {
    // console.log(countries);
    const countryDiv = document.getElementById('show-countries');

    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
            <div class="card">
                <div class="text-center pt-1">
                    <img src="${country.flags.png}" class="card-img-top flag-img" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title fw-bold">Name: ${country?.name?.common}</h5>
                    <h6 class="">Capital: ${country?.capital}</h6>
                    <h6 class="">Region: ${country?.region}</h6>
                    <h6 class="">Population: ${country?.population}</h6>
                    <div class="text-center pt-2">
                        <button onclick="loadCountryDetails('${country?.name?.common}')" class="btn btn-outline-dark">Details</button>
                    </div>
                </div>
            </div>
        `

        countryDiv.appendChild(div);
    })
}

/* load details */
const loadCountryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    console.log(country);
    const detailsDiv = document.getElementById('country-details');
    detailsDiv.classList.add('card')
    detailsDiv.innerHTML = `
        <div class="card-body">
            <div class="text-center">
                <img src="${country?.flags?.png}" alt="">
            </div>
                <h5 class="card-title fw-bold pt-4">Name: ${country?.name?.common}</h5>
                <h6 class="">Capital: ${country?.capital}</h6>
                <h6 class="">Region: ${country?.region}</h6>
                <h6 class="">Population: ${country?.population}+ People</h6>
                <h6 class="">Area: ${country?.area} Square Meter </h6>
                <h6 class="">Time-zone: ${country?.timezones}</h6>
                <h6 class="fw-bold">Arms: <img class="arms-img" src="${country?.coatOfArms?.png}" alt=""></h6>   
        </div>
    `
}