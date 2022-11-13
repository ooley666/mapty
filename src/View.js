export class View {
  form = document.querySelector('.form');
  containerWorkouts = document.querySelector('.workouts');
  inputType = document.querySelector('.form__input--type');
  inputDistance = document.querySelector('.form__input--distance');
  inputDuration = document.querySelector('.form__input--duration');
  inputCadence = document.querySelector('.form__input--cadence');
  inputElevation = document.querySelector('.form__input--elevation');
  sortWrapper = document.querySelector(`.sort__wrapper`);
  deleteAll = document.querySelector(`.delete__all button`);
  overlay = document.querySelector(`.overlay`);
  modalText = document.querySelector(`.modal__text`);
  modalClose = document.querySelector(`.modal__close`);
  _showModal(context) {
    overlay.style.display = `flex`;
    if (context == 'emptyInput')
      modalText.textContent = 'please, input all data';
    if (context == 'invalidCharacter')
      modalText.textContent = 'you can only input positive numbers';
    if (context == 'unchangeable')
      modalText.textContent = 'you cannot change that';
  }
  _closeModal(e) {
    e.preventDefault();
    overlay.style.display = `none`;
    console.log(e.key);
  }
}
