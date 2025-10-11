import Separator from "../ui/Separator"

export default function Services() {
  const services = [
    "Policy Guidance and Planning",
    "Pension and Retirement Solutions",
    "Claim Settlement Support",
    "Tax Saving & Investment Plans",
  ]

  return (
    <div className="bg-[#F7F5F4] ">
    <section id="services" className="max-w-4xl mx-auto px-4 py-12">
      <div>
              <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize">
                Agent Services
              </h1>
              <Separator />
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {services.map((item, idx) => (
          <li
            key={idx}
            className="bg-[#F09A3E] text-white uppercase text-center font-semibold  p-4 rounded-md hover:bg-[#FFCB08] hover:text-blue-900 transition duration-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
    </div>
  )
}
