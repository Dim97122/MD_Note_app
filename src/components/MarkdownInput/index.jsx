import React from 'react';
import useInputChange from './useInputChange.jsx';

const MarkdownInput = () => {
  const [input, handleInputChange] = useInputChange()

  return (
    <form>
      <div>
        <label>Titre de la Note:</label>
        <input type="text" name="title" onChange={handleInputChange} />
      </div>
      <div>
        <label>Corps de la Note:</label>
        <input type="text" name="body" onChange={handleInputChange} />
      </div>
      <input type="submit" value="Sauvegarder" />
    </form>
  )
}

export default MarkdownInput;
