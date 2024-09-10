import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const res = await fs.readFile(PATH_DB);
    return res;
  } catch (e) {
    console.log(e.message);
  }
};
