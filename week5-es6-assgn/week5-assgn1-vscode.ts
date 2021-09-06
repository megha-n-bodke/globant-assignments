class Person {
   
    constructor( name, gender) {
            this.name = name;
            this.gender= gender;
      }
       display()
     {
          console.log("in class ");
     }
 }
 
  const p = new Person("Megha","female");
  p.display();
  console.log(p.name);
 
 