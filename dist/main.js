!function(){"use strict";var e,t="popup_opened",n=document.querySelector(".popup-change-profile"),r=document.querySelector(".popup-add-card"),o=document.querySelector(".popup-open-image"),c=o.querySelector(".popup__image"),u=o.querySelector(".popup__title"),i=document.querySelector(".form-profile"),l=document.querySelector(".form-card"),d=document.querySelector(".profile__button-add"),a=document.querySelector(".profile__button-change-descrition"),s=document.querySelector(".profile__title"),p=document.querySelector(".profile__subtitle"),m=document.querySelector(".form__input-profile-title"),f=document.querySelector(".form__input-profile-subtitle"),y=document.querySelector(".form__input-card-name"),v=document.querySelector(".form__input-card-link"),_=document.querySelector(".cards__list"),S=document.querySelector(".card-template").content,k={formSelector:".form",inputSelector:".form__input",buttonSubmitSelector:".form__button-update",inputErrorClass:"form__input_error"};function q(e){e.classList.add(t),document.addEventListener("keydown",b)}function E(e){e.classList.remove(t),document.removeEventListener("keydown",b)}function b(e){"Escape"===e.key&&E(document.querySelector(".popup_opened"))}function h(e,t,n){e.composedPath().includes(n)||E(t)}function L(e,t,n){e.querySelector("#error-"+t.id).textContent="",t.classList.remove(n.inputErrorClass)}function g(e,t){e.checkValidity()?t.disabled=!1:t.disabled=!0}function x(e){e.target.closest(".card").remove()}function C(e){e.target.classList.toggle("card__button-like_active")}function j(e,t){return e.prepend((n=t,i=(r=S.querySelector(".card").cloneNode(!0)).querySelector(".card__image"),l=r.querySelector(".card__title"),d=r.querySelector(".card__button-like"),a=r.querySelector(".card__button-delete"),i.src=n.link,i.alt=n.name,l.textContent=n.name,a.addEventListener("click",x),d.addEventListener("click",C),i.addEventListener("click",(function(){c.alt=n.name,c.src=n.link,u.textContent=n.name,q(o)})),r));var n,r,i,l,d,a}document.querySelectorAll(".popup__buttom-hide").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){E(t)}))})),l.addEventListener("submit",(function(e){e.preventDefault();var t={name:y.value,link:v.value};j(_,t),e.target.reset();var n=l.querySelector(k.buttonSubmitSelector);g(l,n),E(r)})),i.addEventListener("submit",(function(e){e.preventDefault(),s.textContent=m.value,p.textContent=f.value,E(n)})),d.addEventListener("click",(function(){q(r)})),a.addEventListener("click",(function(){var e,t;m.value=s.textContent,f.value=p.textContent,e=i,t=k,Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){L(e,n,t)})),q(n)})),o.addEventListener("click",(function(e){h(e,o,c)})),n.addEventListener("click",(function(e){h(e,n,i)})),r.addEventListener("click",(function(e){h(e,r,l)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){return j(_,e)})),e=k,document.querySelectorAll(e.formSelector).forEach((function(t){!function(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.buttonSubmitSelector);g(e,r),n.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?L(e,t,n):function(e,t,n){e.querySelector("#error-"+t.id).textContent=t.validationMessage,t.classList.add(n.inputErrorClass)}(e,t,n)}(e,n,t),g(e,r)}))}))}(t,e)}))}();