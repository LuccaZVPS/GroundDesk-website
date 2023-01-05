import "./styles.scss";
export interface propsSolution {
  img: string;
  title: string;
  txt: string;
}
export const Box = ({ img, title, txt }: propsSolution) => {
  return (
    <div className="box-solution">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <div>
          <h3>{title}</h3>
          <p>{txt}</p>
        </div>
        <a href="">Learn More</a>
      </div>
    </div>
  );
};
