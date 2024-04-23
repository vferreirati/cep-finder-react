import { useState } from 'react';
import UserInput from './UserInput';
import CepInfo from './CepInfo';

const CepSearch = () => {
  const [cepData, setCepData] = useState(null);

  async function handleCodeChanged(code) {
    const res = await fetch(`https://cep.awesomeapi.com.br/json/${code}`);
    const json = await res.json();
    setCepData(json);
  }

  return (
    <>
      <UserInput onCodeChanged={handleCodeChanged} />
      {cepData && <CepInfo cepData={cepData} />}
    </>
  );
};

export default CepSearch;
