import React, { useEffect } from 'react';
import useInputChange from './useInputChange.jsx';
import './MarkdownInput.css'
import '../Button/Button.css';

const MarkdownInput = (props) => {
  const [input, handleInputChange] = useInputChange()

  const saveItem = (e) => {
    e.preventDefault();
    localStorage.setItem(input.title, input.body);
    window.location.reload(false);
  }

  useEffect(() => {
    props.convert(input.title, input.body);
  }, [input, props]);

  return (
    <form className="mt-5">
      <div className="mb-3">
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          className="grey-input"
        />
      </div>
      <div className="mb-3">
        <textarea
          type="text"
          name="body"
          rows="6"
          cols="40"
          onChange={handleInputChange}
          className="grey-input"
        />
      </div>
      <input
        onClick={saveItem}
        type="submit"
        value="Sauvegarder"
        className="btn red-button"
      />
    </form>
  )
}

export default MarkdownInput;
