import { useEffect, useState } from "react";

const App = () => {

  const[password, setPassword] = useState("")
  const[isDigit, setIsDigit] = useState(false)
  const[isSpecialCharacter, setisSpecialCharacter] = useState(false)

  function randomPasswordGenrator(length) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characterPool = letters;
    if (isDigit) characterPool += digits;
    if (isSpecialCharacter) characterPool += specialCharacters;
  
    if (characterPool.length === 0) {
      alert("Please select at least one option for password generation.");
      return;
    }
  
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }
  
    setPassword(generatedPassword);
  }

  useEffect(() => {
    randomPasswordGenrator(10)
  }, [isDigit, isSpecialCharacter])

  return (
    <>
      <div className="bg-[#232323] text-white w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Password generator app</h1>
          <input
            type="text"
            disabled
            value={password}
            className="p-2 border border-gray-400 rounded bg-gray-700 text-white"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="specialChars" className="w-4 h-4" onChange={(e) => setisSpecialCharacter(e.target.checked)} />
            <label htmlFor="specialChars" className="text-sm">
              Include Special Characters
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="digits" className="w-4 h-4" onChange={(e) => setIsDigit(e.target.checked)} />
            <label htmlFor="digits" className="text-sm">
              Include Digits
            </label>
          </div>
          <button className="p-2 bg-blue-500 rounded hover:bg-blue-600" onClick={() => randomPasswordGenrator(10)}>
            Random password
          </button>
        </div>
      </div>
    </>
  );
};

export default App;


