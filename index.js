// Your code here
//create function called createEmployeeRecord
 function createEmployeeRecord (workerInfo) {
    //console.log(workerInfo)
    return {
        firstName: workerInfo[0],
        familyName: workerInfo[1],
        title: workerInfo[2],
        payPerHour: workerInfo[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    // return {
    //     firstName:`${workerInfo[0]}`,
    //     familyName:`${workerInfo[1]}`,
    //     title:`${workerInfo[2]}`,
    //     payPerHour:`${workerInfo[3]}`,
    //     timeInEvents:``,
    //     timeOutEvents:``
    // }
    //assign firstName as key from workerInfo[0]
//assign lastName as key from workerInfo[1]
//assign title from workerInfo[2]
//assign payPerHour from workerInfo[3]
//create timeInEvents and assign empty
//create timeOutEvents and assign empty
 }

 function createEmployeeRecords (workerS) {
    return workerS.map(employee => createEmployeeRecord(employee))
 }

 function createTimeInEvent (employee, timeIn) {

    let [date, hour] = timeIn.split(" ");
    //console.log("date:", date, "hour:", hour)
    //console.log("this", event)
    //console.log("event", event)
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    employee.timeInEvents.push(eventObj)
    return employee
    //employee.push(eventObj)
 }

 function createTimeOutEvent(employee, timeOut) {
    let [date, hour] = timeOut.split(" ");

    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    employee.timeOutEvents.push(eventObj)
    return employee
 }

 function hoursWorkedOnDate (employee, dateOfWork) {
    //console.log(employee, dateOfWork)
    //filter dateOfWork requested to timeInEvents and timeOutEvents of employee
    //let hourTimeIn = employee.filter(eachObj => eachObj.timeInEvents.date === dateOfWork)
    //let hourTimeOut = employee.filter(eachOvj => eachObj.timeInEvents.date === dateOfWork)
    const timeInToday = employee.timeInEvents.find(event => event.date === dateOfWork)
    const timeOutToday = employee.timeOutEvents.find(event => event.date === dateOfWork)

    return (timeOutToday.hour - timeInToday.hour)/100
 }

function wagesEarnedOnDate (employee, dateOfWork) {
    //console.log(employee, dateOfWork)
    // const timeInToday = this.timeInEvents.find(event => event.date === dateOfWork)
    // const timeOutToday = this.timeOutEvents.find(event => event.date === dateOfWork)

    //let earnedPay = employee.payPerHour * hoursWorkedOnDate(employee, dateOfWork)
    let hours = hoursWorkedOnDate(employee, dateOfWork)
    return (employee.payPerHour * hours)
}

function allWagesFor (employee) {
    //find all timeInEvents and timeOutEvents
    //allTimeIn = object.reduce
    //console.log(employee)
    //console.log("OVER HERE", allTimeStamp, employee)
    //console.log("OVER HERE",allTimeStamp)
    //const allPay = allTimeStamp.reduce(function() {}, 0)
    //for each date, find wagesEarnedOnDate and add them together
    // let interim = []
    // for (let item of allTimeStamp) {
        
    // }
    //const allDates = allTimeStamp.forEach(e => console.log(e.date))
    //console.log("What is this", typeof allDates)
    /////
    // const allTimeStamp = employee.timeInEvents.map((e) => e.date)
    // let wageS = 0
    // for (let event of allTimeStamp){
    //     wageS = wageS + wagesEarnedOnDate(employee, event)
    // }
    // return wageS
    /////
    const dateOf = employee.timeInEvents.map(event => wagesEarnedOnDate(employee, event.date))
    //console.log("Total Earned:", dateOf.reduce((total, amount) => total + amount))
    return dateOf.reduce((total, amount) => total + amount)
}

function calculatePayroll(employeeRecords) {
    //console.log(employeeRecords)
    const record = employeeRecords.map(employee => allWagesFor(employee))
    return record.reduce((currentValue, total) => currentValue + total)
}
