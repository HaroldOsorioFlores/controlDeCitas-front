const Input = ({ placeHolder, label }) => {
  return (
    <>
      <label htmlFor={label}>{label} </label>
      <input type="text" placeholder={placeHolder} id={label} />
    </>
  );
};
export default Input;
