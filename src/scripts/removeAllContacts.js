import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const contactsArray = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contactsArray));
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

removeAllContacts();
