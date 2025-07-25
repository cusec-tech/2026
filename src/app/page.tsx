import { Hero, ParallaxCityscape, Particles, Navbar } from "@/components";

export default function Home() {
  return (
    <div className="bg-linear-[90deg] from-primary from-0% to-sunset to-100% -z-20 bg-cover bg-center h-full w-screen">
      <Navbar />
      <div className="relative z-10">
        <Particles />
        <ParallaxCityscape />
        <main className="w-full h-[100vh] flex justify-center items-center bg-linear-[35deg] from-primary from-0% via-primary/100 via-55% to-accent to-120%">
          <div className="absolute top-[25vh]">
            <Hero />
          </div>
        </main>
        <section className="min-h-[100vh]"></section>
      </div>
    </div>
  );
}
