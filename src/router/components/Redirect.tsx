import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate(-1), 100);
    return () => {};
  });
  return <div></div>;
}
