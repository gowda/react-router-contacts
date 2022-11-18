import React from 'react';
import { useFetcher } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Favorite({ contact }) {
  const fetcher = useFetcher();
  // yes, this is a `let` for later
  // eslint-disable-next-line react/prop-types
  let {favorite} = contact;
  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }

  return (
    <fetcher.Form method='post'>
      <button
        type='button'
        name='favorite'
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}
