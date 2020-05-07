import React from 'react';
import Showdown from "showdown";
import Button from '../Button';
import NoteCard from '../NoteCard';
import './Notelist.css';

const NoteList = () => {
  const converter = new Showdown.Converter();

  const notes_content = [];
  for( let i = 0; i < localStorage.length; i++){
    notes_content.push(
      < NoteCard
        title={localStorage.key(i)} body={localStorage.getItem(localStorage.key(i))}
      />
    );
  }
  const listItems = notes_content.map((note) =>
    <li>{note}</li>
  );

  const refresh = () => {
    window.location.reload(false)
  }

  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-center py-4">
          <div onClick={refresh}>
            < Button value="Ajouter une note"/>
          </div>
        </div>
        <div className="">
          <ul>{listItems}</ul>
        </div>
      </div>
    </>
  )
}

export default NoteList;
