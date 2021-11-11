const box = document.querySelector('.box');


box.addEventListener('click', function(){
    let one = 'size';
    let two = 'caption'

    if(this.classList.contains(one)){
        // temp = one;
        // one = two;
        // two = temp;
        [one, two] = [two, one];
    }

    this.classList.toggle(one);

    setTimeout(() => {
        console.log(this);
        this.classList.toggle(two);
    }, 600)

    console.log(`1: ${one} 2: ${two}`)
});