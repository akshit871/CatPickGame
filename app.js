// document.querySelector('.cat-table').firstElementChild.firstElementChild.firstElementChild.firstChild
class Game {

    constructor(counter, imgSet, catArray) {
        this.counter = counter;
        this.imgSet = imgSet;
        this.catArray = catArray;
        this.result = "win";

    }

    setIndexImagesCat() {
        this.catArray.forEach((img, index) => {
            img.setAttribute('uIndex', index + 1);
        })
    }

    check_setIndexImages() {
        this.imgSet.forEach((img, i) => {

            if (img.getAttribute('uIndex') == i) {
                console.log(`got ${i}th image`);
            }
        })
    }

    playGame() {
        let tmp = [];
        this.imgSet.forEach((img, index) => {

            img.addEventListener('click', (e) => {
                let cur_img_uid = e.target.getAttribute('uIndex');

                tmp.push(cur_img_uid);


                if (this.counter % 4 == 0 && this.result === "win") {
                    this.result = "win";
                    let flag;
                    console.log(tmp);
                    tmp.forEach((uid) => {
                        if (flag == null) {
                            flag = uid;
                        }
                        else {
                            if (flag == uid) {
                                this.result = "loose";
                            } else {
                                flag = uid;
                            }
                        }
                    })
                    tmp = [];
                }



                let img_new = document.createElement('img');
                img_new.src = `./Cats_images/cat_${cur_img_uid}.png`;
                img_new.setAttribute('uIndex', cur_img_uid);
                document.querySelector(`.c${this.counter}`).appendChild(
                    img_new
                )

                this.counter++;
                if (this.counter === 13) {
                    imgSet.forEach((img) => {
                        img.style.pointerEvents = 'none';
                    })

                    console.log("inside for last exec");
                    const btn = document.getElementById('smt');
                    btn.addEventListener('click', () => {
                        
                        const tnode = document.createTextNode(`${this.result.toUpperCase()}`);
                        document.getElementById('res').appendChild(tnode);
                        

                    })
                    btn.style.pointerEvents = 'none';

                    return;
                }



            })
        })
    }



};

const imgSet = document.querySelectorAll('img');
const catArray = [...imgSet];
const obj = new Game(1, imgSet, catArray);
obj.setIndexImagesCat();
obj.playGame();






