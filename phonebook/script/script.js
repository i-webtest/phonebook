import { deleteControl, formControl, hoverRow, modalControl } from './modules/control.js';
import render from './modules/render.js';
import { getStorage } from './modules/serviceStorage.js';

const { renderPhoneBook, renderContacts } = render;

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const { list, logo, btnAdd, formOverlay, form, btnDel } = renderPhoneBook(app, title);

    //Функционал

    const allRow = renderContacts(list, getStorage('contacts'));
    const { closeModal } = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
}
