import "./Button.css";

const Button = ({ name, type }) => {
  return (
    <>
      <button className="btn-normal" type={type}>
        {name}
      </button>
    </>
  );
};
export default Button;
