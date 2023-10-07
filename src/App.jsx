import sedanSVG from "./assets/images/icon-sedans.svg";
import suvSVG from "./assets/images/icon-suvs.svg";
import luxurySVG from "./assets/images/icon-luxury.svg";

function App() {
  return (
    <>
      <main className="min-h-screen bg-[#f2f2f2] flex flex-col justify-center items-center">
        <div className=" max-w-screen flex flex-row h-[32rem] w-[60rem]">
          <section className="w-1/3 bg-[#e28525] text-white flex flex-col justify-evenly rounded-tl-xl rounded-bl-xl">
            <div className="flex flex-col h-full mx-16 justify-around my-8 ">
              <img src={sedanSVG} className="w-1/3" />

              <h1 className="font-semibold text-5xl font-Sans">SEDANS</h1>
              <p className="opacity-80">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>

              <button className="w-9/12 hover:bg-[#b56a1e] hover:text-white bg-white rounded-full font-semibold text-[#e28525] p-3 my-10">
                Learn More
              </button>
            </div>
          </section>
          <section className="w-1/3 bg-[#016972] text-white flex flex-col justify-evenly">
            <div className="flex flex-col h-full mx-16 justify-around my-8 ">
              <img src={suvSVG} className="w-1/3" />
              <h1 className="font-semibold text-5xl font-Sans">SUVS</h1>
              <p className="opacity-80">
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
              <button className="w-9/12 hover:bg-[#00555b] hover:text-white bg-white rounded-full font-semibold text-[#247e78] p-3 my-10">
                Learn More
              </button>
            </div>
          </section>
          <section className="w-1/3 bg-[#00403f] text-white flex flex-col justify-evenly rounded-br-xl rounded-tr-xl">
            <div className="flex flex-col h-full mx-16 justify-around my-8 ">
              <img src={luxurySVG} className="w-1/3" />
              <h1 className="font-semibold text-5xl font-Sans">LUXURY</h1>
              <p className="opacity-80">
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>
              <button className="w-9/12 hover:bg-[#003332] hover:text-white bg-white rounded-full font-semibold text-[#234b47] p-3 my-10">
                Learn More
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
