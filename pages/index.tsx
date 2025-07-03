
import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Index = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  
  const terminalLines = [
    "$ whoami",
    "> Pinak Dasgupta",
    "",
    "$ cat about.txt",
    "> Welcome to my terminal portfolio!",
    "> MSc Cyber Security student passionate about creating secure digital experiences.",
    "",
    "$ ls -la skills/",
    "> Penetration Testing",
    "> Audit Documentation", 
    "> Network Security",
    "> Bash Scripting",
    "> Python Scripting",
    "> Linux Environments",
    "> Coding & Development",
    "",
    "$ cat contact.txt",
    "> Ready to connect and build something awesome together!",
    "",
    "$ █"
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => [...prev, terminalLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-4">terminal — pinak@portfolio</span>
        </div>
        
        {/* Terminal Body */}
        <div className="bg-black rounded-b-lg p-6 min-h-[600px] border-2 border-gray-800">
          <div className="space-y-2">
            {displayedText.map((line, index) => (
              <div key={index} className="flex">
                <span className={line.startsWith('$') ? 'text-blue-400' : 
                              line.startsWith('>') ? 'text-green-400' : 'text-gray-400'}>
                  {line}
                </span>
              </div>
            ))}
          </div>
          
          {/* Links Section */}
          {currentLine >= terminalLines.length && (
            <div className="mt-8 space-y-4">
              <div className="text-blue-400">$ open links</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">&gt;</span>
                  <a 
                    href="https://github.com/Pinak-cs?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline flex items-center space-x-2 transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub Repositories</span>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">&gt;</span>
                  <a 
                    href="https://www.linkedin.com/in/pinak-dasgupta-237692235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline flex items-center space-x-2 transition-colors"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="text-blue-400">$ echo "Thanks for visiting!"</div>
                <div className="text-green-400">&gt; Feel free to reach out for collaborations or just to say hi! 👋</div>
                <div className="text-green-400">&gt; Type 'help' for more commands...</div>
              </div>
              
              <div className="flex items-center mt-4">
                <span className="text-blue-400">$ </span>
                <span className="animate-pulse text-green-400">█</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer with source code info */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>Portfolio built with React + TypeScript + Tailwind CSS</p>
          <p>Source code available for customization</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
