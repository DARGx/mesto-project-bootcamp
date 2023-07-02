import {cardTemplate, inputCardName, inputCardlink, cardContainer, popupAddCard, popupImage, popupTitle, popupOpenImage, formAddCard, configValidation} from './utils.js'
import {closePopup,openPopup, updateButtonCaption} from './modal.js'
import {toggleButton} from '../components/validate.js'
import {api} from './api.js'

  export function handleAddCard(event) {
    event.preventDefault();
    updateButtonCaption(event.submitter, 'Добавление...');

    const newCard = {name: inputCardName.value, link: inputCardlink.value}; 

    api.postCard(newCard)
    .then((card) => {
      const {name, about, _id} = card.owner;  
      addCard(cardContainer, {name: card.name, link: card.link, massiveLikes: card['likes'], cardId: card['_id'], cardOwner: card['owner'], userAuthorized: card.owner}, 'y');

      event.target.reset(); 
      toggleButton(formAddCard, event.submitter); 
      closePopup(popupAddCard);  
    }) 
    .catch((res) => {console.log(res)}) 
    .finally(() => {updateButtonCaption(event.submitter, "Добавить")}) 
 
  }
  
export function deleteCard(event) {
    event.target.closest('.card').remove();
  }
  

export function createCard(card, deleteable) {

      const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
      const cardElementImage = cardElement.querySelector('.card__image');
      const cardElementTitle = cardElement.querySelector('.card__title');
      const cardButtonLike = cardElement.querySelector('.card__button-like');
      const cardElementLikeNumber = cardElement.querySelector('.card__like-number');
      const cardButtonDelete = cardElement.querySelector('.card__button-delete');
      
      cardElementImage.src = card.link;
      cardElementImage.alt = card.name;
      cardElementTitle.textContent = card.name;
         
      cardElementLikeNumber.textContent = card.massiveLikes['length'];

      const listLikes = card.massiveLikes.map((liker) => liker['_id'])
      cardElementLikeNumber.id = listLikes;

      

      if (listLikes.includes(card.userAuthorized['_id'])) {
        cardButtonLike.classList.add('card__button-like_active') 
      } 

      function openImage() {
        popupImage.alt = card.name;
        popupImage.src = card.link;
        popupTitle.textContent = card.name;
        openPopup(popupOpenImage)
      }

      if (deleteable === 'y') {
        cardButtonDelete.addEventListener('click', () => {
          api.deleteCard(card.cardId)
            .then(() => {
              cardElement.remove();
            })
            .catch(console.dir)
        });
      } else {
        cardButtonDelete.remove();
      }

      cardButtonLike.addEventListener('click', function () {
        if (cardButtonLike.classList.contains('card__button-like_active')) {
          dislikeCard(cardButtonLike, cardElementLikeNumber)
        } else {
          likeCard(cardButtonLike, cardElementLikeNumber)
        }
      })

      function likeCard(cardButtonLike, cardElementLikeNumber) {
        return api.putLike(card.cardId)
          .then((card) => {
            cardButtonLike.classList.add('card__button-like_active')
            cardElementLikeNumber.textContent = card.likes.length
          })
          .catch(console.dir)
      }
      
      function dislikeCard(cardButtonLike, cardElementLikeNumber) {
        return api.deleteLike(card.cardId)
          .then((card) => {
            cardButtonLike.classList.remove('card__button-like_active')
            cardElementLikeNumber.textContent = card.likes.length
          })
          .catch(console.dir)
      }
      
      cardElementImage.addEventListener('click', openImage);
  
      return cardElement;
  }
  
export function addCard(cardsList, currentCard, deleteable) {
      return cardsList.prepend(createCard(currentCard, deleteable));
}


