import React from 'react';
import valorIcon from '../../assets/valor.png';
import RiseLoader from 'react-spinners/RiseLoader';

export function Loading({ testId = 'loading-component' }) {
  return (
    <article data-testid={testId} className='min-h-screen h-full fixed top-0 left-0 grid items-center justify-center' style={{ minWidth:'100vw', background: 'rgba(255,255,255,0.8)' }}>
        <div>
        <img src={valorIcon} className='w-12 block m-auto mb-5' alt="dashboard demo app"></img>
        <RiseLoader color="red" />
        </div>
    </article>
  );
}
