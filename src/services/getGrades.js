import dummyData from '../../data/test-data.json';

// eslint-disable-next-line no-unused-vars
export function getAllStudents(apiKey) {
  if(apiKey === 'test') return Promise.resolve(dummyData);
  else {
    return fetch('https://thawing-dusk-78361.herokuapp.com/api/v2/canvas/students', {
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
