import Image from "next/image";

const projects = [
  {
    title: "Corporate Website",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  },
  {
    title: "Mobile Application",
    category: "UI / UX",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900",
  },
  {
    title: "E-Commerce Platform",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our Portfolio
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of recent work showcasing our creativity and technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl shadow-lg group bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-blue-600 font-medium">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}