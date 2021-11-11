// Conditionals, Looping, Nested
const listPlayer = [{
    name: 'DikDns',
    class: 'human',
    health: 70,
    playHour: 22,
    online: false
}, {
    name: 'Doobwuz',
    class: 'robot',
    health: 50,
    playHour: 2,
    online: true
}, {
    name: 'Aidenzy',
    class: 'elf',
    health: 250,
    playHour: 12,
    online: true
}
];

function lastActive(time) {
    if(time < 24){
        return `${24 - time} hour(s) ago`;
    } else if (time >= 24){
        return `${time / 24} day(s) ago`;
    } else {
        return `Not seen in a month...`
    };
};

const element = `<div class="players">
    <h2 class="title">Online Player List</h2>
    <ul class="list">
        ${listPlayer.map((x) => x.online ? `
            <li class="item">
                <h3>${x.name}</h3>
                <p>Health: ${x.health}</p>
                <p>Play Time: ${x.playHour} hour(s)</p>
            </li>` : ''
        ).join('')}
    </ul>

    <h2 class="title">Offline Player List</h2>
    <ul class="list">
        ${listPlayer.map((x) => !x.online ? `
            <li class="item">
                <h3>${x.name}</h3>
                <p>Last Health: ${x.health}</p>
                <p>Last Active: ${lastActive(x.playHour)}</p>
            </li>` : ''
        ).join('')}
    </ul>
</div>`

document.querySelector('body').innerHTML = element;