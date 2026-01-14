import Mavic3m from '../../features/mavic-3m/mavic-3m.feat';
import T100 from '../../features/t100/t100.feat';
import T50 from '../../features/t50/t50.feat';

export default function Main() {
  return (
    <main className="h-full">
      <T100 />
      <Mavic3m />
      <T50 />
    </main>
  );
}
