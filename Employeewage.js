function CheckPresentAbsent() {
  return Math.floor((Math.random() * 10) % 2);
}

//---------UC1--------------------------------------
let empCheck = CheckPresentAbsent();
const isFullTime = 1;
if (empCheck == isFullTime) {
  console.log("Employee is present");
} else {
  console.log("Employee is Absent");
}
