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
//UC2 code removwed after refactoring code

function CheckFullPartTime() {
  return Math.floor((Math.random() * 10) % 3);
}

const isPartTime = 2;
const wagePerHour = 20;
let empHrs;
let dailyWage;

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

console.log(`Total wage for month asuming 20 days: ${totalWage}`);
