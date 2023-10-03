import React, { useEffect, useState } from 'react';
import { LoaderWrapper, LoaderInner } from './Loader.styled';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <LoaderInner />
        </LoaderWrapper>
      )}
    </>
  );
};

export default Loader;