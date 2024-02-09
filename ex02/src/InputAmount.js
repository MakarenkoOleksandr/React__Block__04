const InputAmount = ({ onChange }) => {
  return (
    <input
      type="number"
      onChange={(e) => onChange(parseFloat(e.target.value))}
    ></input>
  );
};

export default InputAmount;
