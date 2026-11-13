
import { useState, useMemo } from "react";

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

function CurrencyConverter() {
  // Store the input amount and selected currencies
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Calculate the amount in the base currency
  const baseAmount = useMemo(() => {
    return Number(amount) / exchangeRates[fromCurrency];
  }, [amount, fromCurrency]);

  // Convert the base amount to the target currency
  const convertedAmount = baseAmount * exchangeRates[toCurrency];

  return (
    <main className="converter">
      <div className="converter-header">
        <span className="eyebrow">CURRENCY TOOLS</span>
        <h1>Currency Converter</h1>
        <p>Convert currencies with ease.</p>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="currency-row">
        <div className="form-group">
          <label htmlFor="fromCurrency">From</label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="toCurrency">To</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
      </div>

      <div className="result">
        <span>CONVERTED AMOUNT</span>
        <h2>
          {Number(convertedAmount).toFixed(2)} {toCurrency}
        </h2>
      </div>
    </main>
  );
}

export default CurrencyConverter;
export { CurrencyConverter };