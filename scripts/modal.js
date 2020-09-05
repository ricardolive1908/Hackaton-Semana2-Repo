const modalContainer = document.querySelector('.js_modal');
const button = document.querySelector('.js_btnOpen');
button.onclick = () => {
  const closeModal = document.querySelector('.js_modal-close');
  const buttonCancel = document.querySelector('.js_modal-cancel');
  modalContainer.classList.add('bg-active');
  function close(){
    modalContainer.classList.remove('bg-active');
  }
  closeModal.onclick= () => {
    close();
  };
  buttonCancel.onclick = () => {
    close();
  };

  const modalObject = {
    open,
    close,
  };


}

