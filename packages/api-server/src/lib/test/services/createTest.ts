import * as fs from 'fs/promises';
import * as path from 'path';
import { Test } from '../../../interface';
import getAllTest from './getAllTest';

const createTest = async (payload: Test) => {
  const tests = await getAllTest();

  tests.push(payload);

  await fs.writeFile(
    path.join(__dirname, '../../../db/db.json'),
    JSON.stringify(tests),
  );

  return payload;
};
export default createTest;
