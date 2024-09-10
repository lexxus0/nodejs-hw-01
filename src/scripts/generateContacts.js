import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const contacts = [];
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  try {
    const res = await fs.readFile(PATH_DB);
    const contactsArray = JSON.parse(res);

    contactsArray.push(...contacts);

    await fs.writeFile(PATH_DB, JSON.stringify(contactsArray));
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

generateContacts(1);
