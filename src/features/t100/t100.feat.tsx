import Section from '../../layout/section/section.comp';
import T100Photo from '../../assets/t100.png';
export default function T100() {
  return (
    <Section id="t100" className="bg-slate-950">
      <img src={T100Photo} alt="T100 Drone" className="h-[80vh]" />
    </Section>
  );
}
