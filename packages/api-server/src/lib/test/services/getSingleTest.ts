import { Test } from '../../../interface';
import getAllTest from './getAllTest';

const getSingleTest = async (id: number) => {
  const tests = await getAllTest();

  const test = tests.find((item: Test) => item.id === id);
  return test;
};
export default getSingleTest;
