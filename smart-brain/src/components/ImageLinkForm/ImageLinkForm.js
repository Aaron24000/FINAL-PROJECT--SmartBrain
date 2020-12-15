import React from 'react';
import 'tachyons';

const ImageLinkForm = () => {
    return (
      <div>
      <p className= 'f3'>
          {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div>
          <input ClassName='f4 pa2 w-70 center' type='tex' />
          <button ClassName='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
      </div>
      </div>
    );
  };

export default ImageLinkForm;