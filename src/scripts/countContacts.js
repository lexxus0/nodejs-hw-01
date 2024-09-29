import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const res = await readContacts();
    const resData = JSON.parse(res);
    return resData.length;
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

console.log(await countContacts());
