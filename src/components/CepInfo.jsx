const CepInfo = ({ cepData }) => {
  return (
    <div className="justify-start mt-6">
      <h1 className="font-bold text-xl">Resultado:</h1>
      <div className="grid gap-6 grid-cols-2 mt-2 border border-gray-300 p-6 rounded-lg shadow-lg bg-gray-50">
        <CepCell label="Tipo" value={cepData.address_type} />
        <CepCell label="Endereço" value={cepData.address_name} />
        <CepCell label="Bairro" value={cepData.district} />
        <CepCell label="Cidade" value={cepData.city} />
        <CepCell label="Estado" value={cepData.state} />
      </div>
    </div>
  );
};

export default CepInfo;

const CepCell = ({ label, value }) => {
  return (
    <div>
      <label className="text-gray-900 text-sm font-bold mb-4">{label}</label>
      <h1 className="text-black text-lg ">{value}</h1>
    </div>
  );
};
