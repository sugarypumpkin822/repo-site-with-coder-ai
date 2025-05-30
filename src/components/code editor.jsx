import React from 'react';
import { motion } from 'framer-motion';

const CodeEditor = ({ code, language = 'javascript' }) => {
  const lines = code.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="code-editor rounded-lg p-6 overflow-auto max-h-[700px] w-full"
    >
      {lines.map((line, index) => (
        <div key={index} className="code-line">
          <div className="line-number">{index + 1}</div>
          <div className="code-content">
            {formatCode(line, language)}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const formatCode = (line, language) => {
  if (language === 'javascript' || language === 'js') {
    line = line.replace(
      /(const|let|var|function|return|if|else|for|while|import|export|from|class|async|await)/g,
      '<span class="keyword">$1</span>'
    );
    
    line = line.replace(
      /(['"`])(.*?)(['"`])/g,
      '<span class="string">$1$2$3</span>'
    );
    
    line = line.replace(
      /(\/\/.*$)/g,
      '<span class="comment">$1</span>'
    );
    
    line = line.replace(
      /(\w+)(\()/g,
      '<span class="function">$1</span>$2'
    );
    
    line = line.replace(
      /(const|let|var)\s+(\w+)/g,
      '<span class="keyword">$1</span> <span class="variable">$2</span>'
    );
  }
  
  return <div dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }} />;
};

export default CodeEditor;
