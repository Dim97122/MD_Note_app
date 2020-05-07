import React from 'react';
import NoteList from '../NoteList';
import Converter from '../Converter';
import './NoteDeck.css'


const NoteDeck = () => {
  return (
    <>
      <div style={{height: '100%'}} className="d-flex py-2 bg-dark note-deck">
        <div style={{width:'30vw'}}>
          < NoteList />
        </div>
        <div style={{width:'70vw'}} className="px-4">
        < Converter />
        </div>
      </div>
    </>
  )
}

export default NoteDeck;
