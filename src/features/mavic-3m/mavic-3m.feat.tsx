import Section from '../../layout/section/section.comp';
import Mavic3mPhoto from '../../assets/mavic-3m.png';
export default function Mavic3m() {
  return (
    <Section id="mavic" className="bg-slate-200">
      <img src={Mavic3mPhoto} alt="Mavic 3M Drone" className="h-[45vh]" />
    </Section>
  );
}
