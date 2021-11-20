import dynamic from 'next/dynamic';
import React from 'react';

const NoSsr: React.FC = props => <>{props.children}</>;

//import after after all other content are loaded as a microTask, since it will render a 3d voxel
export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
});
