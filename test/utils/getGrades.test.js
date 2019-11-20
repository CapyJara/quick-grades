import { getAllStudents, getFreshies } from '../../src/services/getGrades';

describe('fetch functions', () => {
  it('getAllStudents', () => {
    return getAllStudents('test')
      .then(res => {
        expect(res[0]).toEqual({
          _id: expect.any(String),
          courseId: expect.any(String),
          id: expect.any(String),
          __v: 0,
          grade: 94.28,
          missing: expect.any(Array),
          name: expect.any(String),
          pending: expect.any(Array),
          sectionNames: expect.any(Array),
          turnedIn: expect.any(Array)
        });
      });
  });

  it('getFreshies', () => {
    return getFreshies('test')
      .then(res => {
        expect(res[0]).toEqual({
          _id: expect.any(String),
          courseId: expect.any(String),
          id: expect.any(String),
          __v: 0,
          grade: 94.28,
          missing: expect.any(Array),
          name: expect.any(String),
          pending: expect.any(Array),
          sectionNames: expect.any(Array),
          turnedIn: expect.any(Array)
        });
      }); 
  });
});

