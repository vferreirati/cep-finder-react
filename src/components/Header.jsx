import Zipcode from '../assets/zipcode.png';

const Header = () => {
  return (
    <div className="flex items-center flex-col">
      <img className="w-32 h-32" src={Zipcode} alt="" />
      <h1 className="font-bold text-3xl text-black mt-6">Busca CEP</h1>
    </div>
  );
};

export default Header;
