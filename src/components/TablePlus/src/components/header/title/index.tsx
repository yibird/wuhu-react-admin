import React from 'react';
import { useSharedState } from '../../../context';

export default function TableHeaderTitle() {
  const [{ title }] = useSharedState();
  if (typeof title === 'boolean' && !title) return;
  if (typeof title === 'object' && !title) return title;
  return <div></div>;
}
