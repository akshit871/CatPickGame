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

                //result finder logic
                if (this.counter % 4 == 0 && this.result === "win") {
                    let set1 = new Set();
                    tmp.forEach(element => {
                        set1.add(element);
                    });
                    if (set1.size == tmp.length) {
                        this.result = 'win';
                    }
                    else {
                        this.result = 'lost';
                    }
                    tmp = [];
                    set1.clear();
                }


                //append new duplicate image
                let img_new = document.createElement('img');
                img_new.src = `./Cats_images/cat_${cur_img_uid}.png`;
                document.querySelector(`.c${this.counter}`).appendChild(
                    img_new
                )

                this.counter++;
                if (this.counter == 13) {

                    img_new.addEventListener('load', () => { alert(this.result.toUpperCase()) });

                }


            })
        })
    }

    test_singleimgFire() {
        return new Promise((resolve, reject) => {


            const img = this.imgSet[11];
            img.addEventListener('click', () => {
                const img_new = document.createElement('img');
                img_new.src = './Cats_images/cat_12.png';
                document.querySelector(`.c10`).appendChild(img_new);
                resolve("alert fired after adding event listner");
            })
        })
    }

};

const imgSet = document.querySelectorAll('img');
const catArray = [...imgSet];

const obj = new Game(1, imgSet, catArray);
obj.setIndexImagesCat();
obj.playGame();


