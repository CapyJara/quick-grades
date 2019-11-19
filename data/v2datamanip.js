export const studentDeets = json => {
  return json.reduce((acc, val) => {
    return {
      students: [
        ...acc.students, 
        { 
          name: val.name, 
          id: val.id, 
          missing: val.missing.length, 
          pending: val.pending.length
        }
      ],
      studentPendingAsses: {
        ...acc.studentPendingAsses,
        [val.id]: val.pending
      }
    };
  }, {
    students: [],
    studentPendingAsses: {},
  });
};

