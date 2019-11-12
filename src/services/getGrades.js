const students = require('../../data/students.json');

export function getAllStudentAsses() {
  // return fetch('https://thawing-dusk-78361.herokuapp.com/api/v1/canvas/students', {
  //   headers: {
  //     Authorization: 'x-api-key NBQ&Ecp2OD^00cL*9WW%Vu#cOJB&Nq%I'
  //   } 
  // });
  return JSON.stringify(students);
}

// for each student map and get each assignments deets
