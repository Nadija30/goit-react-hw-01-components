import PropTypes from 'prop-types'
export const TransactionHistory = ({ items }) => {
    return (
     <table className="transactionHistory">
      <thead className="header">
        <tr className="headerTitle">
          <th className="headerData">Type</th>
          <th className="headerData">Amount</th>
          <th className="headerData">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className="tableTitle" key={id}>
              <td className="tableType">{type}</td>
              <td className="tableAmount">{amount}</td>
              <td className="tableCurrency">{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};