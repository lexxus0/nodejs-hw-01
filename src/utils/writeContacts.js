import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const res = fs.writeFile(PATH_DB, updatedContacts);
    return res;
  } catch (e) {
    console.log(e.message);
  }
};
