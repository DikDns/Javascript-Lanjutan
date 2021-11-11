/**
 *! Cara Membuat Object
 *  Object Literal
 *  Function Declaration
 *  Contructor Function
 *  Object.create()
 */

// Object literal
let orang = {
    nama: 'andika',

    energi: 100,

    buff: function (buffed) {
        this.energi = this.energi + buffed;
        return this.energi;
    },

    debuff: function (debuffed) {
        this.energi = this.energi - debuffed;
        return this.energi
    }
}



// Function Declaration
function Player (nama, energi){
    let player = {};

    player.nama = nama;
    player.energi = energi;

    player.buff = function (buffed) {
        this.energi += buffed;
        return this.energi;
    };

    player.debuff = function (debuffed) {
        this.energi -= debuffed;
        return this.energi;
    };

    return player;

};

let andika = Player('andika', 100);



// Contructor Function
function Pemain (nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.buff = function (buffed) {
        this.energi += buffed;
        return this.energi;
    };

    this.debuff = function (debuffed) {
        this.energi -= debuffed;
        return this.energi;
    };
};

let dicky = new Pemain('dicky', 100);