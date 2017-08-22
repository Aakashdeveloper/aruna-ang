function Animal(name,numlegs){
    this.name=name;
    this.numlegs=numlegs;
    this.isAlive=true;
}

function duck(name){
    this.name=name;
    this.numlegs=2;
}

function donald(name){
    this.name=name;
    this.say="hiiii";
}
duck.prototype = new Animal();
donald.prototype = new duck();


var trump = new donald("usa");