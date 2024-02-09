const Convert = ({ amount, rate }) => {
  const convertAmount = amount * rate;
  return <h1>{convertAmount}</h1>;
};

export default Convert;
