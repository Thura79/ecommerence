import React from 'react'
import { Loader } from '@mantine/core';


const Loading = () => {
  return (
    <div className=' flex items-center justify-center h-screen w-full'>
        <Loader color="indigo" variant="bars" />;
    </div>
  )
}

export default Loading