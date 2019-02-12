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