// /* Your Code Here */
function createEmployeeRecord([str1, str2, str3, num]){

    let obj = {
        firstName : str1,
        familyName : str2,
        title: str3,
        payPerHour : num,
        timeInEvents: [],
        timeOutEvents: []
    }

    return obj;
} 


 function createEmployeeRecords(arrayOfArrays){         //Go Over Logic of this function

    let newArr = [];
        for(const array of arrayOfArrays){
            newArr.push(createEmployeeRecord(array))
        }
        return newArr;
 }


 function createTimeInEvent(dateStamp){

    const d = dateStamp.split(' ');                 //must put space between quotes

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(d[1]),
        date: d[0]
    })

    return this;
}


function createTimeOutEvent(dateStamp){

    const d = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(d[1]),
        date: d[0]
    })
    return this;
}

function hoursWorkedOnDate(dateStamp){

    let timeIn = this.timeInEvents.find(r =>{
        return r.date === dateStamp;
    })

    let timeOut = this.timeOutEvents.find(r => {
        return r.date === dateStamp;
    })

    const result = timeOut.hour - timeIn.hour;
    return result/ 100;

}

function wagesEarnedOnDate(dateStamp){

    let hoursworked = hoursWorkedOnDate.call(this, dateStamp);
    let pay = this.payPerHour;

    return (hoursworked * pay);
}


function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(r => r.firstName === firstName)

}

function calculatePayroll(employeeRecordArr){

    let pay = employeeRecordArr.reduce((acc, employeeRecord) => {
        return acc + allWagesFor.call(employeeRecord)
    }, 0)

    return pay;

}



// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
}
















