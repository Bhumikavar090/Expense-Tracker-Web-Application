function TransactionList({ transactions, deleteTransaction }) {

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Transactions</h3>

      <div className="space-y-2">
        {transactions.map(transaction => (
          <div
            key={transaction._id}
            className={`flex justify-between items-center p-3 rounded-lg border
            ${transaction.amount > 0
              ? "bg-green-900/20 border-green-700"
              : "bg-red-900/20 border-red-700"
            }`}
          >

            <span>{transaction.text}</span>

            <div className="flex items-center gap-3">

              <span className={`font-semibold 
                ${transaction.amount > 0 ? "text-green-400" : "text-red-400"}
              `}>
                ${transaction.amount}
              </span>

              <button
                onClick={() => deleteTransaction(transaction._id)}
                className="text-red-400 hover:text-red-600 font-bold"
              >
                ✕
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default TransactionList