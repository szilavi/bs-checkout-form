/*Bocsánat, amiért sokminden nagyon csúnyán van megcsinálva, időhiány miatt raktam bele a 2 array-be a Chose State elemeket, eredetileg
az lett volna a megoldás, hogy placeholdereket változtatok, illetve onlyread-re rakom, amíg a nem választ országot.
Ez még nem pontra megy, a projectben azért jobban figyelek ezekre, mert ott az fontosabb, itt csak a designe részt próbáltam visszaadni.

Ha ezt valaki olvassa és megkér rá, kiegészítem a JS részét, ha jelzi nekem. :)*/

const usaState = [
  "Chose State!",
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Federated States Of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const hunStates = [
  "Válassz megyét!",
  "Bacs-Kiskun",
  "Baranya",
  "Bekes",
  "Borsod-Abauj-Zemplen",
  "Csongrad",
  "Fejer",
  "Gyor-Moson-Sopron",
  "Hajdu-Bihar",
  "Heves",
  "Jasz-Nagykun-Szolnok",
  "Komarom-Esztergom",
  "Nograd",
  "Pest",
  "Somogy",
  "Szabolcs-Szatmar-Bereg",
  "Tolna",
  "Vas",
  "Veszprem",
  "Zala",
  "Bekescsaba",
  "Debrecen",
  "Dunaujvaros",
  "Eger",
  "Gyor",
  "Hodmezovasarhely",
  "Kaposvar",
  "Kecskemet",
  "Miskolc",
  "Nagykanizsa",
  "Nyiregyhaza",
  "Pecs",
  "Sopron",
  "Szeged",
  "Szekesfehervar",
  "Szolnok",
  "Szombathely",
  "Tatabanya",
  "Veszprem",
  "Zalaegerszeg",
];

const country = document.querySelector(".countrySelect");
const states = document.querySelector(".stateSelect");

country.addEventListener("change", showStates);

function showStates() {
  states.innerHTML = "";
  if (country.value === "2") {
    usaState.forEach((u) => {
      states.innerHTML += `<option value="${u}">${u}</option>`;
    });
  } else if (country.value === "3") {
    hunStates.forEach((h) => {
      states.innerHTML += `<option value="${h}">${h}</option>`;
    });
  } else {
    states.innerHTML += `<option value="">Choose...</option>`;
  }
}
