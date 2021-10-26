import { useState, useEffect } from 'react';
import { fetchCommentById, fetchComments } from '../services/fetchComments';
import { useParams } from 'react-router-dom';

export const useAllComments = () => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      const comments = await fetchComments();
      setComments(comments);
      setLoading(false);
    };
    loadComments();
  }, []);

  return { comments, loading };
};

// export const useAComment = () => {
//   const [loading, setLoading] = useState(true);
//   const [comment, setComment] = useState([]);

//   useEffect(() => {
//     const loadComment = async () => {
//       const comment = await fetchCommentById();
//       setComment(comment);
//       setLoading(false);
//     };
//     loadComment();
//   }, []);

//   return { comment, loading };
// };

export const useAComment = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const loadComment = async () => {
      const commentCard = await fetchCommentById(id);
      setComment(commentCard.comment);
      setName(commentCard.name);
      setEmail(commentCard.email);
      setLoading(false);
    };
    loadComment();
  }, [id]);

  return { name, email, comment, id, loading };
};
