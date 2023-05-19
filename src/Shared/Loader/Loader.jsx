import React from 'react';

const Loader = () => {
    return (
        <div className='container h-96 flex items-center justify-center'>
            <div className='text-3xl md:text-8xl flex justify-center  items-end font-medium'><span className='animate-ping'>.</span> <span className='animate-ping'>.</span> <span className='animate-ping'>.</span></div>

        </div>
    );
};

export default Loader;