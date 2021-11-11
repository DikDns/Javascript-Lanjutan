// Ambil semua elemen video
const latestVidData = document.querySelectorAll('li[data-duration]');


// Constructor Function
// function VideoData(title, duration, playlist) {
//     this.title = title,
//     this.duration = duration,
//     this.playlist = playlist
// };


// Pilih hanya yang Dikz Survive
const dikzSurviveData = [];
for (let i = 0; i < latestVidData.length; i++){
    if(latestVidData[i].innerHTML.indexOf('Dikz Survive') > -1) {
        dikzSurviveData.push(latestVidData[i]);
    }
};


// Ambil durasi masing-masing video
const dikzSurviveDataDuration = [];
// const dikzSurviveDataDuration = dikzSurviveData.filter(x => x.getAttribute('data-duration'));

for (let i = 0; i < dikzSurviveData.length; i++){
    dikzSurviveDataDuration.push(dikzSurviveData[i].getAttribute('data-duration'));
};



// Select durasi yang menit
const durationMinutes = dikzSurviveDataDuration.map(x => x[0] + x[1]);
// Select durasi yang detik
const durationSeconds = dikzSurviveDataDuration.map(x => x[3] + x[4]);



// Ubah durasi menjadi integer, ubah menit menjadi detik
const durationA = durationMinutes.map(x => parseInt(x) * 60);
const durationB = durationSeconds.map(x => parseInt(x));



// Jumlahkan semua detiknya
const duration = durationA.reduce((a, b) => a + b) + durationB.reduce((a, b) => a + b);



// Ubah format detik menjadi jam, menit, detik
const hour = parseInt(duration / 3600);
const minute = parseInt((duration - 3600) / 60);
const second = parseInt((duration - 3600) - minute * 60);



// Output di span menggunakan DOM
document.querySelector('.jumlah-video').innerHTML = `${dikzSurviveData.length} video.`;
document.querySelector('.total-durasi').innerHTML = `${hour} jam ${minute} menit ${second} detik.`;