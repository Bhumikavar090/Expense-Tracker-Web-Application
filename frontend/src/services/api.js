import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000"
})

export const getTransactions = () => API.get("/transactions")

export const addTransaction = (transaction) =>
  API.post("/transactions", transaction)

export const deleteTransaction = (id) =>
  API.delete(`/transactions/${id}`)