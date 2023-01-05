import "./styles.scss";
interface props {
  txt: string;
}
export const Heading = ({ txt }: props) => {
  return <h2>{txt}</h2>;
};
