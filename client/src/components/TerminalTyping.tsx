import { useState, useEffect } from "react";

interface TerminalTypingProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
  onComplete?: () => void;
}

export default function TerminalTyping({
  lines,
  typingSpeed = 50,
  lineDelay = 500,
  onComplete,
}: TerminalTypingProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] =
            (newLines[currentLineIndex] || "") + currentLine[currentCharIndex];
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, lineDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay, onComplete]);

  return (
    <div className="font-mono text-sm md:text-base">
      <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-lg p-4 md:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-muted-foreground text-xs">terminal</span>
        </div>
        <div className="space-y-1">
          {displayedLines.map((line, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-primary select-none">$</span>
              <span className="text-foreground">{line}</span>
              {index === currentLineIndex && !isComplete && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
              )}
            </div>
          ))}
          {!isComplete && currentLineIndex < lines.length && displayedLines.length <= currentLineIndex && (
            <div className="flex items-start gap-2">
              <span className="text-primary select-none">$</span>
              <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
