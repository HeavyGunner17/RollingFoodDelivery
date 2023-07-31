import React from 'react'

import { FaStar } from 'react-icons/fa';


const Testimonials = () => {
    const stars = Array(5).fill(0); // Genera un array con 5 elementos
  return (
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
      Read trusted reviews from our customers
    </h2>

    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
    <blockquote className="rounded-lg bg-gray-100 p-8">
      <div className="flex items-center gap-4">
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <div className="flex justify-center gap-0.5 text-green-500">
            {stars.map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
        </div>
      </div>

      <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
      Everything has just been fantastic! I would recommend this delivery to anyone.
      </p>
    </blockquote>
    <blockquote className="rounded-lg bg-gray-100 p-8">
      <div className="flex items-center gap-4">
        <img
          alt="Woman"
          src="https://st.depositphotos.com/1003556/1325/i/450/depositphotos_13254129-stock-photo-beautiful-teen-woman.jpg"
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <div className="flex justify-center gap-0.5 text-green-500">
            {stars.map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="mt-1 text-lg font-medium text-gray-700">Jessica Reynolds</p>
        </div>
      </div>

      <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
      Your meals have been key to our survival (and TOTALLY delicious!) these past couple of years! Have a great weekend!
      </p>
    </blockquote>

    <blockquote className="rounded-lg bg-gray-100 p-8">
      <div className="flex items-center gap-4">
        <img
          alt="Man"
          src="https://st.depositphotos.com/1743476/1265/i/600/depositphotos_12659178-stock-photo-mature-businessman-portrait.jpg"
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <div className="flex justify-center gap-0.5 text-green-500">
            {stars.map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="mt-1 text-lg font-medium text-gray-700">Mikael Larsson</p>
        </div>
      </div>

      <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
      Such a Great Service.
This is such a great service…we have a 4 year old and are expecting #2 and I love to cook but zero time.
      </p>
    </blockquote>


    </div>
  </div>
</section>
  )
}

export default Testimonials