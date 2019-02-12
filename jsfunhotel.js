var hotelName = "JavaScript Hotel";

var roomTypes = ["Twin", "Single", "Double", "Queen", "King"];

var roomPrices = [75, 85, 100, 125, 200];

var availableRoomNumbers = [[101, 102, 103, 104],[201, 203],[301, 302, 303, 304],[401, 402, 403, 404],[501, 502]];

var bookedRooms = [[],[],[],[],[]];

function availableRoomsQty() {
    var totalAvailableRoomsQty = 0;
    
    for (var i = 0; i < availableRoomNumbers.length; i++){
        totalAvailableRoomsQty += availableRoomNumbers[i].length;    
    }
    return totalAvailableRoomsQty;
}
function totalAvailableRoomsReport(){
    console.log("Total Available Room Count:", availableRoomsQty());
}
// console.log("Total Available Room Count:", totalAvailableRoomQty);


function bookTwin(){
    bookedRooms[0].push(availableRoomNumbers[0].pop());
    
}
function bookSingle(){
    bookedRooms[1].push(availableRoomNumbers[1].pop());
    
}
function bookDouble(){
    bookedRooms[2].push(availableRoomNumbers[2].pop());
    
}
function bookQueen(){
    bookedRooms[3].push(availableRoomNumbers[3].pop());
    
}
function bookKing(){
    bookedRooms[4].push(availableRoomNumbers[4].pop());
    
}

function salesReport(){
    var totalSales = 0;
    
    for (var i =0; i < bookedRooms.length; i++) {
       totalSales += bookedRooms[i].length * roomPrices[i]

    }
 return totalSales;
    
}