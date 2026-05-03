//Q1

let DATA = "My secret data";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Data =", DATA);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "Data Changed";
  }
}

let stud1 = new User("Meeta", "meeta@gmail.com");

let stud2 = new User("veeta", "veta@gmail.com");

let admin1 = new Admin("veeta", "veta@gmail.com");
