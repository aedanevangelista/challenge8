import sedanSVG from "./assets/images/icon-sedans.svg";
import suvSVG from "./assets/images/icon-suvs.svg";
import luxurySVG from "./assets/images/icon-luxury.svg";

function App() {
  return (
    <>
      <main className="min-h-screen bg-[#f2f2f2] flex flex-col justify-center items-center">
        <div className="max-w-screen m-[4rem] items-center flex flex-col lg:flex-row lg:h-[32rem] lg:w-[60rem]">
          <section className="h-full lg:w-1/3 bg-[#e28525] text-white flex flex-col justify-evenly rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none lg:rounded-tl-xl lg:rounded-bl-xl">
            <div className="flex flex-col h-full mx-16 justify-around sm:my-8 ">
              <img src={sedanSVG} className="w-3/12 lg:w-1/3 my-8" />

              <h1 className="font-semibold lg:text-5xl text-[6rem] font-Sans my-4">
                SEDANS
              </h1>
              <p className="opacity-80 lg:text-base text-[3rem]">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>

              <button className="text-[2rem] py-6 my-14 lg:text-base w-3/6 lg:w-9/12 hover:bg-[#b56a1e] hover:text-white bg-white rounded-full font-semibold text-[#e28525] lg:p-3 lg:my-10">
                Learn More
              </button>
            </div>
          </section>
          <section className="h-full lg:w-1/3 bg-[#016972] text-white flex flex-col justify-evenly">
            <div className="flex flex-col h-full mx-16 justify-around sm:my-8 ">
              <img src={suvSVG} className="w-3/12 lg:w-1/3 my-8" />
              <h1 className="font-semibold lg:text-5xl text-[6rem] font-Sans my-4">
                SUVS
              </h1>
              <p className="opacity-80 lg:text-base text-[3rem]">
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
              <button className="text-[2rem] py-6 my-14 lg:text-base w-3/6 lg:w-9/12 hover:bg-[#00555b] hover:text-white bg-white rounded-full font-semibold text-[#247e78] lg:p-3 lg:my-10">
                Learn More
              </button>
            </div>
          </section>
          <section className="h-full lg:w-1/3 bg-[#00403f] text-white flex flex-col justify-evenly rounded-bl-3xl rounded-br-3xl lg:rounded-bl-none lg:rounded-br-xl lg:rounded-tr-xl">
            <div className="flex flex-col h-full mx-16 justify-around sm:my-8 ">
              <img src={luxurySVG} className="w-3/12 lg:w-1/3 my-8" />
              <h1 className="font-semibold lg:text-5xl font-Sans my-4 text-[6rem]">
                LUXURY
              </h1>
              <p className="opacity-80 lg:text-base text-[3rem]">
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>
              <button className="text-[2rem] py-6 my-14 lg:text-base w-3/6 lg:w-9/12 hover:bg-[#003332] hover:text-white bg-white rounded-full font-semibold text-[#234b47] lg:p-3 lg:my-10">
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
