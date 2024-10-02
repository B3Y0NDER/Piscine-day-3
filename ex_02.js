let housingList = ("Flat", "House", "Hut", "House", "Igloo", "flat","FLAT","HOUSE","hut","HUT","house","IGLOO","igloo")
function findHousing(housingToFind, housingList){
for(let i = 0; i < housingList.lenght;i + 1){
if (housingList[i].toLowerCase() === housingToFind.toLowerCase()){
 return [i, housingList[i]];
}
return null
}
let result = findHousing("Igloo",housingList);
}
