import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        <div>

          <p className="uppercase tracking-widest text-blue-100 font-semibold mb-4">
            Creative Design Agency
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            We Build Beautiful Digital Experiences
          </h1>

          <p className="text-lg text-blue-100 leading-8 mb-10">
            We help startups and businesses create stunning websites,
            memorable brands and modern user experiences that convert visitors
            into customers.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#portfolio"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Our Work
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-4xl font-bold">120+</h2>
              <p className="text-blue-100 mt-2">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">80+</h2>
              <p className="text-blue-100 mt-2">Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">5+</h2>
              <p className="text-blue-100 mt-2">Years</p>
            </div>

          </div>

        </div>

        <div className="flex justify-center">

          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
            alt="Creative Team"
            width={650}
            height={650}
            className="w-full max-w-xl rounded-3xl shadow-2xl"          />

        </div>

      </div>
    </section>
  );
}