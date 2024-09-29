import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contact = createFakeContact();
  try {
    const res = await readContacts();
    const contactsArray = JSON.parse(res);
    contactsArray.push(contact);

    await writeContacts(contactsArray);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

addOneContact();
