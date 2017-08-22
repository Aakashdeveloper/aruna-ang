function Dog(bredd){
    this.breed= breed;
};

Dog.prototype.bark=function(){
    console.log("hhhhhh")
}

var buddy = new Dog("pug");
/*buddy.bark= function(){
    console.log("hhhhhhhhhhhhh");

}*/

var snoppy = new Dog("lab");
/*snoppy.bark= function(){
    console.log("hhhhhhhhhhhhh");
    
}*/

