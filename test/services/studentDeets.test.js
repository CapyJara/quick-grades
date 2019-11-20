import { studentDeets } from '../../src/utils/studentDeets';
import json from '../../data/test-data.json';


it('takes in json from fetch and formats is for use', () => {
  
  expect(studentDeets(json).students[0]).toEqual({
    name: expect.any(String),
    id: expect.any(String),
    missing: expect.any(Number),
    pending: expect.any(Number),
    sectionNames: expect.any(Array)
  }); 
});


