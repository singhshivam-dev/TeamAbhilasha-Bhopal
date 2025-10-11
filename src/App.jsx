import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Agents from "./components/Agents"
import AgentApply from "./components/AgentApply"
import Query from "./components/Query"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Services />
      <Agents />
      <AgentApply />
      <Query />
      <Contact />

      {/* WhatsApp floating button */}
<a
  href="https://wa.me/919907972354"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 flex items-center justify-center bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.73 5.57 2.12 8.02L.5 31.5l7.72-2.03A15.41 15.41 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28.25c-2.42 0-4.78-.61-6.86-1.78l-.49-.27-4.58 1.21 1.23-4.46-.32-.52A12.92 12.92 0 0 1 3.13 16C3.13 8.84 8.84 3.13 16 3.13S28.88 8.84 28.88 16 23.16 28.75 16 28.75zm7.46-9.85c-.41-.2-2.43-1.2-2.81-1.33-.38-.14-.65-.2-.91.2s-1.05 1.33-1.29 1.6c-.24.27-.48.3-.89.1-.41-.2-1.74-.64-3.32-2.05a12.27 12.27 0 0 1-2.26-2.79c-.23-.38-.02-.58.17-.77.18-.18.41-.48.62-.72.2-.24.27-.41.41-.68.14-.27.07-.5-.03-.7-.1-.2-.91-2.19-1.25-3-.33-.8-.67-.69-.91-.7h-.78c-.27 0-.7.1-1.06.5s-1.4 1.37-1.4 3.33 1.43 3.86 1.63 4.13c.2.27 2.82 4.3 6.83 6.02 4.01 1.72 4.02 1.15 4.74 1.08.72-.06 2.42-.99 2.77-1.94.34-.95.34-1.76.24-1.94-.1-.18-.38-.29-.79-.48z" />
  </svg>
</a>


      <Footer />
    </>
  )
}

export default App
