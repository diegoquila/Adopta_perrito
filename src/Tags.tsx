// Tags.jsx
import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ text, color }) => {
  return <Badge style={{ backgroundColor: color }}>{text}</Badge>;
};

export default Tags;
