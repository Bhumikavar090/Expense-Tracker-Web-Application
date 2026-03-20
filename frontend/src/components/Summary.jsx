function Summary({ income, expense }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <p className="text-sm text-slate-400">Income</p>
        <h3 className="text-xl font-semibold text-green-400">${income}</h3>
      </div>

      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <p className="text-sm text-slate-400">Expenses</p>
        <h3 className="text-xl font-semibold text-red-400">${expense}</h3>
      </div>
    </div>
  )
}

export default Summary