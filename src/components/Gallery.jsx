import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Separator from "../ui/Separator"

export default function Gallery() {
  const images = {
    img1: "/images/gallery (1).jpeg",
    img2: "/images/gallery (2).jpeg",
    img3: "/images/gallery (3).jpeg",
    img4: "/images/gallery (4).jpeg",
    img5: "/images/gallery (5).jpeg",
    img6: "/images/gallery (6).jpeg",
    img7: "/images/gallery (7).jpeg",
    img8: "/images/gallery (8).jpeg",
    img9: "/images/gallery (9).jpeg",
    img10: "/images/gallery (10).jpeg",
    img11: "/images/gallery (11).jpeg",
    img12: "/images/gallery (12).jpeg",
    img13: "/images/gallery (13).jpeg",
    img14: "/images/gallery (14).jpeg",
    img15: "/images/gallery (15).jpeg",
    img16: "/images/gallery (16).jpeg",
    img17: "/images/gallery (17).jpeg",
    img18: "/images/gallery (18).jpeg",
  }

  const imageArray = Object.values(images)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesPerSlide, setImagesPerSlide] = useState(5)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateImagesPerSlide = () => {
      setImagesPerSlide(window.innerWidth < 640 ? 2 : 5)
    }
    updateImagesPerSlide()
    window.addEventListener("resize", updateImagesPerSlide)
    return () => window.removeEventListener("resize", updateImagesPerSlide)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return imageArray.length - imagesPerSlide
      }
      return prev - 1
    })
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= imageArray.length - imagesPerSlide) {
        return 0
      }
      return prev + 1
    })
  }

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, imagesPerSlide, isHovered])

  return (
    <section className="bg-[#F7F5F4] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div>
                  <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize">
                   Gallery
                  </h1>
                  <Separator />
                </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex / imageArray.length) * 100}%)`,
                width: `${(imageArray.length / imagesPerSlide) * 100}%`,
              }}
            >
              {imageArray.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 p-1.5 sm:p-2"
                  style={{ width: `${100 / imageArray.length}%` }}
                >
                  <div className="relative overflow-hidden rounded-lg group">
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg w-10 h-16 sm:w-12 sm:h-20 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg w-10 h-16 sm:w-12 sm:h-20 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        <div id="query" className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(imageArray.length / imagesPerSlide) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * imagesPerSlide)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / imagesPerSlide) === idx
                  ? "w-8 bg-[#333C4E]"
                  : "w-2 bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}