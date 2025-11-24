import { useState } from "react"
import Separator from "../ui/Separator"

// https://docs.google.com/forms/d/e/1FAIpQLSeFxXDvZe68DD1Io_HP59L3G4pTzPPNOCscGCGMLDOzth2sPw/viewform?usp=pp_url&entry.1072567605=testDe&entry.2091499292=789632146&entry.2053298036=testDeplo@g.com&entry.1868425652=directDeploy+test
export default function AgentApply() {
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

    // const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeFxXDvZe68DD1Io_HP59L3G4pTzPPNOCscGCGMLDOzth2sPw/formResponse"

    // const formBody = new URLSearchParams()
    // formBody.append("entry.1072567605", formData.name)   // replace with actual entry IDs
    // formBody.append("entry.2091499292", formData.phone)
    // formBody.append("entry.2053298036", formData.email)
    // formBody.append("entry.1868425652", formData.message)

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
    <div className="bg-[#F7F5F4]">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div>
          <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize">
            Apply For Agent
          </h1>
          <Separator />
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-1 bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
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
            id="reviews"
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
