let counter = 1;


const imgSet = document.querySelectorAll('img');
const catArray = [...imgSet];
console.log(catArray);
// const setIndexImagesCat = (catArray) => {
//     catArray.forEach((img, index) => {
//         img.setAttribute('uIndex', index + 1);
//     })
// };
// const check_setIndexImages = (imgSet) => {

//     imgSet.forEach((img, i) => {

//         if (img.getAttribute('uIndex') == i) {
//             console.log(`got ${i}th image`);
//         }
//     })
// };
setIndexImagesCat(catArray);
const gameResult = () => {

};
const playGame = (counter = 1, imgSet) => {
    let tmp = [];
    let result = "win";
    imgSet.forEach((img, index) => {

        img.addEventListener('click', (e) => {
            let cur_img_uid = e.target.getAttribute('uIndex');

            tmp.push(cur_img_uid);


            if (counter % 4 == 0 && result === "win") {
                result = "win";
                let flag;
                console.log(tmp);
                tmp.forEach((uid) => {
                    if (flag == null) {
                        flag = uid;
                    }
                    else {
                        if (flag == uid) {
                            result = "loose";
                        }
                    }
                })

                // result = "win";
                tmp = [];
            }
            if (counter == 13) {
                // document.querySelector('.c12').addEventListener()
                console.log(result);
                return;
            }


            let img_new = document.createElement('img');
            img_new.src = `./Cats_images/cat_${cur_img_uid}.png`;
            img_new.setAttribute('uIndex', cur_img_uid);
            document.querySelector(`.c${counter}`).appendChild(
                img_new
            )
            counter++;
        })
    })
};
playGame(1, imgSet, "");

