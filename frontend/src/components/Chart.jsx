import { PieChart, Pie, Cell, Tooltip } from "recharts"

function Chart({ income, expense }) {

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense }
  ]

  const COLORS = ["#22c55e", "#ef4444"]

  return (
    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-center">
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  )
}

export default Chart