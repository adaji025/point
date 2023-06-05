"use client";
import { Fragment, useState } from 'react';
import { ChevronLeftIcon, FunnelIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';




const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

const subCategories = [
  { name: 'Top Products', href: '#' },
  { name: 'All gift cards', href: '#' },
  { name: 'Ecommerce', href: '#' },
  { name: 'Electronics', href: '#' },
  { name: 'Entertainment', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Games', href: '#' },
  { name: 'Travels', href: '#' },
  { name: 'Music', href: '#' },
  { name: 'Restaurants', href: '#' },
  { name: 'Utility Bills', href: '#' },
]



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function GiftCard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)


  // Add your image URLs to the images array
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      id: 1,
      name: 'Mtn',
      href: '/recharge',
      price: '$50',
      availability: 'White and Black',
      imageSrc: 'https://images.africanfinancials.com/63be93ed-ng-mtn-logo-200x200.png',
      imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
      id: 2,
      name: 'Airtel',
      href: '#',
      price: '$140',
      availability: 'Washed Black',
      imageSrc: 'https://www.businesslist.com.ng/img/ng/e/1604481877-59-airtel-nigeria-customer-care.jpg',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },
    {
      id: 3,
      name: 'Glo',
      href: '#',
      price: '$140',
      availability: 'Washed Black',
      imageSrc: 'https://netstorage-legit.akamaized.net/images/a3d8cbb3f3a7b1d6.jpg?imwidth=720',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },

    {
      id: 4,
      name: '9mobile',
      href: '#',
      price: '$140',
      availability: 'Washed Black',
      imageSrc: 'https://9mobile.com.ng/wp-content/uploads/2023/02/9xtra-all-channels-600x601.png',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },
    {
      id: 5,
      name: 'Glo',
      href: '#',
      price: '$140',
      availability: 'Washed Black',
      imageSrc: 'https://netstorage-legit.akamaized.net/images/a3d8cbb3f3a7b1d6.jpg?imwidth=720',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },

    {
      id: 6,
      name: '9mobile',
      href: '#',
      price: '$140',
      availability: 'Washed Black',
      imageSrc: 'https://9mobile.com.ng/wp-content/uploads/2023/02/9xtra-all-channels-600x601.png',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },
    {
      id: 7,
      name: 'Glo',
      href: '#',
      price: '$140',
      availability: 'Washed Black',
      imageSrc: 'https://netstorage-legit.akamaized.net/images/a3d8cbb3f3a7b1d6.jpg?imwidth=720',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },

    {
      id: 8,
      name: '9mobile',
      href: '#',
      price: '$140',
      availability: 'Washed Black',
      imageSrc: 'https://9mobile.com.ng/wp-content/uploads/2023/02/9xtra-all-channels-600x601.png',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },
    // More products...
  ]


  const previous = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      return newIndex < 0 ? Math.ceil(products.length / 4) - 1 : newIndex;
    });
  };

  const forward = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 4;
      return newIndex >= Math.ceil(products.length / 4) ? 0 : newIndex;
    });
  };


  return (

    <div>

      <main className="mx-auto max-w-7xl mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h1 className="text-me text-center lg:ml-[322px] sm:-mt-[200px] lg:text-2xl sm:text-[30px] sm:mr-3 font-extrabold tracking-tight text-gray-900">
            Top up Your Phone
          </h1>

          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <Link href="#" className="mr-5 group inline-flex justify-center text-sm underline font-medium text-gray-700 hover:text-gray-900">
                  See all
                </Link>
              </div>

            </div>

            <button
              type="button"
              onClick={forward}
              className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={previous}
              type="button"
              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {/* Filters */}
            <aside className="hidden lg:block">
              <form>
                <h3 className="sr-only">Categories</h3>
                <ul style={{ marginBottom: '-322px' }} role="list" className="space-y-4 border-gray-200 pb-6 text-1xl font-bold text-gray-900">
                  {subCategories.map((category) => (
                    <li className="hover:underline" key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>
              </form>
            </aside>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-20 lg:col-span-3 lg:gap-x-8">
              {products.map((product, index) => (
                <Link key={index} href={product.href} className={`group text-sm ${Math.floor(index / 4) !== currentIndex ? 'hidden' : ''}`}>
                  <div className="aspect-w-3 w-full opacity-100 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full object-cover object-center"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        <div className="flex items-baseline justify-between">
          <h1 className="text-center lg:ml-[322px] sm:-mt-[200px] lg:text-2xl sm:text-[30px] sm:mr-3 font-extrabold tracking-tight text-gray-900">
           Utility Bills
          </h1>

          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <Link href="#" className="mr-5 group inline-flex justify-center text-sm underline font-medium text-gray-700 hover:text-gray-900">
                  See all
                </Link>
              </div>

            </div>

            <button
              onClick={forward}
              type="button"
              className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={previous}
              type="button"
              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-20 lg:col-span-3 lg:gap-x-8">
              {products.map((product, index) => (
                <Link key={index} href={product.href} className={`group text-sm ${Math.floor(index / 4) !== currentIndex ? 'hidden' : ''}`}>
                  <div className="aspect-w-3 w-full opacity-100 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full object-cover object-center"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* GIFT CARD SECTION*/}

        <div className="flex items-baseline justify-between">
          <h1 className="text-center lg:ml-[322px] sm:-mt-[200px] lg:text-2xl sm:text-[30px] sm:mr-3 font-extrabold tracking-tight text-gray-900">
            Gift Cards
          </h1>

          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <Link href="#" className="mr-5 group inline-flex justify-center text-sm underline font-medium text-gray-700 hover:text-gray-900">
                  See all
                </Link>
              </div>

            </div>

            <button
              onClick={forward}
              type="button"
              className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={previous}
              type="button"
              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
  <h2 id="products-heading" className="sr-only">
    Products
  </h2>

  <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
    {/* Filters */}
    <div className="hidden lg:block">
    </div>

    {/* Product grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-20 lg:col-span-3 lg:gap-x-8">
      {products.map((product, index) => (
        <Link key={index} href={product.href} className={`group text-sm ${Math.floor(index / 4) !== currentIndex ? 'hidden' : ''}`}>
          <div className="aspect-w-3 w-full opacity-100 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full object-cover object-center"
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
      </main>
    </div>

  )
}
