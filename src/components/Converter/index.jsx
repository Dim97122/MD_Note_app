import React, { useState } from 'react';
import Showdown from "showdown";
import MarkdownInput from '../MarkdownInput';
import NoteDisplay from '../NoteDisplay';
import './Converter.css'


const Converter = () => {
  const [markdown, setMarkdown] = useState("Hello !");
  const [newTitle, setNewTitle] = useState();
  const [newBody, setNewBody] = useState();
  const converter = new Showdown.Converter();

  const onChangeHtml = (title, body) => {
    let htmlTitle = converter.makeHtml(title);
    let htmlBody = converter.makeHtml(body);
    setNewTitle(htmlTitle);
    setNewBody(htmlBody);
  }

  return (
    <>
      <div className="converter-wrapper py-3">
        < NoteDisplay
          converted_title={newTitle}
          converted_body={newBody}
        />
        < MarkdownInput
          pieceOfHtml= {markdown}
          convert={onChangeHtml}
        />
      </div>
    </>
  )
}

export default Converter;
