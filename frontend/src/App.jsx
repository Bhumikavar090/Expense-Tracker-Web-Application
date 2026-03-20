import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Balance from "./components/Balance"
import Summary from "./components/Summary"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import Chart from "./components/Chart"

import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {

  const [transactions, setTransactions] = useState([])

  const balance = transactions.reduce((acc, item) => acc + item.amount, 0)

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0)

  const expense = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0)

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/"
          element={
             <ProtectedRoute>

            <div className="min-h-screen bg-slate-950 text-white flex justify-center items-start pt-10">

              <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl p-6 space-y-6">

                <Header />

                <Balance balance={balance} />

                <Summary income={income} expense={expense} />

                <Chart income={income} expense={expense} />

                <TransactionList
                  transactions={transactions}
                  deleteTransaction={handleDeleteTransaction}
                />

                <AddTransaction addTransaction={handleAddTransaction} />

              </div>

            </div>
             </ProtectedRoute>
          }

        />

      </Routes>

    </BrowserRouter>
  )
}

export default App