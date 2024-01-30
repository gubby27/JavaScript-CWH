class user{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is to short.");
            return;
        }
        this._name = value;
    }
}

let ser = new user("Kailash");
console.log(ser.name);

ser.name = "Harry"
console.log(ser.name);