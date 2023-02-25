const products = [
  {
    id: 1,
    name: "Sorghum bicolor",
    category:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacusarcu",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  {
    id: 1,
    name: "Setaria italica",
    category: "UI Kit",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },

  // More products...
];
export default function HomePage() {
  return (
    <main className="bg-gray-100 flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl font-semibold text-gray-900">Home</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="">
            <div className="max-w-2xl mx-auto  px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="flex items-center justify-between space-x-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Major Millets
                </h2>
                <a
                  href="#"
                  className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                {products.map((product) => (
                  <div key={product.id} className="relative group">
                    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="object-center object-cover"
                      />
                      <div
                        className="flex items-end opacity-0 p-4 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                          Read more
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                      <h3>
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-medium text-gray-900">
                Minor Millets
              </h2>
              <a
                href="#"
                className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View all<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {products.map((product) => (
                <div key={product.id} className="relative group">
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-center object-cover"
                    />
                    <div
                      className="flex items-end opacity-0 p-4 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                        Read more
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                    <h3>
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
