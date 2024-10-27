import {
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineSupport,
  HiOutlineThumbUp,
} from "react-icons/hi";

export default function WhyUs() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-300 to-yellow-100 py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Part: Heading and Paragraph */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="mb-4 font-Primary text-gray-900 !text-2xl lg:!text-5xl ">
            Pourquoi nous choisir
          </h2>
          <p className="text-gray-900 font-Secondary text-lg xs:text-md mr-6">
            Que vous cherchiez du matériel de jeu performant, un équipement
            informatique de pointe ou un support technique fiable, nous avons ce
            qu'il vous faut. Notre large gamme de produits et nos services
            client garantissent le meilleur matériel à des prix imbattables.
          </p>
        </div>

        {/* Right Part: Icons */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-8">
          <div className="flex items-center">
            <HiOutlineCurrencyDollar className="text-black w-16 h-16 mr-4" />
            <span className="text-md sm:text-lg md:text-lg font-Secondary font-semibold text-gray-900">
              Garantie du meilleur prix
            </span>
          </div>

          <div className="flex items-center">
            <HiOutlineTruck className="text-black w-16 h-16 mr-4" />
            <span className="text-md sm:text-lg md:text-lg font-Secondary font-semibold text-gray-900">
              Livraison rapide
            </span>
          </div>

          <div className="flex items-center">
            <HiOutlineSupport className="text-black w-16 h-16 mr-4" />
            <span className="text-md sm:text-lg md:text-lg font-Secondary font-semibold text-gray-900">
              Support client 24/7
            </span>
          </div>

          <div className="flex items-center">
            <HiOutlineThumbUp className="text-black w-16 h-16 mr-4" />
            <span className="text-md sm:text-lg md:text-lg font-Secondary font-semibold text-gray-900">
              Fiable pour les gamers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
