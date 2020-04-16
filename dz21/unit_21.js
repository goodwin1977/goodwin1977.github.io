
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').textContent = 'touch';
}
// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let i = 1;
function t2() {
    document.querySelector('.out-2').textContent = i++;
}
document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
    if (e.target.innerText == '3-1') {
        document.querySelector('.out-3').textContent = 1;
    } else {
        document.querySelector('.out-3').textContent = 2;
    }
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', function(){
        document.querySelector('.out-4').textContent += 'touch';
    });
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', function(){});
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent += 'touchend';
}

document.querySelector('.div-4').addEventListener('touchend', t6);


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
let div7 = document.querySelector('.div-7');
function t7() {
    div7.style.background = 'red';
}
div7.addEventListener('touchend', t7);


// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let div8 = document.querySelector('.div-8');
function t8() {
    let index = 0;
    const a8=['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
    index = Math.floor(0 + Math.random() * (a8.length ));
    div8.style.background = a8[index];

}
div8.addEventListener('touchend', t8);


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let div9 = document.querySelector('.div-9');
function t9(e) {
    let touchlist = e.changedTouches;    
    let out = '';
    out = 'radiusY: ' + TouchList.length;
    document.querySelector('.out-9').innerHTML = out;
 }

div9.addEventListener('touchend', t9);


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10');
let w = 75;
function t10() {
    div10.style.width = w + 'px';
    w++;
}

div10.addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
    let out = '';
    out += 'radiusX: ' + e.changedTouches[0].radiusX + '<br>';
    out += 'radiusY: ' + e.changedTouches[0].radiusY;
    document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.div-11').addEventListener('touchend', t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/
let div12Max = document.querySelector('.div-12-max img');
let imgMin = document.querySelectorAll('.img-12-min');
let count = 1;
function t12_next() {
    if (count == imgMin.length) {
        count = 0;
    }
    count++;
    div12Max.src = 'img/'+ count + '.png';
    // imgMin[count-1].classList.remove('active-img');
    for ( let i = 0; i < imgMin.length; i++){
        if (imgMin[i].classList.contains('active-img') === true) {
            imgMin[i].classList.remove('active-img');
        }
    }
    imgMin[count-1].classList.add('active-img');    
}

function t12_prev() {
    count--;
    if (count <= 0) {
        count = imgMin.length;
    }
    div12Max.src = 'img/'+ count + '.png';
    // imgMin[count].classList.remove('active-img');
    for ( let i = 0; i < imgMin.length; i++){
        if (imgMin[i].classList.contains('active-img') === true) {
            imgMin[i].classList.remove('active-img');
        }
    }
    imgMin[count-1].classList.add('active-img');
}

function reset () {
    for ( let i = 0; i < imgMin.length; i++){
        if (imgMin[i].classList.contains('active-img') === true) {
            imgMin[i].classList.remove('active-img');
        }
    }
    count = 1;
    imgMin[0].classList.add('active-img');
    div12Max.src = 'img/'+ count + '.png';
    
}
document.querySelector('.next').onclick = t12_next;
document.querySelector('.prev').onclick = t12_prev;
document.querySelector('.reset').onclick = reset;
for (let i = 0; i < imgMin.length; i++){
    imgMin[i].addEventListener('click', function(e) {
        div12Max.src = e.target.src;
        e.target.classList.add('active-img');
        console.log(e);
        count = i + 1;
    });
}