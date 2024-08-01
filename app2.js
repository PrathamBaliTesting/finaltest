import React, { useState } from 'react';

function App() {
    const [text, setText] = useState('This is the initial text');

    const handleClick = () => {
        setText('The text has changed!');
    };

    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>{text}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default App;
