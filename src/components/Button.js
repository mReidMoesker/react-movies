function Button(props) {
  return (
    <button className={`btn ${props.type}`}>{props.text}</button>
  );
}

export default Button;