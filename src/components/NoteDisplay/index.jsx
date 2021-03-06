import React from 'react';
import Showdown from "showdown";


const NoteDisplay = (props) => {
  console.log(props.converted_title);


	const createMarkupNote = () => {
		return {
			__html: props.converted_body
		}
	};

	const createMarkupTitle = () => {
		return {
			__html: props.converted_title
		}
	};

  return (
    <>
      <div className= "border mb-3 d-flex flex-column display-wrapper" style={{height:'30vh'}}>
        <div
          dangerouslySetInnerHTML={createMarkupTitle()}
          style={{color:"red", fontWeight: "bold"}}
        >
        </div>
        <div
          dangerouslySetInnerHTML={createMarkupNote()}
          style={{maxWidth: "100%", color:"white"}}
        >
        </div>
      </div>
    </>
  )
}

export default NoteDisplay;
