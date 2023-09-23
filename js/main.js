let userName = prompt("Ismingizni kiriting: ");
let userMoney = prompt("Pulingizni kiriting (Dollarda kiriting): ");
userMoney = userMoney * 12250;

let elTitle = document.querySelector(".title");

let airway = 12250 * 500;
let hotel = 12250 * 250;
let journey = 13005 * 120;
let compare = userMoney - (airway + hotel + journey );

if ( (airway + hotel + journey) <= userMoney) {
    elTitle.textContent = `Oq yo'l ${userName}`;
} else {
    elTitle.textContent = `${userName} ozgina sabr qilish kerak bo'lar ekan, yetmayotgan summa : ${compare} sum`;
}