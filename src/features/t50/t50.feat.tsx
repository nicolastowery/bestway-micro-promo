import Section from '../../layout/section/section.comp';
import T50Photo from '../../assets/t50.png';
export default function T50() {
  return (
    <Section id="t50" className="bg-slate-950">
      <img src={T50Photo} alt="T50 Drone" className="h-[75vh]" />
    </Section>
  );
}
