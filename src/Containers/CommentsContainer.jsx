import React from 'react';
import CommentsList from '../Components/CommentsList.jsx';
import { useAllComments } from '../hooks/useAllComments.js';

const CommentsContainer = () => {
  const { comments, loading } = useAllComments();

  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />
    );

  return <CommentsList comments={comments} />;
};

export default CommentsContainer;
