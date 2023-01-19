export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const setStorage = (key, obj) => {
  const abonent = getStorage(key);

  localStorage.setItem(key, JSON.stringify(abonent.concat(obj)));
};

export const removeStorage = (phone) => {
  const contacts = getStorage('contacts');
  const newContacts = contacts.filter((contact) => contact.phone !== phone);

  localStorage.setItem('contacts', JSON.stringify(newContacts));
};

export const addContactData = (contact) => {
  setStorage('contacts', contact);
};
