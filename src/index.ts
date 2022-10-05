const a: string = "I Love Typescript";
 console.log('aaa', a);


//functions in typescript
 const getFullName = (name: string, surname: string): string => {
      return `My Name is ${name} ${surname}`;
 };
 console.log(getFullName('Mehila', 'Typescript'));

 // Interfaces
 interface UserInterface {
      names: string,
      ages?: number,
      getMessage(): string
 };
 const user: UserInterface = {
      names: 'Monster',
      ages: 30,
      getMessage() {
           return `Hello ${this.names}`;
      },
 };
 const user2: UserInterface = {
      names: 'Jack',
     getMessage() {
           return `Hello ${this.names}`;
      },
 };

// Union Operator
 let username: string = "Alex";
 let pageNumber: string | number = "1";

 //Test typescript
 const clickFunc = () => {
      let btn = document.querySelector("#my-btn") as HTMLButtonElement;

      btn.addEventListener('click', () => {
           alert("I am a Boy");
      });
 }
clickFunc();



 export {};

