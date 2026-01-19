import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-image absolute w-full h-full top-0 left-0 overflow-hidden z-0">
        <Image
          src="/wolf_eyes.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-ful"
          priority
        />
      </div>
      <div className="container">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-8">
            UNLEASH THE BEAST
            <br />
            <span className="text-violet-500">IN YOUR DIGITAL EMPIRE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            We don&apos;t design websites. We engineer conversion predators for
            founders who hunt growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-violet-700 hover:bg-violet-600 text-white text-lg font-medium rounded-full transition-all shadow-xl shadow-violet-900/40">
              Summon the Pack
            </button>
            <button className="px-10 py-5 border border-violet-700 text-violet-400 hover:bg-violet-950/50 text-lg font-medium rounded-full transition-all">
              See our Hunts →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
