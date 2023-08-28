import React from 'react';

export default function ReviewsItem({ author, content }) {
  return (
    <div>
      <h3>AUTHOR: {author}</h3>
      <p>{content}</p>
    </div>
  );
}
