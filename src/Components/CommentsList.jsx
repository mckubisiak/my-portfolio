import React from 'react';
import { useAllComments } from '../hooks/useAllComments.js';
import Comment from './Comment';

const CommentsList = () => {
  const { comments, loading } = useAllComments();

  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />
    );

  return (
    <ul aria-label="comments" name="comments">
      {comments.map((comments) => (
        <li key={comments.image}>
          <Comment
            id={comments.id}
            name={comments.name}
            email={comments.email}
            date={comments.date}
          />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
