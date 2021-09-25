import request from 'superagent';

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


// export const postComment = async (name, comment, email) => {
//   const commentCard = {name: name, comment: comment, email: email}
//   const response = await fetch(apiURL, {
//       method: 'POST',
//       body: JSON.stringify(commentCard)
//   })
//   const json = await response.json();

//   return json;
// };

export const postComment = async (name, comment, email) => {
  const commentCard = {name: name, comment: comment, email: email}
  const response = await request.post(apiURL).send(commentCard);

  return response;
}