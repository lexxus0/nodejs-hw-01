import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const res = await readContacts();

    const resData = JSON.parse(res);
    if (resData.length > 0) {
      resData.pop();
      await writeContacts(resData);
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
