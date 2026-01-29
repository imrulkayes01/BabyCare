<template>
  <main class="overflow-x-hidden pt-[80px]">
    <!-- Hero Section -->
    <section
      class="relative bg-[#FFF9FB] min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-20"
    >
      <!-- Decorative Shapes -->
      <div
        class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
      >
        <svg
          viewBox="0 0 500 500"
          class="w-full h-full text-pink-500 fill-current"
        >
          <path
            d="M450,250c0,110.5-89.5,200-200,200S50,360.5,50,250S139.5,50,250,50S450,139.5,450,250z"
          />
        </svg>
      </div>

      <div
        class="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10"
      >
        <!-- Text Content -->
        <div class="text-center lg:text-left space-y-8">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/50 text-pink-600 font-bold text-sm tracking-widest uppercase"
          >
            <Icon name="ph:sparkle-fill" class="w-4 h-4" />
            Empowering Parenthood
          </div>

          <h1
            class="text-5xl sm:text-5xl md:text-6xl xl:text-8xl font-black text-gray-900 leading-[1.1]"
          >
            Loving Care <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
              >For Your Little Ones</span
            >
          </h1>

          <p
            class="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            We provide a world-class environment where your child can explore,
            learn, and grow safely under professional supervision.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <button
              class="group px-8 py-3.5 md:py-5 bg-pink-500 text-white rounded-2xl font-bold text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-200 flex items-center justify-center gap-2"
            >
              Book a Tour
              <Icon
                name="ph:arrow-right-bold"
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              class="px-8 py-3.5 md:py-5 bg-white text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-100 shadow-sm"
            >
              Our Programs
            </button>
          </div>

          <!-- Stats/Trust -->
          <div
            class="pt-8 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
              >
                <Icon name="ph:users-three-fill" class="w-6 h-6" />
              </div>
              <div>
                <div class="font-bold text-gray-900">500+</div>
                <div class="text-xs uppercase tracking-tighter">Happy Kids</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600"
              >
                <Icon name="ph:medal-fill" class="w-6 h-6" />
              </div>
              <div>
                <div class="font-bold text-gray-900">Expert</div>
                <div class="text-xs uppercase tracking-tighter">Staff Team</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Content -->
        <div class="relative group">
          <div
            class="relative z-10 bg-white p-4 rounded-[4rem] shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700"
          >
            <div class="rounded-[3.2rem] overflow-hidden aspect-video">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/kpy6QEAuLJw?si=teTFCr87LhA8OxQZ"
                title="YouTube video player"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <!-- Floating UI Elements -->
          <div
            class="absolute -top-6 -right-0 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-all duration-[3000ms]"
          >
            <div class="flex items-center gap-3 text-pink-500">
              <Icon name="ph:heart-fill" class="w-8 h-8" />
              <div class="font-bold text-gray-800">100% Safety</div>
            </div>
          </div>

          <div
            class="absolute -bottom-10 -left-10 bg-white p-5 rounded-3xl shadow-xl z-20 hidden md:block"
          >
            <div class="flex items-center gap-4">
              <div class="flex -space-x-4">
                <div
                  class="w-10 h-10 rounded-full border-4 border-white bg-blue-200"
                ></div>
                <div
                  class="w-10 h-10 rounded-full border-4 border-white bg-pink-200"
                ></div>
                <div
                  class="w-10 h-10 rounded-full border-4 border-white bg-yellow-200"
                ></div>
              </div>
              <div class="text-sm font-bold text-gray-800 leading-tight">
                Join 2k+ <br />parents
              </div>
            </div>
          </div>

          <!-- Background blobs -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-200/40 to-blue-200/40 rounded-full blur-[80px] -z-10 animate-pulse"
          ></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-white">
      <div class="max-w-[1280px] mx-auto px-4">
        <div class="text-center mb-16 space-y-4">
          <span class="text-blue-500 font-bold uppercase tracking-[0.2em]"
            >Our Excellence</span
          >
          <h2 class="text-4xl md:text-5xl font-black text-gray-900">
            Quality Service For Kids
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            We provide specialized care tailored to each stage of your child's
            early development journey.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Service 1 -->
          <div
            class="group p-10 bg-pink-50 rounded-[2.5rem] border-2 border-transparent hover:border-pink-200 transition-all hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-pink-500 mb-8 shadow-sm group-hover:bg-pink-500 group-hover:text-white transition-colors duration-500"
            >
              <Icon name="ph:baby-fill" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Infant Care
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Supportive environments designed for our youngest learners to
              thrive.
            </p>
            <NuxtLink
              class="text-pink-500 font-bold flex items-center gap-2 group/link"
            >
              Read More
              <Icon
                name="ph:arrow-right"
                class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>

          <!-- Service 2 -->
          <div
            class="group p-10 bg-blue-50 rounded-[2.5rem] border-2 border-transparent hover:border-blue-200 transition-all hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-500 mb-8 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500"
            >
              <Icon name="ph:palette-fill" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Preschool
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Engaging curriculum that prepares children for their next big
              step.
            </p>
            <NuxtLink
              class="text-blue-500 font-bold flex items-center gap-2 group/link"
            >
              Read More
              <Icon
                name="ph:arrow-right"
                class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>

          <!-- Service 3 -->
          <div
            class="group p-10 bg-yellow-50 rounded-[2.5rem] border-2 border-transparent hover:border-yellow-200 transition-all hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-yellow-600 mb-8 shadow-sm group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-500"
            >
              <Icon name="ph:soccer-ball-fill" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Playgroup
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Social play activities to develop emotional and social skills.
            </p>
            <NuxtLink
              class="text-yellow-600 font-bold flex items-center gap-2 group/link"
            >
              Read More
              <Icon
                name="ph:arrow-right"
                class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>

          <!-- Service 4 -->
          <div
            class="group p-10 bg-green-50 rounded-[2.5rem] border-2 border-transparent hover:border-green-200 transition-all hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-8 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-colors duration-500"
            >
              <Icon name="ph:first-aid-kit-fill" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              After School
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Safe and productive care for school-aged children after class.
            </p>
            <NuxtLink
              class="text-green-600 font-bold flex items-center gap-2 group/link"
            >
              Read More
              <Icon
                name="ph:arrow-right"
                class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-24 bg-pink-50/30">
      <div
        class="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center"
      >
        <div class="relative order-2 lg:order-1">
          <div class="rounded-[3rem] overflow-hidden shadow-2xl skew-x-1">
            <img
              src="/photo/about.png"
              alt="About Us"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="space-y-8 order-1 lg:order-2">
          <span class="text-pink-500 font-bold uppercase tracking-[0.2em]"
            >Learn About Us</span
          >
          <h2
            class="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
          >
            We Provide The Best
            <span class="text-blue-500">Early Education</span> For Your Kids
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Our mission is to provide a safe, nurturing and stimulating
            environment where your child can explore, learn and grow. We believe
            that every child is unique and deserves the best possible care and
            education.
          </p>

          <ul class="space-y-4">
            <li class="flex items-center gap-4 text-gray-700 font-semibold">
              <div
                class="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white"
              >
                <Icon name="ph:check-bold" class="w-4 h-4" />
              </div>
              Environmentally friendly and safe toys
            </li>
            <li class="flex items-center gap-4 text-gray-700 font-semibold">
              <div
                class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white"
              >
                <Icon name="ph:check-bold" class="w-4 h-4" />
              </div>
              Nutritious meals prepared by our in-house chef
            </li>
            <li class="flex items-center gap-4 text-gray-700 font-semibold">
              <div
                class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white"
              >
                <Icon name="ph:check-bold" class="w-4 h-4" />
              </div>
              Bilingual education and creative arts
            </li>
          </ul>

          <button
            class="px-10 py-3.5 md:py-5 bg-blue-500 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-200"
          >
            More About Us
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
