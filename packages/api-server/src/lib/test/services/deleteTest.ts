import * as fs from 'fs/promises';
import * as path from 'path';
import { Test } from '../../../interface';
import getAllTest from './getAllTest';

const deleteTest = async (id: number) => {
  const tests: Test[] = await getAllTest();
  const newTests = tests.filter((item) => item.id !== id);

  await fs.writeFile(
    path.join(__dirname, '../../../db/db.json'),
    JSON.stringify(newTests),
  );
};
export default deleteTest;
