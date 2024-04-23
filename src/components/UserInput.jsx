import { useRef } from 'react';

const UserInput = ({ onCodeChanged }) => {
  const inputRef = useRef();

  function handleButtonClick() {
    const value = inputRef.current.value;

    if (value.length === 8) {
      onCodeChanged(value);
    }
  }

  return (
    <div className="flex flex-col items-start mt-12">
      <label className="text-sm text-gray-900">CEP:</label>
      <div className="flex">
        <input
          ref={inputRef}
          className="bg-gray-50 border text-sm text-gray-900 ring-0 outline-none border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="60025002"
          type="number"
          required
        />
        <button
          className="bg-blue-500 text-white rounded-md p-3 ml-2"
          onClick={handleButtonClick}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default UserInput;
