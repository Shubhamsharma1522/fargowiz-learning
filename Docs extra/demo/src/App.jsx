import React, { useState } from "react";
import "./App.css";

function App() {
  const [showToolbox, setShowToolbox] = useState(false);

  const handleSelection = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText !== "") {
      setShowToolbox(true);
    } else {
      setShowToolbox(false);
    }
  };

  const toolbox = (
    <div>
      <button>Bold</button>
      <button>Italic</button>
      <button>Underline</button>
    </div>
  );

  return (
    <div>
      <div className="App">
        <textarea
          id="textArea"
          rows="4"
          cols="50"
          onMouseUp={handleSelection}
        ></textarea>
        {showToolbox && toolbox}
      </div>
    </div>
  );
}

export default App;
