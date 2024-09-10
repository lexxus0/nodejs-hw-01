import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const res = await fs.readFile(PATH_DB);
    const resData = JSON.parse(res);
    return resData;
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

console.log(await getAllContacts());
