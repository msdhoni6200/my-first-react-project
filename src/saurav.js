class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(this.name, this.age);
  }
}
const Saurav = new Student("Saurav", 18);
Saurav.greet();
