import React from 'react'
import Articles from './Articles';

function Main() {
  return (
    <div className='Main p-2 md:p-6 md:px-12'>
      <Articles />
      <Articles />
      <Articles />
    </div>
  );
}

export default Main;