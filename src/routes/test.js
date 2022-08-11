// let arr = [ 1, 2, 4, 5, 6, 41, 9, 0, 7]
// function find(){
// for(i = 0 ; i< arr.length; i++){
//     if (arr[i] == 7){
//         return ("got it")
//     }
// }return ("didn't get it")
// }

// console.log(find(arr))


let arr = [1, 2, 3, 4, 5, 6,]
let arr2 = []
for(i = 0; i<arr.length; i++){
    if(arr[i] > 3){
        arr2.push(arr[i])
       
    }
} console.log(arr2)

router.post('/test', function (req, res) {
    let input = req.query.input
    let arr = [1, 5, 2, 7, , 6, 3, 6, 3, 65, 54]
    let filteredOut = arr.filter(num => num > input)
    res.send({ data: filteredOut, status: true })
})


router.post('/players/:playerName/booking/:bookingID', function (req, res) {
    let name = req.params.playerName
    let bID = req.params.bookingID
    let booking = req.body
    let playerPresent = false
    let bookingPresent = false
    for (i = 0; i < players.length; i++) {
        if (name == players[i].name) {
            playerPresent = true
            for (j = 0; j < bookingArr.length; j++) {
                if (bID == bookingArr[j].bookingID) {
                    bookingPresent = true
                }
            }
        }
    } if (playerPresent === true && bookingPresent === false) {
        booking.Name = name
        booking.bookingID = bID
        bookingArr.push(booking)
        res.send(bookingArr)
    } else if (bookingPresent === true && playerPresent === true) {
        res.send("booking already done")
    }
    else (res.send("no such person exist"))
})

router.post('/players/new1/:playerName/booking/:bookingID', function (req, res) {
    let name = req.params.playerName
    let bID = req.params.bookingID
    let booking = req.body
   
    
    let playerPresent = players.find(player => {
        return player.name == name 
    })
    if(!playerPresent ){
      res.send("no such person exist")
    } else{
        let bookingPresent = bookingArr.find(booking => {
            return booking.bookingID == bID
        })
        if(bookingPresent ){
            res.send("already done")
        }else{
            booking.Name = name
        booking.bookingID = bID
        bookingArr.push(booking)
        res.send(bookingArr)
        }
    }
})