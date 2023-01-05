import "./styles.scss";
interface props {
  txt: string;
  color: string;
  background: string;
}
export const Button = ({ txt, background, color }: props) => {
  return <button style={{ background, color }}>{txt}</button>;
};
