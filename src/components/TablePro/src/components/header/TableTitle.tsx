import React from 'react';
import { useSharedState } from '../../context';
function TableTitle() {
  const [{ action, actionPosition }, setState] = useSharedState();
  return <div>title</div>;
}
export default TableTitle;
