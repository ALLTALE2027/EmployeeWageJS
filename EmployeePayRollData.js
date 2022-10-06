class EmployeePayroll {
  constructor(...employee) {
    this.id = employee[0];
    this.name = employee[1];
    this.salary = employee[2];
    this.gender = employee[3];
    this.startDate = employee[4];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    //name check using Regex
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else
      throw "Check if name is valid i.e start with Capital and min 3 alphabets";
  }

  toString() {
    return (
      "Employee Data " +
      "Id: " +
      this.id +
      " Name: " +
      this.name +
      " Salary: " +
      this.salary +
      " Gender: " +
      this.gender +
      " Joining Date: " +
      this.startDate
    );
  }
}

let employee = new EmployeePayroll(11, "Bruce", 1500000, "M", new Date());
console.log(employee);

try {
  employee.name = "darshan";
  console.log(employee);
} catch (error) {
  console.log(error);
}
