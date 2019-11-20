import dummyData from '../../data/test-data.json';

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
  }
}

export function getFreshies(apiKey) {
  if(apiKey === 'test') return Promise.resolve(dummyData);
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
