//! Asynchronous Function
/*
    - Fungsi yang berjalan secara Asynchronous
    - Menghasilkan (implisit) promise
    - Carapenulisannya sama seperti synchronous function (function biasa)
*/
/*
    await : memberhentikan sementara eksekusi fungsinya sambil menunggu promise selesai
*/

//// const coba = new Promise(resolve => {
////     setTimeout(() => resolve('selesai'), 2000);
//// });
//// console.log(coba);
//// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000){
            setTimeout(() => resolve('selesai'), waktu);
        } else {
            reject('Kelamaan Bambank!');
        }
    });
}

async function cobaAsync() {
    // try: sama kek then() nerima fulfilled promise
    try {
        // sebelum di eksekusi tunggu dulu functionnya
        const coba = await cobaPromise();
        console.log(coba);
    } 
    // catch: sama kek catch() ketika di reject
    catch (error) {
        console.error(error);
    }
}

cobaAsync();