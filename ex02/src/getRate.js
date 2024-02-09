const getRate = async () => {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/45719bdb48e46def00d0f425/latest/EUR"
    );
    const data = await response.json();
    return data.conversion_rates.USD;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export default getRate;
