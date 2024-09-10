import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const res = await fs.readFile(PATH_DB);

    const resData = JSON.parse(res);
    if (resData.length > 0) {
      resData.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(resData));
    }
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

removeLastContact();
