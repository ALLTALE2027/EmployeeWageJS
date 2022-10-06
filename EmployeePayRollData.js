class EmployeePayroll {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
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
      this.salary
    );
  }
}

let employee = new EmployeePayroll(11, "Darshan", 1000000);
console.log(employee);

employee.name = "Bruce";
console.log(employee);
