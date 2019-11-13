// eslint-disable-next-line no-unused-vars
import students from '../../data/students.json';

export function getAllStudents(apiKey) {
  return fetch('https://thawing-dusk-78361.herokuapp.com/api/v1/canvas/students', {
    headers: {
      'x-api-key': apiKey
    } 
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fatch';
      return json;
    });
  // return Promise.resolve(students);
}

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
