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
