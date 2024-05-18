import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [width, setWidth] = useState(0);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const textWidthRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Function to update width based on the current selected option
    const updateWidth = () => {
      if (textWidthRef.current) {
        textWidthRef.current.style.display = "inline"; // Make span visible to measure
        textWidthRef.current.textContent = selectedOption; // Set text to selected option
        const newWidth = textWidthRef.current.offsetWidth + 35; // Add padding to the calculated width
        textWidthRef.current.style.display = "none"; // Hide again
        if (selectRef.current) {
          selectRef.current.style.width = `${newWidth}px`;
        }
      }
    };

    // Call updateWidth to initially set the width
    updateWidth();

    // Setup to adjust the width on window resize
    const handleResize = () => {
      updateWidth();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedOption, options]);

  return (
    <>
      <select
        ref={selectRef}
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
        style={{ width: `${width}px` }}
        className="bg-gray-300 py-2 text-gray-700 border-r"
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span ref={textWidthRef} style={{ display: 'none', whiteSpace: 'pre' }} />
    </>
  );
};

export default Dropdown;
