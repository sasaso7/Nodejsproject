import { getRandomInt } from "@shared/functions";
import { MockDaoMock } from "./MockDb/MockDao.mock";

export interface Audio {
  id: number;
  title: string;
  description: string;
  source: string;
}

export interface IAudiosDao {
  get: (id: number) => Promise<Audio | null>;
  getAll: () => Promise<Audio[]>;
}

export class AudioDao extends MockDaoMock implements IAudiosDao {
  public async get(id: number): Promise<Audio | null> {
    try {
      const db = await super.openDb();
      for (const doc of db.audio) {
        if (doc.id === id) {
          return doc;
        }
      }
      throw new Error("Audio not found");
    } catch (err) {
      throw err;
    }
  }

  public async getAll(): Promise<Audio[]> {
    try {
      const db = await super.openDb();
      return db.audio;
    } catch (err) {
      throw err;
    }
  }
}