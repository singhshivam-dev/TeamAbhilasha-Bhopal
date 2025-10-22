import Separator from "../ui/Separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Services() {
  const services = [
    {
      title: "Recruitment Of Agents",
      content: (
        <p>
          If you want to serve in LIC as an Advisor, you can join us. Click here to <a className="text-blue-600 underline" href="#apply">apply for an agent</a>.
        </p>
      ),
    },
    {
      title: "Agents Training",
      content: (
        <p>
          Online/offline training available. You can also watch our training sessions on <a className="text-blue-600 underline" href="https://youtube.com/@abhilashamauka" target="_blank" rel="noopener noreferrer">YouTube</a>.
        </p>
      ),
    },
    {
      title: "Plan Consultation",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Child future planning</li>
          <li>Marriage planning</li>
          <li>Education planning</li>
          <li>Saving plans</li>
          <li>Risk coverage planning</li>
          <li>FD plans</li>
          <li>Retirement plans</li>
          <li>Family protection</li>
          <li>3 generation planning</li>
          <li>Wealth creator plans</li>
        </ul>
      ),
    },
    {
      title: "Personality Development",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Self presentation</li>
          <li>Body language</li>
          <li>Behaviour skills</li>
          <li>Communication skills</li>
          <li>Plan and presentation skills</li>
        </ul>
      ),
    },
  ]

  return (
    <div className="bg-[#F7F5F4]">
      <section className="max-w-4xl mx-auto px-4 py-12 ">
        <div>
          <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize">
            Team Abhilasha Services
          </h1>
          <Separator className="my-6" />
        </div>

        <Accordion type="single" collapsible className="space-y-4 mt-8 bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          {services.map((service, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-[#F09A3E] rounded-md">
              <AccordionTrigger id="team" className="text-white uppercase font-bold px-4 py-3 w-full text-left hover:bg-[#FFCB08] hover:text-blue-900 transition duration-500">
                {service.title}
              </AccordionTrigger>
              <AccordionContent className="bg-white font-semibold text-md capitalize text-gray-700 px-4 py-3 rounded-b-md">
                {service.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
