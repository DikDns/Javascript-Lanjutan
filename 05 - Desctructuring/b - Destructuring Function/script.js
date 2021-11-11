// calculate with object properti to make it unorder variables index
const calculate = (a, b) => ({sum: a+b, subtract: a-b, times: a*b, divide: a/b});
const {divide, sum, times, subtract} = calculate(2,4);


// Destructuring Function Arguments
function Player (id, name, health, online, sword, shield, medicine) {
    this.id = id,
    this.name = name,
    this.health = health,
    this.online = online,
    this.equipment = {
        sword: sword,
        shield: shield,
        medicine: medicine
    }
};

const dikdns = new Player(100101, 'DikDns', 100, true, false, true, false);

const outputPlayer = ({id, name, health, online, equipment: {sword, shield, medicine}}) => {
    return `Player number: ${id}, ${name} with ${health} health left. 
${online ? `Ready to deploy as ${medicine ? `a support!` : `${shield ? `a tanker!` : `${shield ? `an attacker!` : ``}`}`}
` : `Not ready to deploy!`}`
};

console.log(outputPlayer(dikdns));