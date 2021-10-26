import React from 'react';
import { useAllComments } from '../hooks/useAllComments.js';
import Comment from './Comment';
import CreateComment from './CreateComment.jsx';

const CommentsList = () => {
  const { comments, loading } = useAllComments();

  if (loading)
    return (
      <img src='https://i.redd.it/o6m7b0l6h6pz.gif' alt='loading spinner' />
    );

  return (
    <>
      <CreateComment />
      <ul aria-label='comments' name='comments'>
        {comments.map((comments) => (
          <li key={comments.id}>
            <Comment
              id={comments.id}
              name={comments.name}
              comment={comments.comment}
              email={comments.email}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsList;
