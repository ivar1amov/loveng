const menu = document.querySelector('#menu-adaptive')
const open = document.querySelector('.header__content__open');
const close = document.querySelector('.header__content__close');

open.addEventListener('click', function (e) {
	e.preventDefault();
	menu.classList.add('visible');
	menu.classList.remove('hidden');
})

close.addEventListener('click', function (e) {
	e.preventDefault();
	menu.classList.add('hidden');
	menu.classList.remove('visible');
	window.scrollTo({
		top: 0
	})
})

// image
const changeImage = document.querySelectorAll('.main__change__blocks__item__img');

for (let i = 0; i < changeImage.length; i++) {
	if (window.innerWidth >= 320 && window.innerWidth <= 630) {
		changeImage[i].setAttribute('src', 'img/img' + i + '-small.png');
	} else if (window.innerWidth <= 1000) {
		changeImage[i].setAttribute('src', 'img/img' + i + '-big.png');
	}
}

const historyImg = document.querySelector('.main__online__history__img');

if (window.innerWidth <= 630) {
	historyImg.setAttribute('src', 'img/img6-small.png');
} else if (window.innerWidth <= 1000) {
	historyImg.setAttribute('src', 'img/img6-big.png');
}

const finishImg = document.querySelector('.main__finish__img');

if (window.innerWidth <= 630) {
	finishImg.setAttribute('src', 'img/img7-large.png');
} else if (window.innerWidth <= 1000) {
	finishImg.setAttribute('src', 'img/img7-big.png');
}

// left
const head = document.querySelector('head');
const style = document.createElement('style');
head.append(style);
const finishContent = document.querySelector('.main__finish__content');
style.textContent = `
.main__finish__content {
    position: absolute;
    margin-top: ${finishContent.offsetHeight / 2 * (-1)}px;
    margin-left: ${finishContent.offsetWidth / 2 * (-1)}px;
    left: 70%;
    top: 55%;
}

@media (max-width: 1000px) {
    .main__finish__content{
        left: 50%;
    }
}

@media (max-width: 790px) and (min-width: 630px){
    .main__finish__content{
        width: 76%;
        margin-left: 0;
        margin-top: 0;
        left: 4%;
        top: 47%;
    }
}
@media (max-width: 629.98px) {
    .main__finish__content{
        top: 60%;
    }
}
`;

// Text
const changeText = document.querySelector('.main__change__title');

if (window.innerWidth <= 630 || window.innerWidth >= 320) {
	changeText.textContent = "Что такое LovEng ?"
}