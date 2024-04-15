/* Component which determines width of Dropbox based on length of option selected */

import React, { useRef, useState, useEffect } from 'react';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [width, setWidth] = useState<number>(0);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      const tmpSelect = document.createElement('select');
      tmpSelect.className = 'hidden';
      document.body.appendChild(tmpSelect);

      let maxWidth = 0;
      options.forEach((option) => {
        const tmpOption = document.createElement('option');
        tmpOption.textContent = option;
        tmpSelect.appendChild(tmpOption);
        maxWidth = Math.max(maxWidth, tmpOption.offsetWidth);
        tmpSelect.removeChild(tmpOption);
      });

      document.body.removeChild(tmpSelect);
      setWidth(maxWidth + 40);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [options]);

  return (
    <select
      ref={selectRef}
      className="bg-white py-2 text-gray-700 border-r"
      style={{ width: `${width}px` }}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
