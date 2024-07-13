import React from 'react';
import  {Form} from "../Container/Form";



const Authentication = () => {
  return (  
    <div className='w-full h-screen flex'>
      <div className='w-full lg:w-1/2 flex items-center justify-center bg-gray-200'>
      <Form/>
      </div>
      <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce"/> 
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
    
        
  );
};

export default Authentication