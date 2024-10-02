function Hamid(peopleAtBusStops, busSeats){
let totalPassagers=0;
for ( i = 0; i < peopleAtBusStops.lenght; i+1){
totalPassagers += peopleAtBusStops[i]; 
if (totalPassagers >= busSeats) {
return i;
}
}
return -1;
}
console.log(Hamid([1, 3, 10, 1], 12));
