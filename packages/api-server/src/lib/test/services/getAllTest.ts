import * as fs from 'fs/promises';
import * as path from 'path';

const getAllTest = async () => {
  const tests = await fs.readFile(
    path.join(__dirname, '../../../db/db.json'),
    'utf-8',
  );

  return JSON.parse(tests);
};
export default getAllTest;
