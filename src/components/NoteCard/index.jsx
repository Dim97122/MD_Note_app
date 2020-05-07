import React from 'react';
import Showdown from "showdown";

const NoteCard = (props) => {
  const converter = new Showdown.Converter();
  var htmlTitle = converter.makeHtml(props.title);
	var htmlNote = converter.makeHtml(props.body);
	const createMarkupNote = () => {
		return {
			__html: htmlNote,
		}
	};

	const createMarkupTitle = () => {
		return {
			__html: htmlTitle,
		}
	};

  return (
    <>
      <div className="note-card-wrapper">
        <div
          dangerouslySetInnerHTML={createMarkupTitle()}
          style={{color: '#c82e23', fontSize:'2.2em',  fontWeight: 'bold'}}
        >
        </div>
        <div
          dangerouslySetInnerHTML={createMarkupNote()}
          style={{color: 'white'}}
        >
        </div>
      </div>
    </>
  )
}



export default NoteCard;
