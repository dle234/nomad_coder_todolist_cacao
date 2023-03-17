const userName = document.querySelector('.userInput');
const user = document.querySelector('.cap');
const loginForm = document.querySelector('.login');
const tag = document.querySelector('.tag');
const logIn = (e) => {
    e.preventDefault();
    console.log(userName.value)
    window.localStorage.setItem('user', userName.value);
    userName.classList.add('displayNone');
    userName.classList.remove('userInput');

    user.innerText = userName.value;

}

const loginR = (e) => {

    const userIn = window.localStorage.getItem('user');
    if (userIn === null) {
        userName.classList.remove('displayNone');
        userName.classList.add('userInput');
        user.classList.add('displayNone');
    } else {

        user.classList.remove('displayNone');
        userName.classList.add('displayNone');
        user.innerText = userIn;
    }
}
const logOut = (e) => {
    window.localStorage.removeItem('user');
    loginR(e);
}


window.addEventListener("submit", loginR);
window.addEventListener("load", loginR);
loginForm.addEventListener('submit', logIn);
tag.addEventListener('click', logOut);