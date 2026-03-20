const express = require("express")
const router = express.Router()
const Transaction = require("../models/Transaction")

// GET all transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find()
  res.json(transactions)
})

// CREATE transaction
router.post("/", async (req, res) => {
  const transaction = new Transaction({
    text: req.body.text,
    amount: req.body.amount
  })

  const saved = await transaction.save()
  res.json(saved)
})

// DELETE transaction
router.delete("/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id)
  res.json({ message: "Transaction deleted" })
})

module.exports = router