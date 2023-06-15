import "./Input.css"
const Input = ({ placeHolder, label,type }) => {
  return (
    <>
      <label htmlFor={label}>{label} </label>
      <input placeholder={placeHolder} id={label} type={type}/>
    </>
  );
};
export default Input;
