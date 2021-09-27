// import request from 'superagent';

const apiURL = 'http://localhost:7890/api/v1/comments/';

export const fetchComments = async () => {
  const response = await fetch(apiURL);
  const json = await response.json();

  return json;
};

export const fetchCommentById = async (id) => {
  const response = await fetch(`${apiURL}${id}`);
  const json = await response.json();

  return json;
};


export const postComment = async (name, comment, email) => {
  const commentCard = {name: name, comment: comment, email: email};
  console.log('COMMMENTCARD', commentCard);
  const response = await fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify(commentCard),
      headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }

  })
  console.log('RESPONSE', response);
  const json = await response.json();

  return json;
};

export const updateComment = async (name, comment, email, id) => {
  const commentCard = {name: name, comment: comment, email: email};
  const response = await fetch(`${apiURL}${id}`, {
      method: 'PUT',
      body: JSON.stringify(commentCard),
      headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }

  })
  console.log('RESPONSE', response);
  const json = await response.json();

  return json;
};
  
export const deleteComment = async (id) => {
  const response = await fetch(`${apiURL}${id}`, {
      method: 'DELETE',
      headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }

  })
  console.log('RESPONSE', response);
  const json = await response.json();

  return json;
};
  

// export const postComment = async (name, comment, email) => {
//   const commentCard = {name: name, comment: comment, email: email}
//   const response = await request.post(apiURL).send(commentCard);

//   return response;
// }