import React, { useState } from 'react';
import { postComment } from '../services/fetchComments';

const CreateComment = () => {
  const [name, setName] = useState('name');
  const [comment, setComment] = useState('comment');
  const [email, setEmail] = useState('email');

  const handleSubmit = async (event) => {
    event.preventDefault();
    postComment(name, comment, email);
  };

  // const handleNameChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   // setName(event.target.value)
  //   // setComment(event.target.comment)
  //   // setEmail(event.target.email)
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  return (
    <>
      <p>Add a comment about Kubisiak!</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type='text'
          name='comment'
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        />
        <input
          type='text'
          name='email'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreateComment;
