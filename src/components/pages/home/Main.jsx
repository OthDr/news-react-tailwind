import React from 'react'
import Articles from './Articles';

function Main() {
  return (
    <div className='Main p-2 md:p-6 md:px-12'>
      <Articles category='general' />
      <Articles category='business'/>
      <Articles category='technology'/>
      <Articles category='health'/>
    </div>
  );
}

export default Main;