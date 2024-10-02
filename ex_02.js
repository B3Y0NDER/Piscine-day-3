let housingList = ("Flat", "House", "Hut", "House", "Igloo")
function findHousing(housingToFind, housingList){
for(let i = 0; i < housingList.lenght;i + 1){
if (housingList(i)===housingToFind)
return (i,housingList(i));
}
return null}
let result = findHousing("Igloo",housingList);
