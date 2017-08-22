var bob = new Object();
bob.age = 10;
bob.setage = function(newage){
    bob.age = newage
}

var tony = new Object();
tony.age = 10;
tony.setage = function(newage){
    tony.age = newage
}

var setAge = function(newAge){
    this.age = newAge
}

var harry = new Object();
harry.age =10;
harry.setage = setAge;

var sajal = new Object();
sajal.age = 25;
sajal.setage= setAge;


function animal(age,color){
    this.age = age;
    this.color= color;
}

var dog = new animal(11,"black")
var cat = new animal(12,"white")


var library = [ 
   { name: 'Bill Gates', gender: 'female', age: 24},
   { name: 'Steve Jobs', gender: 'male', age: 33},
   { name: 'Suzanne Collins', gender: 'male', age: 34},
   { name: 'Suzanne', gender: 'male', age: 35},
   { name: 'khan', gender: 'male', age: 45}];
   
   for(var i=0;i<library.length;i++){
   
   if(library[i].gender =='male' && library[i].age >= 30  && library[i].age < 40 ){
   console.log(library[i].name);
   }}