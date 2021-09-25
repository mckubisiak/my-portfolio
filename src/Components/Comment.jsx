import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Comment = ({ id, name, comment, email, date }) => (
  <>
    <p>{name}</p>
    <p>{date}</p>
    <p>{email}</p>
    <p>{comment}</p>
    <Link to={`/${id}`}>Edit</Link>
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
