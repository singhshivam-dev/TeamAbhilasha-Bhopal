import { useState } from "react"
import Separator from "../ui/Separator"

export default function Query() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      alert("Please fill in Name and Phone number!")
      return
    }

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdZEY7RXnfCVJUY9BZO2Dmqzh-3aUq5DNVl7DuInELjJ3cJkw/formResponse"

    const formBody = new URLSearchParams()
    formBody.append("entry.472271913", formData.name)   // replace with actual entry IDs
    formBody.append("entry.511016150", formData.phone)
    formBody.append("entry.930032305", formData.email)
    formBody.append("entry.1942713104", formData.message)

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // required for Google Forms
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    })
      .then(() => {
        setSuccess("Form submitted successfully!")
        setFormData({ name: "", phone: "", email: "", message: "" })
      })
      .catch(() => {
        setSuccess("There was an error submitting the form.")
      })
  }

  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div>
          <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize">
            Submit your queries
          </h1>
          <Separator />
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#F09A3E]"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#F09A3E]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#F09A3E]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#F09A3E]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#F09A3E] text-white uppercase text-center font-semibold p-4 rounded-md hover:bg-[#FFCB08] hover:text-blue-900 transition duration-500"
          >
            Submit
          </button>
        </form>

        {success && <p className="mt-4 text-center text-green-600 font-semibold">{success}</p>}
      </section>
    </div>
  )
}
