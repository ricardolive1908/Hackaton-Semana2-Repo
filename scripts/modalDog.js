//Modal
const modalContainer = document.querySelector('.js_modal');
const button = document.querySelector('.js_addPet');
button.onclick = () => {
  modal({ action: createCardAndShow }).open();
};

function modal({ action }) {
  const closeModal = document.querySelector('.js_modal-close');
  const buttonCancel = document.querySelector('.js_modal-cancel');

  function open() {
    modalContainer.classList.add('bg-active');
  }

  function close() {
    modalContainer.classList.remove('bg-active');
  }

  closeModal.onclick = () => {
    close();
  };

  buttonCancel.onclick = () => {
    close();
  };

  const modalObject = {
    open,
    close,
  };

  initFormModal(modalObject, action);
  return modalObject;
}

function initFormModal(modalObject, action) {
  const form = document.querySelector('.js_form');

  form.onsubmit = function (event) {
    event.preventDefault();

    action();

    form.reset();
    modalObject.close();
  };
}

const form = {
  inputName: document.querySelector('.js_name'),
  inputAge: document.querySelector('.js_age'),
  inputBreed: document.querySelector('.js_breed'),
  inputImage: document.querySelector('.js_image'),
  inputDescription: document.querySelector('.js_description'),

  setValues(values) {
    const { name, age, breed, image, description } = values;
    this.inputName.value = name;
    this.inputAge.value = age;
    this.inputBreed.value = breed;
    this.inputImage.value = image;
    this.inputDescription.value = description;
  },
  getValues() {
    return {
      name: this.inputName.value,
      age: this.inputAge.value,
      breed: this.inputBreed.value,
      image: this.inputImage.value,
      description: this.inputDescription.value,
    };
  },
};

const createCardAndShow = () => {
  const cardCraft = createCard(form.getValues());

  addDomCard(cardCraft);
};

function createCard(values) {
  const { name, age, breed, image, description } = values;

  const card = document.createElement('article');
  card.innerHTML = `
    <div class="headerCard">
      <button class="js_card-edit editCard">Editar</button>
      <button class="js_card-delete close">x</button>
    </div> 
    <div class="cardImage">
      <img class="js_card-image" src="${image}"/>
    </div> 
    <div class="bodyCard">
      <h3 class="js_card-name">${name}</h3>
      <h3 class="js_card-breed">${breed}</h3>
      <h3 class="js_card-age">${age}</h3>
      <p class="js_card-description description">${description}</p>
    </div>`;

  card.querySelector('.js_card-edit').onclick = () => {
    showToEdit(card);
  };

  card.querySelector('.js_card-delete').onclick = () => {
    const btnNo = document.querySelector('.js_cardDel-No');
    const btnYes = document.querySelector('.js_cardDel-yes');
    const askDeleteCard = document.querySelector('.delete-container');
    askDeleteCard.classList.add('askDel-active');
    btnNo.onclick = () => {
      closeCard();
    };

    btnYes.onclick = () => {
      closeCard();
      card.remove();
    };
    function closeCard() {
      askDeleteCard.classList.remove('askDel-active');
    }
  };

  return card;
}

function addDomCard(card) {
  const container = document.getElementById('container');
  container.appendChild(card);
}

function showToEdit(card) {
  function editCard() {
    const values = form.getValues();
    const { name, age, breed, image, description } = values;

    card.querySelector('.js_card-name').textContent = name;
    card.querySelector('.js_card-breed').textContent = breed;
    card.querySelector('.js_card-age').textContent = age;
    card.querySelector('.js_card-image').src = image;
    card.querySelector('.js_card-description').textContent = description;
  }

  form.setValues({
    name: card.querySelector('.js_card-name').textContent,
    age: card.querySelector('.js_card-age').textContent,
    breed: card.querySelector('.js_card-breed').textContent,
    image: card.querySelector('.js_card-image').src,
    description: card.querySelector('.js_card-description').textContent,
  });
  modal({ action: editCard }).open();
}