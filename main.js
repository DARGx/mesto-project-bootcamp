!function(){"use strict";function e(e,t,n){e.querySelector("#error-"+t.id).textContent="",t.classList.remove(n.inputErrorClass)}function t(t,n){Array.from(t.querySelectorAll(n.inputSelector)).forEach((function(r){e(t,r,n)}))}function n(e,t){e.checkValidity()?t.disabled=!1:t.disabled=!0}var r="popup_opened",o=document.querySelector(".popup-change-profile"),c=document.querySelector(".popup-add-card"),a=document.querySelector(".popup-open-image"),i=document.querySelector(".popup-change-avatar"),u=a.querySelector(".popup__image"),l=a.querySelector(".popup__title"),d=document.querySelector(".form-profile"),s=document.querySelector(".form-card"),f=document.querySelector(".form-avatar"),m=document.querySelector(".profile__button-add"),h=document.querySelector(".profile__button-change-descrition"),p=document.querySelector(".profile__button-chage-avatar"),y=document.querySelector(".profile__title"),v=document.querySelector(".profile__subtitle"),b=document.querySelector(".profile__author-image"),_=document.querySelector(".form__input-profile-title"),S=document.querySelector(".form__input-profile-subtitle"),k=document.querySelector(".form__input-card-name"),q=document.querySelector(".form__input-card-link"),E=document.querySelector(".form__input-change-avatar"),L=document.querySelector(".cards__list"),g=document.querySelector(".card-template").content,C={formSelector:".form",inputSelector:".form__input",buttonSubmitSelector:".form__button-update",inputErrorClass:"form__input_error"},A=(f.querySelector(C.buttonSubmitSelector),d.querySelector(".form__button-update"));function w(e){var t=e.name,n=e.about;y.textContent=t,v.textContent=n}function j(e){var t=e.avatar;b.src=t}var O={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-9",headers:{authorization:"359d20cb-40b3-4e51-ae1b-5794952998c3","Content-Type":"application/json"}};function x(e){return e.ok?e.json():e.json().then((function(t){return t.statusCode=e.status,Promise.reject(t)}))}var I={getProfile:function(){return fetch("".concat(O.baseUrl,"/users/me"),{headers:O.headers,method:"GET"}).then(x)},getCards:function(){return fetch("".concat(O.baseUrl,"/cards"),{headers:O.headers,method:"GET"}).then(x)},patchProfile:function(e){return fetch("".concat(O.baseUrl,"/users/me"),{headers:O.headers,method:"PATCH",body:JSON.stringify(e)}).then(x)},postCard:function(e){return fetch("".concat(O.baseUrl,"/cards"),{headers:O.headers,method:"POST",body:JSON.stringify(e)}).then(x)},patchAvatar:function(e){return fetch("".concat(O.baseUrl,"/users/me/avatar"),{headers:O.headers,method:"PATCH",body:JSON.stringify(e)}).then(x)},putLike:function(e){return fetch("".concat(O.baseUrl,"/cards/likes/").concat(e),{headers:O.headers,method:"PUT"}).then(x)},deleteLike:function(e){return fetch("".concat(O.baseUrl,"/cards/likes/").concat(e),{headers:O.headers,method:"DELETE"}).then(x)},deleteCard:function(e){return fetch("".concat(O.baseUrl,"/cards/").concat(e),{headers:O.headers,method:"DELETE"}).then(x)}};function P(e){e.classList.add(r),document.addEventListener("keydown",T)}function U(e){e.classList.remove(r),document.removeEventListener("keydown",T)}function T(e){"Escape"===e.key&&U(document.querySelector(".popup_opened"))}function z(e,t,n){e.composedPath().includes(n)||U(t)}function D(e,t){e.textContent=t}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t,n){return e.prepend(function(e,t){var n=g.querySelector(".card").cloneNode(!0),r=n.querySelector(".card__image"),o=n.querySelector(".card__title"),c=n.querySelector(".card__button-like"),i=n.querySelector(".card__like-number"),d=n.querySelector(".card__button-delete");r.src=e.link,r.alt=e.name,o.textContent=e.name,i.textContent=e.massiveLikes.length;var s=e.massiveLikes.map((function(e){return e._id}));return i.id=s,s.includes(e.userAuthorized._id)&&c.classList.add("card__button-like_active"),"y"===t?d.addEventListener("click",(function(t){I.deleteCard(e.cardId).then(function(e){e.target.closest(".card").remove()}(t)).catch(console.dir)})):d.remove(),c.addEventListener("click",(function(){c.classList.contains("card__button-like_active")?function(t,n){I.deleteLike(e.cardId).then((function(e){t.classList.remove("card__button-like_active"),n.textContent=e.likes.length})).catch(console.dir)}(c,i):function(t,n){I.putLike(e.cardId).then((function(e){t.classList.add("card__button-like_active"),n.textContent=e.likes.length})).catch(console.dir)}(c,i)})),r.addEventListener("click",(function(){u.alt=e.name,u.src=e.link,l.textContent=e.name,P(a)})),n}(t,n))}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([I.getCards(),I.getProfile()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];c.name,c.about,c._id,w(c),j(c),o.reverse().forEach((function(e){c._id===e.owner._id?J(L,{name:e.name,link:e.link,massiveLikes:e.likes,cardId:e._id,cardOwner:e.owner,userAuthorized:c},"y"):J(L,{name:e.name,link:e.link,massiveLikes:e.likes,cardId:e._id,cardOwner:e.owner,userAuthorized:c},"n")}))})).catch(console.dir).finally((function(){console.log("Попытка загрузки данных завершена")})),document.querySelectorAll(".popup__button-hide").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){U(t)}))})),s.addEventListener("submit",(function(e){e.preventDefault(),D(e.submitter,"Добавление...");var t={name:k.value,link:q.value};Promise.all([I.postCard(t)]).then((function(t){var r,o,a=(o=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(r,o)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];u.name,u.about,u._id,J(L,{name:i.name,link:i.link,massiveLikes:i.likes,cardId:i._id,cardOwner:i.owner,userAuthorized:u},"y"),e.target.reset(),n(s,e.submitter),U(c)})).catch((function(e){console.log(e)})).finally((function(){D(e.submitter,"Добавить")}))})),d.addEventListener("submit",(function(e){e.preventDefault(),D(A,"Сохранение..."),I.patchProfile({name:_.value,about:S.value}).then((function(e){w(e),U(o)})).finally((function(){D(A,"Сохранить")}))})),f.addEventListener("submit",(function(e){e.preventDefault(),D(e.submitter,"Сохранение..."),I.patchAvatar({avatar:E.value}).then((function(e){j(e),U(i)})).finally((function(){D(e.submitter,"Сохранить")}))})),m.addEventListener("click",(function(){P(c)})),h.addEventListener("click",(function(){var e={name:y.textContent,about:v.textContent},n=e.name,r=e.about;_.value=n,S.value=r,t(d,C),P(o)})),p.addEventListener("click",(function(){t(f,C),P(i)})),a.addEventListener("click",(function(e){z(e,a,u)})),o.addEventListener("click",(function(e){z(e,o,d)})),c.addEventListener("click",(function(e){z(e,c,s)})),i.addEventListener("click",(function(e){z(e,i,f)})),function(t){document.querySelectorAll(t.formSelector).forEach((function(r){!function(t,r){var o=t.querySelectorAll(r.inputSelector),c=t.querySelector(r.buttonSubmitSelector);n(t,c),o.forEach((function(o){o.addEventListener("input",(function(){!function(t,n,r){n.validity.valid?e(t,n,r):function(e,t,n){e.querySelector("#error-"+t.id).textContent=t.validationMessage,t.classList.add(n.inputErrorClass)}(t,n,r)}(t,o,r),n(t,c)}))}))}(r,t)}))}(C),window.addEventListener("unhandledrejection",(function(e){console.error("Необработанная ошибка.\nМесто возникновения: "),console.error(e.promise),console.error("Информация об ошибке:"),console.error(e.reason)}))}();
//# sourceMappingURL=main.js.map