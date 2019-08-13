import React from "react";
import Title from "../components/Title";
import PropTypes from "prop-types";
import TransactionCards from "./TransactionCards";
import SearchTransactions from "./SearchTransactions";

function AllTransactionsPage({
  history,
  transactions,
  totalQuantities,
  coinData
}) {
  const [filteredTransactions, setFilteredTransactions] = React.useState(null);

  function handleSearchTransactionsChange(filteredTransactions) {
    setFilteredTransactions(filteredTransactions);
  }

  //prepare for dropdown in SearchTransactions
  const transactionOptions = [
    ...Object.keys(totalQuantities).map(key => ({
      label: coinData[key] && coinData[key].name,
      value: key
    })),
    {
      label: "All Transactions",
      value: null
    }
  ];

  return (
    <>
      <Title size="L">All Transactions</Title>
      <SearchTransactions
        transactionOptions={transactionOptions}
        transactions={transactions}
        onSearchTransactionsChange={handleSearchTransactionsChange}
      />
      <TransactionCards
        coinData={coinData}
        transactions={
          filteredTransactions === null ? transactions : filteredTransactions
        }
      />
    </>
  );
}

AllTransactionsPage.propTypes = {
  transactions: PropTypes.array.isRequired,
  totalQuantities: PropTypes.object.isRequired
};

export default AllTransactionsPage;
