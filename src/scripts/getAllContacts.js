import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const res = await readContacts();
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
