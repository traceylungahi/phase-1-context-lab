/* Your Code Here */
const createEmployeeRecord = function(rows) {
    return{
        firstName: rows[0],
        familyName: rows[1],
        title: rows[2],
        payPerHour: rows[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(rowsData) {
    return rowsData.map(function(rows) {
        return createEmployeeRecord(rows)
    })
}

const createTimeInEvent = function(dateCode) {
    let [date, hour] = dateCode.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

const createTimeOutEvent = function(dateCode) {
    let [date, hour] = dateCode.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

const hoursWorkedOnDate = function(findDate) {
    let InTime = this.timeInEvents.find(function(event){
        return event.date === findDate
    })
    let outTime = this.timeOutEvents.find(function(event){
        return event.date === findDate
    })
    return (outTime.hour - InTime.hour) / 100
}

const wagesEarnedOnDate = function(dateFind) {
    let wages = hoursWorkedOnDate.call(this, dateFind)
        *this.payPerHour
    return parseFloat(wages.toString())    
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(show){
        return show.firstName === firstName
    })
}

let calculatePayroll = function(employeeRecordsArray) {
    return employeeRecordsArray.reduce(function(all, show){
        return all + allWagesFor.call(show)
    }, 0)
}
/*

 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

