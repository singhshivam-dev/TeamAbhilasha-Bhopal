import React, { useState } from "react"
import Separator from "../ui/Separator"

export default function Agents() {
  const agents = [
    { name: "Digvijay Singh", phone: "70241 48873" },
    { name: "Mahak Asudani", phone: "91316 86265" },
    { name: "Shanti Sharma", phone: "94795 69276" },
    { name: "Asha Kacher", phone: "99070 87081" },
    { name: "Krishna Gaur", phone: "98937 83223" },
    { name: "Snehlata Parihar", phone: "79068 29831" },
    { name: "Kanchan Sondhiya", phone: "81031 51479" },
    { name: "Seema Rai", phone: "97547 14101" },
    { name: "Bindu Pande", phone: "97541 03118" },
    { name: "Varsha Sen", phone: "93294 36135" },
    { name: "Asha Sahu", phone: "99070 87081" },
    { name: "Manisha Ahirwar", phone: "83052 40340" },
    { name: "Sangeeta Patel", phone: "77720 22372" },
    { name: "Rupali Darshana", phone: "94066 54482" },
    { name: "Vijay Kumar Fate", phone: "94244 76075" },
    { name: "Suman Baghel", phone: "97709 15831" },
    { name: "Mahesh Kumar Matre", phone: "97551 77796" },
    { name: "Arpana Manna", phone: "81202 31576" },
    { name: "Sunil Singh Rajput", phone: "98263 35395" },
    { name: "Sanju Meena", phone: "73898 26269" },
    { name: "Leena Agrawal", phone: "93005 30301" },
    { name: "Manish Kumar Nigam", phone: "88394 97615" },
  ]

  const [showAll, setShowAll] = useState(false)
  const visibleAgents = showAll ? agents : agents.slice(0, 6)

  return (
    <div className="bg-white">
      <section id="agents" className="max-w-4xl mx-auto px-4 py-12">
        <div>
          <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize">
            Team Abhilasha
          </h1>
          <Separator />
        </div>

        {/* Agents Grid */}
        <ul className="grid gap-4 sm:grid-cols-2 mt-6">
          {visibleAgents.map((agent, idx) => (
            <li
              key={idx}
              className="group bg-[#F09A3E] shadow-sm uppercase border border-gray-200 rounded-xl 
                 p-4 flex flex-row items-center justify-between flex-wrap 
                 hover:shadow-md transition duration-500 hover:bg-[#FFCB08]"
            >
              <span className="font-semibold text-white  group-hover:text-blue-900">{agent.name}</span>
              <a
                href={`tel:${agent.phone.replace(/\s+/g, "")}`}
                className="text-white underline  font-semibold mt-2 sm:mt-0 hover:underline group-hover:text-blue-900"
              >
                {agent.phone}
              </a>
            </li>
          ))}
        </ul>

        {/* View More / Less */}
        <div id="apply" className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className=" text-blue-500 font-semibold px-6 py-2 rounded-md hover:bg-blue-200 hover:text-blue-900 transition"
          >
            {showAll ? "View Less..." : "View More..."}
          </button>
        </div>
      </section>
    </div>
  )
}
