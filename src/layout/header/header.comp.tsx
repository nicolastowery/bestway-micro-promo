import Logo from './components/logo.comp';
import Nav from './components/nav.comp';

export default function Header() {
  return (
    <header className="h-18.75 sticky top-0 z-10 bg-slate-950 border-slate-800 border-b text-slate-200 flex items-end p-5 justify-between">
      <Logo />
      <Nav />
    </header>
  );
}
