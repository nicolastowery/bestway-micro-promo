export default function Nav() {
  return (
    <nav>
      <ul className="text-xl flex font-semibold tracking-tight divide-x divide-slate-800">
        <NavItem to="t100" label="T100" />
        <NavItem to="mavic" label="Mavic 3M" />
        <NavItem to="t50" label="T50" />
      </ul>
    </nav>
  );
}

type NavItemProps = {
  to: string;
  label: string;
};

// TODO: Track state of active link for proper highlighting
function NavItem({ to, label }: NavItemProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      <button
        className="py-1 px-4 focus:text-yellow-300 transition duration-500"
        onClick={() => scrollTo(to)}
      >
        {label}
      </button>
    </li>
  );
}
