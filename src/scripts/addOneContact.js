import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const contact = createFakeContact();
  try {
    const res = await fs.readFile(PATH_DB, contact);
    const contactsArray = JSON.parse(res);
    contactsArray.push(contact);

    await fs.writeFile(PATH_DB, JSON.stringify(contactsArray));
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

addOneContact();
