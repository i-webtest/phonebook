import * as element from './createElements.js';

const renderPhoneBook = (app, title) => {
  const header = element.createHeader();
  const logo = element.createLogo(title);
  const main = element.createMain();
  const buttonGroupe = element.createButtonsGroup([
    {
      className: 'btn btn-primary mr-3 js-add',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = element.createTable();
  const { form, overlay } = element.createForm();
  const footer = element.createFooter(title);

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroupe.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroupe.btns[0],
    btnDel: buttonGroupe.btns[1],
    formOverlay: overlay,
    form,
  };
};

const renderContacts = (elem, data) => {
  const allRow = data.map(element.createRow);
  elem.append(...allRow);
  return allRow;
};

export default { renderPhoneBook, renderContacts };
