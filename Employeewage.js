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

totalWage = 0;
function wageSum(element) {
  totalWage += element;
}
dailyWage.forEach(wageSum);
console.log("UC7-A total wage using for each: ", totalWage);

function totalWageReduce(totalWage, dailywage) {
  return totalWage + dailywage;
}

console.log(
  "UC7-A total wage using reduce: ",
  dailyWage.reduce(totalWageReduce, 0)
);

let day = 0;
function DailyWageMap(wage) {
  day++;
  return "day " + day + ":" + wage;
}

let WageMap = dailyWage.map(DailyWageMap);

console.log("UC7-B Day along with Daily Wage: ", WageMap);
function DailyWage160(wage) {
  return wage.includes("160");
}
console.log(
  "UC7-C Full time wage of 160 were earned using filter function: ",
  WageMap.filter(DailyWage160)
);

console.log(
  "UC7-D First occurrence when Full Time Wage was earned: ",
  WageMap.find((e) => e.includes("160"))
);

if (dailyWage.find((wage) => wage == 80))
  console.log("UC7 -F : Part time wage exists");
else {
  console.log("UC7-F : Part time wage does not exists");
}

let workingdays = 0;
function GetTotalWorkingdays() {
  ++workingdays;
}
dailyWage.filter((wage) => wage > 0).forEach(GetTotalWorkingdays);
console.log("UC7-G Total number of working days= ", workingdays);
