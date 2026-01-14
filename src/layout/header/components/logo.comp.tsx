import DjiLogo from '../../../assets/dji-logo.png';
export default function Logo() {
  return (
    <div>
      <span className="text-2xl">BESTWAY AG</span>
      <img src={DjiLogo} alt="DJI Logo" className="h-7 inline-block" />
    </div>
  );
}
