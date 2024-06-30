import { useEffect, useState } from "react";
import {Github} from 'lucide-react';


function TestComponent() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [safeOutput, setSafeOutput] = useState('');
  
    useEffect(() => {
      setOutput(input);
      const URLregex = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$'); // fragment locator
    
        if(URLregex.test(input)){
            setSafeOutput(input);
        }
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
          <a href={output}>
          <Github />
          </a>
        </div>
        <div>
            <h2>Safe Output</h2>
            <a href={safeOutput}>
                <Github />
            </a>
        </div>
  
      </div>
      
      </div>
    );
}

export default TestComponent