const adresses = [ ["45 avenue des tulipes", "92130 Issy-les-Moulineaux"],["95 avenue parmentier", "75011 Paris"],["24 Rue Pasteur", "92400 Courbevoie"],["Champ de Mars, 5 Av. Anatole France", "75007 Paris"],["Pl. Louis-Armand", "75571 Paris"]
];
function findAddresses(searchString) {
for (let i = 0; i < adresses.length; i++) {
const fullAddress = adresses[i].join(", ");//j'ai fait une faute sur adresse car sinon le code ne marchait pas puisqu'il a déja été défini
if (fullAddress.includes(searchString)) {
      console.log(fullAddress);
}
}
}
findAddresses("Paris");
