const students = require('../../data/students.json');
const asses = require('../../data/john-pending.json');

export function getAllStudents() {
  // return fetch('https://thawing-dusk-78361.herokuapp.com/api/v1/canvas/students', {
  //   headers: {
  //     Authorization: 'x-api-key NBQ&Ecp2OD^00cL*9WW%Vu#cOJB&Nq%I'
  //   } 
  // });
  return Promise.resolve(students);
}

// for each student map and get each assignments deets
export function getAsses() {
  return Promise.resolve(asses);
}
