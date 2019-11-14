// eslint-disable-next-line no-unused-vars
import students from '../../data/students.json';

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
export function getFreshies(apiKey) {
  return fetch('https://thawing-dusk-78361.herokuapp.com/api/v1/canvas/invalidate', {
    headers: {
      'x-api-key': apiKey
    } 
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fatch';
      return json;
    });
}

export function getAsses(kido, apiKey) {
  if(kido.pending.length === 0) return Promise.resolve([{ name: 'No Ungraded Asses', url: null }]);
  const assIds = kido.pending.map(ass => ass.assignmentId).join(',');
  return fetch(`https://thawing-dusk-78361.herokuapp.com/api/v1/canvas/assignments?ids=${assIds}&studentId=${kido.id}`, {
    headers: {
      'x-api-key': apiKey
    } 
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fatch';
      return json;
    });
}
