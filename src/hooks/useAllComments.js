import { useState, useEffect } from 'react';
import { fetchComments } from '../services/fetchComments';

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
