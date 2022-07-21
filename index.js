/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeArr){

    let employeeRecord = {

        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(records){
    let employeeRecords = records.map((arrayEmpl) =>  createEmployeeRecord(arrayEmpl));
 
     return employeeRecords
 }


 function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
 
    
 
    let timeInObject = {
     type: 'TimeIn',
     hour: parseInt(hour),
     date, 
    }
 
    this.timeInEvents.push(timeInObject)
 
    return this
    
 }
 
 function createTimeOutEvent( dateStamp){
 
    let [date, hour] = dateStamp.split(' ')
 
    let timeOutObject = {
     type: 'TimeOut',
     hour: parseInt(hour),
     date,
    }
 
    this.timeOutEvents.push(timeOutObject)
 
    return this
 }
 let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
 
 function hoursWorkedOnDate(date){
 
    let timeInDate = this.timeInEvents.find((e) => e.date === date)
    let timeOutDate = this.timeOutEvents.find((e) => e.date === date)
 
    let grossTime = (timeOutDate.hour - timeInDate.hour) / 100
    return grossTime 
 }
 
 function wagesEarnedOnDate(date){
 
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let payRate = this.payPerHour
 
    return parseInt(hoursWorked * payRate)
 }

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){

          return srcArray.find((e) => e.firstName === firstName)

        
}
 
 function calculatePayroll(employeeRecords){

    let allPayroll = employeeRecords.reduce(function(counter, employeeRecord){
       return counter + allWagesFor.call(employeeRecord)
 
    }, 0)
 
    return allPayroll
 
 }le





