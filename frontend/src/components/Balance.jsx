function Balance({ balance }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 shadow-lg">
      <p className="text-sm opacity-80">Current Balance</p>
      <h2 className="text-3xl font-bold mt-1">${balance}</h2>
    </div>
  )
}

export default Balance