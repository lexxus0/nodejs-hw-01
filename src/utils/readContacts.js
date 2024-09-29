import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  return (
    (await fs.readFile(PATH_DB, { encoding: 'utf-8' })) || JSON.stringify([])
  );
};
