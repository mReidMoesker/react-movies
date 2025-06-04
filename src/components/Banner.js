import Button from "./Button";

function Banner(props) {
  return (
    <div className="banner center flex poppins">
      <div className="banner-text">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="banner-buttons">
          <Button type="primary" text={props.primaryBtnText} />
          <Button type="secondary" text={props.secondaryBtnText} />
        </div>
      </div>
    </div>
  );
}

export default Banner;