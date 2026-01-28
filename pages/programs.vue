<template>
  <main class="pt-[80px]">
    <!-- Breadcrumb/Header -->
    <section class="bg-[#F2FAF4] py-20 relative overflow-hidden">
      <div
        class="absolute -bottom-10 -left-10 w-64 h-64 bg-green-200/40 rounded-full blur-3xl"
      ></div>
      <div class="max-w-[1280px] mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
        >
          Our <span class="text-green-600">Learning</span> Programs
        </h1>
        <div class="flex items-center justify-center gap-3 text-xl font-bold">
          <NuxtLink
            to="/"
            class="text-gray-400 hover:text-green-600 transition-colors"
            >Home</NuxtLink
          >
          <Icon name="ph:caret-right-bold" class="text-gray-300 w-5 h-5" />
          <span class="text-green-600">Programs</span>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-[1280px] mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Program 1 -->
          <div
            class="group bg-white rounded-[3.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-pink-100 flex flex-col"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="/photo/Gmi_Image.png"
                alt="Infant"
                class="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
              <div
                class="absolute top-6 left-6 bg-pink-500 text-white px-6 py-2 rounded-2xl font-bold"
              >
                Ages 0-1
              </div>
            </div>
            <div class="p-10 space-y-6 flex-grow">
              <h3 class="text-3xl font-black text-gray-900">Infant Nest</h3>
              <p class="text-gray-500 text-lg leading-relaxed">
                A gentle introduction to the world outside home, focused on
                sensory play and primary care.
              </p>
              <div class="pt-4 border-t border-gray-100 space-y-3">
                <div class="flex items-center gap-3 text-gray-700 font-bold">
                  <Icon name="ph:clock-fill" class="text-pink-500" /> 08:00 AM -
                  04:00 PM
                </div>
                <div class="flex items-center gap-3 text-gray-700 font-bold">
                  <Icon name="ph:users-fill" class="text-pink-500" /> 1:3 Ratio
                </div>
              </div>
            </div>
            <div class="p-10 pt-0">
              <button
                class="w-full py-4 bg-pink-50 text-pink-600 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition-all"
              >
                Details View
              </button>
            </div>
          </div>

          <!-- Program 2 -->
          <div
            class="group bg-white rounded-[3.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-100 flex flex-col"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="/photo/about.png"
                alt="Toddler"
                class="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
              <div
                class="absolute top-6 left-6 bg-blue-500 text-white px-6 py-2 rounded-2xl font-bold"
              >
                Ages 2-3
              </div>
            </div>
            <div class="p-10 space-y-6 flex-grow">
              <h3 class="text-3xl font-black text-gray-900">
                Toddler Explorers
              </h3>
              <p class="text-gray-500 text-lg leading-relaxed">
                Encouraging independence and social skills through guided play
                and basic curriculum.
              </p>
              <div class="pt-4 border-t border-gray-100 space-y-3">
                <div class="flex items-center gap-3 text-gray-700 font-bold">
                  <Icon name="ph:clock-fill" class="text-blue-500" /> 08:00 AM -
                  05:00 PM
                </div>
                <div class="flex items-center gap-3 text-gray-700 font-bold">
                  <Icon name="ph:users-fill" class="text-blue-500" /> 1:6 Ratio
                </div>
              </div>
            </div>
            <div class="p-10 pt-0">
              <button
                class="w-full py-4 bg-blue-50 text-blue-600 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all"
              >
                Details View
              </button>
            </div>
          </div>

          <!-- Program 3 -->
          <div
            class="group bg-white rounded-[3.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-yellow-100 flex flex-col"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="/photo/Gei_Image.png"
                alt="Preschool"
                class="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
              <div
                class="absolute top-6 left-6 bg-yellow-500 text-white px-6 py-2 rounded-2xl font-bold"
              >
                Ages 4-5
              </div>
            </div>
            <div class="p-10 space-y-6 flex-grow">
              <h3 class="text-3xl font-black text-gray-900">Pre-K Scholars</h3>
              <h4 class="text-lg font-bold text-gray-400">
                Preparation for School
              </h4>
              <p class="text-gray-500 text-lg leading-relaxed">
                Advanced learning modules covering literacy, math, and science
                foundation.
              </p>
              <div class="pt-4 border-t border-gray-100 space-y-3">
                <div class="flex items-center gap-3 text-gray-700 font-bold">
                  <Icon name="ph:clock-fill" class="text-yellow-500" /> 08:00 AM
                  - 06:00 PM
                </div>
                <div class="flex items-center gap-3 text-gray-700 font-bold">
                  <Icon name="ph:users-fill" class="text-yellow-500" /> 1:12
                  Ratio
                </div>
              </div>
            </div>
            <div class="p-10 pt-0">
              <button
                class="w-full py-4 bg-yellow-50 text-yellow-600 rounded-2xl font-bold hover:bg-yellow-500 hover:text-white transition-all"
              >
                Details View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
