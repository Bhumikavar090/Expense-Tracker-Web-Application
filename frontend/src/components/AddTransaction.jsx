import { useState } from "react"

function AddTransaction({ addTransaction }) {

  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text || !amount) return

    addTransaction({
      text,
      amount: +amount
    })

    setText("")
    setAmount("")
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Add Transaction</h3>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          placeholder="Enter description..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 border border-slate-700"
        />

        <input
          type="number"
          placeholder="Amount (negative = expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 border border-slate-700"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 p-2 rounded font-semibold"
        >
          Add Transaction
        </button>

      </form>
    </div>
  )
}

export default AddTransaction