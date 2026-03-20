import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password
      })

      // save token
      localStorage.setItem("token", res.data.token)

      // redirect to dashboard
      navigate("/")

    } catch (error) {
      console.error(error)
      alert("Login failed. Check your email or password.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-xl shadow-xl w-80 space-y-4"
      >

        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-slate-800"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-slate-800"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default Login