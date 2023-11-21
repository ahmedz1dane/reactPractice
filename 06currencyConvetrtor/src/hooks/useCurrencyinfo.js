import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      //Here the data gotten from the API is converted
      // into  JSON format
      //because
      //When you use fetch to get data from an API
      //, the data returned isn't immediately in JSON
      // format. It arrives in the form of a Response object,
      // which needs to be converted

      .then((res) => setData(res[currency]));
    // type the API in google by appending the currency part in it
    // so u can see that it contain currency part
    // if we change that currency part we get the
    // info abut that currency
    //we use the above code to get that currency part
    // only from the API
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
