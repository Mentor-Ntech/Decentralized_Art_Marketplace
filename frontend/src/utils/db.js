// src/utils/db.js
import { openDB } from 'idb';

const DB_NAME = 'ArtDatabase';
const STORE_NAME = 'artStore';

const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    },
  });
  return db;
};

export const addArt = async (art) => {
  const db = await initDB();
  await db.put(STORE_NAME, art);
};

export const getAllArts = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};
