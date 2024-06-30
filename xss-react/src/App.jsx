
import './App.css'
import  { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [safeOutput, setSafeOutput] = useState('');

  useEffect(() => {
    setOutput(input);
    setSafeOutput(DOMPurify.sanitize(input));
  }, [input]);

  return (
    <div>
    <div className="">
      <h1>XSS Test</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        <h2>Output:</h2>
        {/* <div dangerouslySetInnerHTML={{ __html: output }} /> */}
        <h2>Safe Output:</h2>
          <div className="output">{output}</div>
          {/* If using dangerouslySetInner HTML */}
          <dv dangerouslySetInnerHTML={{ __html: safeOutput }} />
      </div>

    </div>
    
    </div>
  );
}


export default App;
