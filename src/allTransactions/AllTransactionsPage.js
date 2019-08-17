import React from "react";
import Title from "../components/Title";
import PropTypes from "prop-types";
import TransactionCards from "./TransactionCards";
import SearchTransactions from "./SearchTransactions";

function AllTransactionsPage({ transactions, totalQuantities, coinData }) {
  const [filterValue, setFilterValue] = React.useState("");

  function handleFilterTransactionsChange(value) {
    setFilterValue(value);
  }

  //prepare for dropdown in SearchTransactions
  const transactionOptions = [
    ...Object.keys(totalQuantities).map(key => ({
      value: key,
      label: coinData[key] && coinData[key].name
    })),
    {
      value: "",
      label: "All Transactions"
    }
  ];

  const filteredTransactions =
    filterValue === ""
      ? transactions
      : transactions.filter(transaction => transaction.coin === filterValue);

  return (
    <>
      <Title size="L">All Transactions</Title>
      <SearchTransactions
        transactionOptions={transactionOptions}
        onFilterTransactionsChange={handleFilterTransactionsChange}
      />
      <TransactionCards
        coinData={coinData}
        transactions={filteredTransactions}
      />
    </>
  );
}

AllTransactionsPage.propTypes = {
  transactions: PropTypes.array.isRequired,
  totalQuantities: PropTypes.object.isRequired,
  coinData: PropTypes.object.isRequired
};

export default AllTransactionsPage;
