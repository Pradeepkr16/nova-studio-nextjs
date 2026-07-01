import { Palette, Code2, Megaphone, Smartphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually engaging interfaces that users love.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, scalable and responsive websites built with modern technologies.",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description:
      "Helping businesses create a memorable and impactful brand identity.",
  },
  {
    icon: Smartphone,
    title: "Digital Marketing",
    description:
      "Grow your online visibility with data-driven marketing solutions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-5">
            Our Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide complete digital solutions to help businesses
            establish a strong online presence.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-blue-600" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}