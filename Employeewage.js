function CheckPresentAbsent() {
  return Math.floor((Math.random() * 10) % 2);
}

//---------UC1--------------------------------------
let empCheck = CheckPresentAbsent();
const isFullTime = 1;
if (empCheck == isFullTime) {
  console.log("UC1- Employee is present");
} else {
  console.log("UC1- Employee is Absent");
}

//-------------------------UC3--------------------
//UC2 code removed after refactoring code

function CheckFullPartTime() {
  return Math.floor((Math.random() * 10) % 3);
}

const isPartTime = 2;
const wagePerHour = 20;
let empHrs;

function GetEmpHrs() {
  empCheck = CheckFullPartTime();
  switch (empCheck) {
    case isFullTime:
      empHrs = 8;
      break;
    case isPartTime:
      empHrs = 4;
      break;
    default:
      empHrs = 0;
      break;
  }
  return empHrs;
}

//-------------------------UC4--------------------

let totalWage = 0;
for (let i = 1; i <= 20; i++) {
  totalWage += GetEmpHrs() * wagePerHour;
}

console.log(`UC4- Total wage for month asuming 20 days: ${totalWage}`);

//-------------------------UC5--------------------------------------------------
const WORKING_DAYS = 20;
const WORKING_HRS = 160;
let totalDays = 0;
let totalWorkingHrs = 0;
let dailyWage = [];

while (totalDays < WORKING_DAYS && totalWorkingHrs < WORKING_HRS) {
  let hours = GetEmpHrs();
  if (totalWorkingHrs >= WORKING_HRS) {
    totalWorkingHrs -= hours;
    break;
  }
  totalWorkingHrs += hours;
  totalDays++;
  dailyWage.push(hours * wagePerHour);
}
totalWage = totalWorkingHrs * wagePerHour;
console.log(
  `UC5- Total working days: ${totalDays}, Total working hours: ${totalWorkingHrs} and total wage= ${totalWage}`
);

console.log("UC-6 Daily wage array: ", dailyWage.toString());
