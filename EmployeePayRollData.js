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
    this._name = name;
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

let employee = new EmployeePayroll(11, "Darshan", 1000000);
console.log(employee);

let employee2 = new EmployeePayroll(11, "Bruce", 1500000, "M", new Date());
console.log(employee2.toString());
