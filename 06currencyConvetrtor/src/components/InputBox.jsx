import React, { useId } from "react";
function InputBox({
  label,
  amount, // DOUBT: why this much parameters
  onAmountChange, // and why some differnce in parameter syntax
  onCurrencyChange,
  currencyOption = [],
  selectedCurrenncy = "usd",
  amountDisable = false,

  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* DOUBT: why there is a cahngee in the above syntax : */}
      {/* when we are including js in jsx we need to enclose
          it in {}  , here in the above code we can see that
          we are using the js code to include the props */}

      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) // ERRROR!!!
            // If onAmountChange is not a valid function or is falsy
            // (like null or undefined), it won't proceed to execute
            //the right-hand side expression.
            // If onAmountChange is a valid and truthy
            //function, it will then call onAmountChange
            // with the parsed numeric value of the input
            //element's value (Number(e.target.value)).
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrenncy}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}

          {/* the expantion of the above code is as follows :
              
              {currencyOption.map((currency) => {
                 return (
                   <option key={currency} value={currency}>
                   {currency}
                   </option>
                  );
              })}
        q*/}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
