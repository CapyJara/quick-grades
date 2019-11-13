const students = require('../../data/students.json');
const asses = require('../../data/john-pending.json');

export function getAllStudents() {
  return fetch('https://thawing-dusk-78361.herokuapp.com/api/v1/canvas/students', {
    headers: {
      'x-api-key': 'NBQ&Ecp2OD^00cL*9WW%Vu#cOJB&Nq%I'
    } 
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fatch';
      return json;
    });
}

// for each student map and get each assignments deets
export function getAsses(kido) {
  const assIds = kido.pending.map(ass => ass.assignmentId).join(',');
  return fetch(`https://thawing-dusk-78361.herokuapp.com/api/v1/canvas/assignments?ids=${assIds}&student=${kido.id}`, {
    headers: {
      'x-api-key': 'NBQ&Ecp2OD^00cL*9WW%Vu#cOJB&Nq%I'
    } 
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fatch';
      return json;
    });
}
