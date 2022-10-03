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
//---------UC2--------------------------------------
function CheckFullPartTime() {
  return Math.floor((Math.random() * 10) % 3);
}

empCheck = CheckFullPartTime();
const isPartTime = 2;
const wagePerHour = 20;
let empHrs;
let dailyWage;

switch (empCheck) {
  case isFullTime:
    empHrs = 8;
    dailyWage = wagePerHour * empHrs;

    console.log(
      "UC2- Employee is present for full time and his salary is: " + dailyWage
    );
    break;

  case isPartTime:
    empHrs = 4;
    dailyWage = wagePerHour * empHrs;

    console.log(
      "UC2- Employee is present for Part time and his salary is: " + dailyWage
    );
    break;

  default:
    empHrs = 0;
    dailyWage = wagePerHour * empHrs;
    console.log("UC2- Employee is absent and his salary is: " + dailyWage);
    break;
}

//-------------------------UC3--------------------

function GetEmpHrs() {
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
