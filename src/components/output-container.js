import React from 'react';
import marked from 'marked';

const OutputContainer = ({text})=>{
    return(
    <div>
    <label>Output:</label>
    <div className="container" dangerouslySetInnerHTML={{__html:marked(text)}}>
    </div>
    </div>
  );

}

export default OutputContainer;
