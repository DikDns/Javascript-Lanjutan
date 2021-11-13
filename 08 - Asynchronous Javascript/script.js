// Asnychronous Js
// Single Threaded && Asnychronous && Non-blocking
// V8 Engine 
/*
    !Structure of Js 
    V8 Engine: Heap || Stack
        *\/
    Asnychronous Callbacks
    Web API: DOM || ajax || setTimeout()
        *\/
    Callback Queue: onclick || onLoad || $.get

    Event Loop: mengecek antrian di Callback Queue && mengembalikan ke dalam Stack 
    !(ketika Stack kosong)
*/

console.log(1);

setTimeout(() => {
    console.log(2);
}, 0)

console.log(3);