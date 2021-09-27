import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Comment = ({ id, name, comment, email }) => (
  <>
    <p>{name}</p>
    <p>{email}</p>
    <p>{comment}</p>
    <Link to={`/comments/${id}`}>Edit</Link>
  </>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string,
  email: PropTypes.string,
};

export default Comment;
