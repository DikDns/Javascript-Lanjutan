const player = {
    name: 'DikDns',
    health: 100,
    id: 1012020,
    class: 'human'
}

const element = `<div class="player">
    <h2>${player.name}</h2>
    <span class="heath">Health: ${player.health}</span>
    <br>
    <span class="class">Class: ${player.class}</span>
    <br>
    <span class="id">Id: ${player.id}</span>
</div>`;

document.querySelector('body').innerHTML = element;