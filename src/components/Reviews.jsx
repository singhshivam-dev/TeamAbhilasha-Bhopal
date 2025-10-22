import { useState, useEffect } from "react"
import Separator from "../ui/Separator"

export default function Reviews() {
  const reviews = [
    {
      image: "/images/Client (1).jpeg",
      // text: "Outstanding service and professionalism. Highly recommend!",
      name: "Smt Samta Agrawal"
    },
    {
      image: "/images/Client (2).jpeg",
      // text: "Best experience I've had. Truly exceptional quality.",
      name: "Dolly Sharma Ji & Madam Alka shukla Ji"
    },
    {
      image: "/images/Client (3).jpeg",
      // text: "Exceeded all expectations. Will definitely work again.",
      name: "Adv Rajkumari Sharma"
    },
    {
      image: "/images/Client (4).jpeg",
      // text: "Professional, reliable, and absolutely fantastic results.",
      name: "Alka Sharma Ji"
    },
    {
      image: "/images/Client (5).jpeg",
      // text: "Incredible attention to detail. Could not be happier!",
      name: "Shri Harpreet Saluja"
    }
  ]

  const [currentReview, setCurrentReview] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
        setFade(true)
      }, 300)
    }, 3500)

    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <section  className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[#333C4E] text-4xl font-bold text-center ">
            Our Clients
          </h2>
          <Separator />
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`transition-opacity duration-400 flex flex-col items-center ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-52 h-50 rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-white">
              <img
                src={reviews[currentReview].image}
                alt={reviews[currentReview].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* <p className="text-gray-700 text-lg text-center italic max-w-2xl mb-2 px-4">
              "{reviews[currentReview].text}"
            </p> */}

            <h3 className="text-[#333C4E] text-xl font-semibold">
              {reviews[currentReview].name}
            </h3>
          </div>

          <div id="gallery" className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setFade(false)
                  setTimeout(() => {
                    setCurrentReview(idx)
                    setFade(true)
                  }, 300)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentReview === idx
                    ? "w-8 bg-[#333C4E]"
                    : "w-2 bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}