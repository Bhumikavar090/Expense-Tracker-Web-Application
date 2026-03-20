const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const transactionRoutes = require("./routes/transactions")
const authRoutes = require("./routes/auth")

const app = express()   // ← app must be created BEFORE using it

connectDB()

app.use(cors())
app.use(express.json())

// routes
app.use("/transactions", transactionRoutes)
app.use("/auth", authRoutes)

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})