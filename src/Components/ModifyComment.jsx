import React from 'react';
import { Link } from 'react-router-dom';
import { useAComment } from '../hooks/useAllComments.js';
import { deleteComment, updateComment } from '../services/fetchComments.js';

const ModifyComment = () => {
  const { name, comment, email, id, loading } = useAComment();



  const handleUpdate = async (event) => {
    event.preventDefault();
    updateComment(id);
    
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    deleteComment(id);
    
  };

  const handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

  };

  if (loading)
    return (
      <img src='https://i.redd.it/o6m7b0l6h6pz.gif' alt='loading spinner' />
    );

  return (
    <>
    <form onSubmit={handleUpdate}>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={name}
        />
        <input
          type='text'
          name='comment'
          onChange={handleChange}
          value={comment}
        />
        <input
          type='text'
          name='email'
          onChange={handleChange}
          value={email}
        />
        <button>Update</button>
      </form>
      <button onClick={handleDelete}>Delete Comment</button>
    <Link to={'/comments'}>Return to comments</Link>
  </>
  );
};

export default ModifyComment;
