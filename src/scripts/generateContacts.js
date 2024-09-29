import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = [];
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  try {
    const res = await readContacts();
    const contactsArray = JSON.parse(res);

    contactsArray.push(...contacts);

    await writeContacts(contactsArray);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('File is not found');
    } else {
      console.log(e.message);
    }
  }
};

generateContacts(1);
