// for (i = 0; i < players.length; i++) {
//     if (playerName !== players[i].name ) {
//         res.send('Something relevant about player not being found.')
//     }
    
    // if (playerName == players[i].name && players[i].bookedId == 1) {
    //     res.send('The booking was already processed.')
    //     break;
    // } else {
    //     players[i].bookedId = bookingId
    //     console.log(players[i].bookedId)
    //     players[i].bookingDetails = booking
    //     // let data = players[i].bookingInfo;
    //     res.send("ok")
    // }
//}
    // players[i].bookingDetails = booking;
    // players[i].bookingDetails.bookingId = bookingId;
    // res.send("ok")

// })


// for(i = 0; i < players.length ; i++){
//     if(playerName !== players[i].name ){
//         res.send("no such person exists")
//     }
    // if(players[i].booking == bookingDetails){
    //     res.send("already booked")
    // }
// }
// res.send({data : bookingDetails})

let arr = [{ name : "sonal" , age : 1}, {name : "sonal" , age : 2}, { name : "sonal" ,age : 3},{ name : "sonal" ,age : 4},{ name : "sonal" , age : 5}]
 arr.map(a => a.age = 2)
console.log(arr)