<template>
  <main class="pt-[80px]">
    <!-- Breadcrumb/Header -->
    <section class="bg-[#F6F8FF] py-20 relative overflow-hidden">
      <div class="max-w-[1280px] mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-snug md:leading-relaxed"
        >
          <span class="text-gray-900">Our </span>
          <span
            class="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
          >
            Community
          </span>
          <span class="text-emerald-500"> Events</span>
        </h1>
        <div class="flex items-center justify-center gap-3 text-xl font-bold">
          <NuxtLink
            to="/"
            class="text-gray-400 hover:text-blue-500 transition-colors"
            >Home</NuxtLink
          >
          <Icon name="ph:caret-right-bold" class="text-gray-300 w-5 h-5" />
          <span class="text-blue-500">Events</span>
        </div>
      </div>
    </section>

    <!-- Events List -->
    <section class="py-24">
      <div class="max-w-[1280px] mx-auto px-4 space-y-12">
        <!-- Event 1 -->
        <div
          class="group bg-white p-6 md:p-10 rounded-[3.5rem] shadow-lg hover:shadow-2xl transition-all flex flex-col lg:flex-row gap-10 items-center border border-gray-50 hover:border-blue-100 border-2"
        >
          <div
            class="w-full lg:w-[400px] h-64 lg:h-80 rounded-[2.5rem] overflow-hidden flex-shrink-0"
          >
            <img
              src="/photo/about.png"
              alt="Picnic"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="flex-grow space-y-6">
            <div class="flex items-center gap-4">
              <div
                class="bg-pink-500 text-white px-5 py-2 rounded-2xl font-black text-sm uppercase tracking-tighter"
              >
                Upcoming
              </div>
              <div
                class="text-gray-400 font-black text-sm uppercase tracking-[0.2em]"
              >
                Community Meetup
              </div>
            </div>
            <h3
              class="text-4xl font-black text-gray-900 group-hover:text-blue-500 transition-colors"
            >
              Annual Spring Picnic & Play
            </h3>
            <p class="text-xl text-gray-500 leading-relaxed max-w-2xl">
              A delightful outdoor gathering for our families to connect. Expect
              puppet shows, organic snack bars, and creative workshops for
              toddlers.
            </p>
            <div
              class="flex flex-wrap gap-x-12 gap-y-4 text-lg font-bold text-gray-700"
            >
              <div class="flex items-center gap-3">
                <Icon
                  name="ph:calendar-blank-fill"
                  class="text-blue-500 w-6 h-6"
                />
                March 15, 2025
              </div>
              <div class="flex items-center gap-3">
                <Icon name="ph:clock-fill" class="text-pink-500 w-6 h-6" />
                10:00 AM - 02:00 PM
              </div>
              <div class="flex items-center gap-3">
                <Icon name="ph:map-pin-fill" class="text-blue-500 w-6 h-6" />
                Central Park Garden
              </div>
            </div>
          </div>
          <div class="w-full lg:w-auto">
            <button
              class="w-full lg:w-auto px-10 py-3.5 md:py-5 bg-blue-500 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-200"
            >
              Register Now
            </button>
          </div>
        </div>

        <!-- Event 2 -->
        <div
          class="group bg-white p-6 md:p-10 rounded-[3.5rem] shadow-lg hover:shadow-2xl transition-all flex flex-col lg:flex-row gap-10 items-center border border-gray-50 hover:border-pink-100 border-2"
        >
          <div
            class="w-full lg:w-[400px] h-64 lg:h-80 rounded-[2.5rem] overflow-hidden flex-shrink-0"
          >
            <img
              src="/photo/Gei_Image.png"
              alt="Education"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="flex-grow space-y-6">
            <div class="flex items-center gap-4">
              <div
                class="bg-blue-500 text-white px-5 py-2 rounded-2xl font-black text-sm uppercase tracking-tighter"
              >
                Workshop
              </div>
              <div
                class="text-gray-400 font-black text-sm uppercase tracking-[0.2em]"
              >
                Parent Education
              </div>
            </div>
            <h3
              class="text-4xl font-black text-gray-900 group-hover:text-pink-500 transition-colors"
            >
              Positive Parenting Seminar
            </h3>
            <p class="text-xl text-gray-500 leading-relaxed max-w-2xl">
              Learn modern techniques for emotional regulation and developmental
              support from leading child psychologists.
            </p>
            <div
              class="flex flex-wrap gap-x-12 gap-y-4 text-lg font-bold text-gray-700"
            >
              <div class="flex items-center gap-3">
                <Icon
                  name="ph:calendar-blank-fill"
                  class="text-pink-500 w-6 h-6"
                />
                April 10, 2025
              </div>
              <div class="flex items-center gap-3">
                <Icon name="ph:clock-fill" class="text-blue-500 w-6 h-6" />
                06:00 PM - 08:30 PM
              </div>
              <div class="flex items-center gap-3">
                <Icon name="ph:map-pin-fill" class="text-pink-500 w-6 h-6" />
                Main Center Hall
              </div>
            </div>
          </div>
          <div class="w-full lg:w-auto">
            <button
              class="w-full lg:w-auto px-10 py-3.5 md:py-5 bg-pink-500 text-white rounded-2xl font-black text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-200"
            >
              Save My Spot
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Calendar CTA -->
    <section class="py-24">
      <div class="max-w-[1280px] mx-auto px-4">
        <div
          class="bg-gray-50 rounded-[4rem] p-12 md:p-20 text-center space-y-8"
        >
          <div
            class="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-blue-500 mx-auto shadow-xl text-4xl mb-6"
          >
            <Icon name="ph:calendar-check-fill" />
          </div>
          <h2 class="text-4xl md:text-5xl font-black">
            <span class="text-gray-900">Never </span>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
            >
              Miss A
            </span>
            <span class="text-emerald-500"> Moment</span>
          </h2>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto">
            Get our monthly calendar of activities, events, and important dates
            delivered straight to your inbox.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-grow px-8 py-5 bg-white rounded-2xl outline-none border-2 border-transparent focus:border-blue-500 font-bold"
            />
            <button
              class="px-8 py-3.5 md:py-5 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
