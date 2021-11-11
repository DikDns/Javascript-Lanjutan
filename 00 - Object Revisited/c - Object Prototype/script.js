/**
 *! Cara Membuat Object
 *  Object Literal
 *  Function Declaration
 *  Contructor Function
 *  Object.create()
 */
// Object Create();
// let humanMethods = {
//     sleep: function (time) {
//         this.stamina += time * 4;
//         return `Gain ${time * 4} stamina(s): ${this.stamina}`
//     },

//     play: function (time) {
//         this.stamina -= time * 2;
//         return `Lose ${time * 2} stamina(s): ${this.stamina}`
//     }
// };

// function human (name, stamina) {
//     let human = Object.create(humanMethods);
//     human.name = name;
//     human.stamina = stamina;
//     return human;
// };

// let dikdns = human('DikDns', 100);
















//! Versi Prototype Inheritance
// function Human (name, stamina) {
//     // //let human = Object.create(humanMethods);
//     //* let this = Object.create(Human.prototype);
//     this.name = name;
//     this.stamina = stamina;
//     //* return this;
// };

// Human.prototype.sleep = function (time) {
//     this.stamina += time * 4;
//     return `Gain ${time * 4} stamina(s): ${this.stamina}`
// };

// Human.prototype.play = function (time) {
//     this.stamina -= time * 2;
//     return `Lose ${time * 2} stamina(s): ${this.stamina}`
// }



// let dikdns = new Human('DikDns', 100);




//! Versi Class
class Human {
    constructor(name, stamina){
        this.name = name;
        this.stamina = stamina;
    }

    play(time) {
        this.stamina -= time * 2;
        return `Lose ${time * 2} stamina(s): ${this.stamina}`
    }

    sleep(time) {
        this.stamina += time * 4;
        return `Gain ${time * 4} stamina(s): ${this.stamina}`
    }
};



let dikdns = new Human('DikDns', 100);