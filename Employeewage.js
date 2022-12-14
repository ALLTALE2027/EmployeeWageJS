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
let MapDailyWage = new Map();
let MapDailyHour = new Map();
let empDailyObjArray = [];

while (totalDays < WORKING_DAYS && totalWorkingHrs < WORKING_HRS) {
  let hours = GetEmpHrs();
  if (totalWorkingHrs >= WORKING_HRS) {
    totalWorkingHrs -= hours;
    break;
  }
  totalWorkingHrs += hours;
  totalDays++;
  dailyWage.push(hours * wagePerHour);
  MapDailyWage.set(totalDays, hours * wagePerHour);
  MapDailyHour.set(totalDays, hours);
  empDailyObjArray.push({
    day: totalDays,
    empHrs: hours,
    dailyWage: hours * wagePerHour,
    toString() {
      return (
        "\nDay:" +
        this.day +
        " Daily Hrs: " +
        this.empHrs +
        " Daily Wage: " +
        this.dailyWage
      );
    },
  });
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

console.log("UC8-A Map to store day wise wage: ", Array.from(MapDailyWage));

totalWage = 0;
for (const value of MapDailyWage.values()) {
  totalWage += value;
}

console.log("UC8-B Total wage using  Map: ", totalWage);

console.log("UC9-A Total wage using  Map: ", totalWage);

console.log("UC9-A  Total hours by Map");
for (let [key, value] of MapDailyHour) {
  console.log("Day: " + key + ", hour worked is: " + value);
}

let totalHours = (total, dailyHrs) => (total += dailyHrs);
console.log(
  "UC9-A Total hours using  Map: ",
  Array.from(MapDailyHour.values()).reduce(totalHours, 0)
);

console.log(
  "UC9-B Full workings days: ",
  Array.from(MapDailyHour)
    .filter((e) => e[1] == 8)
    .map((e) => e[0])
    .toString()
);
console.log(
  "UC9-B Part workings days: ",
  Array.from(MapDailyHour)
    .filter((e) => e[1] == 4)
    .map((e) => e[0])
    .toString()
);
process.stdout.write("UC9-B No workings days: ");
for (const [key, value] of MapDailyHour) {
  if (value == 0) process.stdout.write(key + ",");
}

console.log(
  "UC-10 Store day,hrs,wage in a object: ",
  empDailyObjArray.toString()
);

function getTotalEmpWageForObj(TotalWageByOj, Obj) {
  return (TotalWageByOj += Obj.dailyWage);
}

console.log(
  "\nUC11-A Total wage ",
  empDailyObjArray
    .filter((e) => e.dailyWage > 0)
    .reduce(getTotalEmpWageForObj, 0)
);
console.log(
  "UC11-A Total hours are ",
  empDailyObjArray
    .filter((e) => e.empHrs > 0)
    .reduce((TotalHoursByobj, obj) => (TotalHoursByobj += obj.empHrs), 0)
);
process.stdout.write("UC11-B full workings days are ");
empDailyObjArray
  .filter((e) => e.empHrs == 8)
  .forEach((e) => process.stdout.write(e.day.toString() + ", "));

function getWorkingDaysforObject(obj) {
  return obj.day;
}
console.log(
  "\nUC11-C part workings days are ",
  empDailyObjArray
    .filter((e) => e.empHrs == 4)
    .map(getWorkingDaysforObject)
    .toString()
);
console.log(
  "UC11-D No workings days are ",
  empDailyObjArray
    .filter((e) => e.empHrs == 0)
    .map(getWorkingDaysforObject)
    .toString()
);
