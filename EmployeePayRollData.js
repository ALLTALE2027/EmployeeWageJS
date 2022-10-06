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
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else
      throw "Check if name is valid i.e start with Capital and min 3 alphabets";
  }

  get id() {
    return this._id;
  }

  set id(id) {
    if (id > 0) {
      this._id = id;
    } else throw "Invalid ID , should be greater than zero";
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    if (salary > 0) {
      this._salary = salary;
    } else throw "Invalid salary , should be greater than zero";
  }

  get gender() {
    return this._gender;
  }

  set gender(gen) {
    if (gen == "M" || gen == "F") {
      this._gender = gen;
    } else throw "Gender should be M or F";
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(date) {
    if (date <= new Date()) {
      this._startstartDate = date;
    } else throw "Invalid date ,it should not be in future";
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

try {
  let employee = new EmployeePayroll(11, "Bruce", 1500000, "M", new Date());
  console.log(employee);

  //let employee2 = new EmployeePayroll(0, "Bruce", 1500000, "M", new Date());
  //console.log(employee2);

  let employee3 = new EmployeePayroll(
    1,
    "Deepika",
    1500000,
    "F",
    new Date("Oct 24, 2022")
  );
  console.log(employee3);
} catch (error) {
  console.log(error);
}
