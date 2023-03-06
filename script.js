let mainBox = document.querySelector('.main_info p');
mainBox.onmouseover = function () {
    console.log('hello')
    mainBox.insertAdjacentHTML('afterend','<div class="popup"><p>Hello man!!</p></div>')
}

mainBox.onmouseout = function () {
    console.log('goodbay')
    let parentEl = (document.querySelector('.popup')).closest('.main_info')
    parentEl.removeChild(document.querySelector('.popup'))
}