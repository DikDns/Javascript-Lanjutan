const nama = "Andika";
const umur = 16;
const twitter = "@dik_dns"

function coba(strings, ...value) {
    return strings.reduce((result, str, index) => `${result}${str}<span class="hl">${value[index] || ''}</span>`, '');
};

const str = coba`Halo, nama saya ${nama}. Saya ${umur} tahun dan twitter saya : ${twitter}`;

console.log(str);
document.querySelector('body').innerHTML = str;