const date = new Date();

const month = date.toLocaleString('default', { month: 'long' })


function todaydate() {
    let day = date.getDate();
    let currentDate = `${day}`;
    console.log('Todays date is ', currentDate);
}

function currentmonth() {
    console.log('Current month is ', month);
}

function getBatchInfo (){
  console.log('Plutonium, W3D5, the topic for today is NodeJs module system.')
}

module.exports.date = todaydate;
module.exports.month = currentmonth;
module.exports.batch = getBatchInfo;
