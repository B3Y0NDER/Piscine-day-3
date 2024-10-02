let country = [];
function createCity(country, cityName) {
for (let i = 0; i < country.length; i++) {
if (country[i][0] === cityName) {
console.log("City already exists.");
return;
}
}
country.push([cityName, []]);
}
function createHousing(country, cityName, housingName) {
for (let i = 0; i < country.length; i++) {
if (country[i][0] === cityName) {
let city = country[i];
for (let j = 0; j < city[1].length; j++) {
if (city[1][j][0] === housingName) {
console.log("Housing already exists.");
return;
}
}
city[1].push([housingName, []]);
return;
}
}
console.log("Failure to get city.");
return null;
}
function addCharacteristics(country, cityName, housingName, ...characteristics) {
for (let i = 0; i < country.length; i++) {
if (country[i][0] === cityName) {
let city = country[i];
for (let j = 0; j < city[1].length; j++) {
if (city[1][j][0] === housingName) {
city[1][j][1] = characteristics;
return;
}
console.log("Failure to get housing.");

}
}
console.log("Failure to get city.");
return null;
}
function getCharacteristicsOfHousing(country, cityName, housingName) {
for (let i = 0; i < country.length; i++) {
if (country[i][0] === cityName) {
let city = country[i];
for (let j = 0; j < city[1].length; j++) {
if (city[1][j][0] === housingName) {
return city[1][j][1];
}
}
console.log("Failure to get housing.");
return null;
}
}
console.log("Failure to get city.");
return null;
}
createCity(country, "Nantes");
createHousing(country, "Nantes", "Apartment1");
addCharacteristics(country, "Nantes", "Apartment1", "100 m2", "2 bathrooms", "Red paint", "14 rue Arthur III");
console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1"));
console.log(country);
//je ne trouve pas l'erreur de mon code
