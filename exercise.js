let bandInfo = document.querySelector("#bandInfo");

let ourClass = [
  { name: "Steve", city: "Chapel Hill" },
  { name: "Teddy", city: "Charlotte" },
  { name: "Q", city: "Raleigh" },
  { name: "Matt", city: "Raleigh" },
  { name: "Laura", city: "Pittsboro" },
  { name: "Alain", city: "Mebane" },
  { name: "Anna", city: "Saxapahaw" },
  { name: "Alex", city: "Cary" },
  { name: "Meagan", city: "Clayton" },
  { name: "Rebecca", city: "Durham" },
  { name: "Nutmeg", city: "Durham" },
  { name: "Rebecca", city: "Durham" },
  { name: "Ice Cube", city: "Compton" },
];

let citiesListed = [];
// create an empty array to keep track of the cities we have already added divs for

function findPeopleByCity(city, people) {
  /* takes a city and an array of people returns an array of the names of the people who live in the specified city
  example
  findPeopleByCity('Raleigh', ourClass)
  would return [ "Q", "Matt"]*/

  let peopleInCity = [];
  // creates an empty array
  for (let person of people) {
    // loops through the array of people
    if (person.city === city) {
      // if the person lives in the given city, add them to the array
      peopleInCity.push(person.name);
    }
  }
  // use return to generate output from a function, stored in memory, whereas console.log() only prints to the console and is not preserved
  return peopleInCity;
}

function createPeopleDiv(city, people) {
  /* takes one city and array of people,
builds a div for the city containing an H1 with the city name
and a div with p's for each person in that city. Returns that div for the city to be used in another function */
  let peopleDiv = document.createElement("div");
  // create an empty div
  let cityPeople = findPeopleByCity(city, people);
  // get an array of all the names of the people who live in that city
  for (let person of cityPeople) {
    // loop through the array of names
    let personEl = document.createElement("p");
    // create a p element
    personEl.innerText = person;
    // put the name of the person in the new p element
    peopleDiv.appendChild(personEl);
    // append the p with the name to the peopleDiv
  }
  return peopleDiv;
  // return peopleDiv containing a p element for each name
}

function createCityDiv(city, people) {
  /* takes a city and an array of people and returns a div 
    containing that city in the header and the people listed in p elements below */
  let cityDiv = document.createElement("div");
  // create a new div to hold one city and the corresponding names of people who live in it
  let cityEl = document.createElement("h1");
  // create an H1 element to hold the name of the city
  cityEl.innerText = `Band Members in ${city}:`;
  // update that city's inner text, including name of city
  cityDiv.appendChild(cityEl);
  // append this H1 to the div for the city
  let peopleDiv = createPeopleDiv(city, people);
  // call createPeopleDiv function to generate a div holding all the people who live in the city
  cityDiv.appendChild(peopleDiv);
  // append the peopleDiv to the cityDiv
  bandInfo.appendChild(cityDiv);
  // append that cityDiv containing city name and peopleto our empty bandInfo div on the page
}

function listPeopleInCities(people) {
  for (let member of people) {
    // loop through all of the people
    if (!citiesListed.includes(member.city)) {
      // checks if city has already been listed before listing it
      createCityDiv(member.city, ourClass);
      citiesListed.push(member.city);
      // add the city to the array citiesListed
    }
  }
}

listPeopleInCities(ourClass);
// activates the listPeopleInCities function for the array ourClass
