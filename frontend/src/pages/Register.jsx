import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post("http://localhost:5000/auth/register", {
      name,
      email,
      password
    })

    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl space-y-4">

        <h2 className="text-xl font-bold">Register</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 w-full bg-slate-800 rounded"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 w-full bg-slate-800 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 w-full bg-slate-800 rounded"
        />

        <button className="bg-indigo-500 px-4 py-2 rounded w-full">
          Register
        </button>

      </form>
    </div>
  )
}

export default Register