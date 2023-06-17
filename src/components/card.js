import {cardTemplate, inputCardName, inputCardlink, cardContainer, popupAddCard, popupImage, popupTitle, popupOpenImage, formAddCard, configValidation} from './utils'
import {closePopup,openPopup} from './modal.js'
import {toggleButton} from '../components/validate.js'



export function handleAddCard(event) {
    event.preventDefault();
    const newCard = {name: inputCardName.value, link: inputCardlink.value}; 
    addCard(cardContainer, newCard); 
    event.target.reset();
    const buttonSubmitForm = formAddCard.querySelector(configValidation.buttonSubmitSelector);
    toggleButton(formAddCard, buttonSubmitForm);
    closePopup(popupAddCard);
  }
  
export function deleteCard(event) {
    event.target.closest('.card').remove();
  }
  
export function likeCard(event) {
    event.target.classList.toggle('card__button-like_active');
  }
  
export function createCard(card) {
      const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
      const cardElementImage = cardElement.querySelector('.card__image');
      const cardElementTitle = cardElement.querySelector('.card__title');
      const cardButtonLike = cardElement.querySelector('.card__button-like');
      const cardButtonDelete = cardElement.querySelector('.card__button-delete');
  
      cardElementImage.src = card.link;
      cardElementImage.alt = card.name;
      cardElementTitle.textContent = card.name;
  
      function openImage() {
        popupImage.alt = card.name;
        popupImage.src = card.link;
        popupTitle.textContent = card.name;
        openPopup(popupOpenImage)
      }
      cardButtonDelete.addEventListener('click',deleteCard);
      cardButtonLike.addEventListener('click', likeCard);
      cardElementImage.addEventListener('click', openImage);
  
      return cardElement;
  }
  
export function addCard(cardsList, currentCard) {
      return cardsList.prepend(createCard(currentCard));
}
