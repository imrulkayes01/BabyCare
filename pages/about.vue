<template>
  <main class="pt-[80px]">
    <!-- Breadcrumb/Header -->
    <section class="bg-[#FFF9FB] py-12 md:py-20 relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
      >
        <Icon
          name="ph:baby-fill"
          class="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 rotate-12"
        />
        <Icon
          name="ph:palette-fill"
          class="absolute bottom-10 right-20 w-24 h-24 md:w-40 md:h-40 -rotate-12"
        />
      </div>
      <div class="max-w-[1280px] mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
        >
          About Our
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
          >
            Family
          </span>
        </h1>
        <div
          class="flex items-center justify-center gap-3 text-lg sm:text-xl font-bold"
        >
          <NuxtLink
            to="/"
            class="text-gray-400 hover:text-pink-500 transition-colors"
            >Home</NuxtLink
          >
          <Icon name="ph:caret-right-bold" class="text-gray-300 w-5 h-5" />
          <span class="text-pink-500">About Us</span>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-12 md:py-24 overflow-hidden">
      <div
        class="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
      >
        <div class="space-y-8 order-2 lg:order-1">
          <div
            class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold text-sm tracking-widest uppercase"
          >
            Since 2012
          </div>
          <h2 class="text-4xl md:text-5xl font-black">
            <span class="text-purple-600">Nurturing </span>
            <span class="text-emerald-500">The Future</span>
            <br />
            <span class="text-gray-700">With </span>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
            >
              Love & Care
            </span>
          </h2>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
            BabyCare was founded with a simple yet powerful vision: to create a
            home away from home for children where they feel loved, safe, and
            inspired to learn.
          </p>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
            What started as a small playgroup has grown into a premier early
            childhood education center, serving hundreds of families in our
            community. Our commitment remains the same: putting children first
            in everything we do.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div class="flex items-center gap-4 p-6 bg-pink-50 rounded-[2rem]">
              <div
                class="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-pink-500 shadow-sm"
              >
                <Icon name="ph:target-fill" class="w-8 h-8" />
              </div>
              <div>
                <div class="text-2xl font-black text-gray-900">Mission</div>
                <div class="text-gray-500 font-medium">To inspire growth</div>
              </div>
            </div>
            <div class="flex items-center gap-4 p-6 bg-blue-50 rounded-[2rem]">
              <div
                class="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-500 shadow-sm"
              >
                <Icon name="ph:eye-fill" class="w-8 h-8" />
              </div>
              <div>
                <div class="text-2xl font-black text-gray-900">Vision</div>
                <div class="text-gray-500 font-medium">Safe future for all</div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative order-1 lg:order-2">
          <div
            class="bg-white p-2 sm:p-4 rounded-[2rem] sm:rounded-[4rem] shadow-2xl -rotate-2"
          >
            <div
              class="rounded-[1.5rem] sm:rounded-[3.2rem] overflow-hidden aspect-square"
            >
              <img
                src="/photo/about.png"
                alt="Our Story"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- Decorative elements -->
          <div
            class="absolute -top-10 -right-10 w-20 h-20 md:w-32 md:h-32 bg-yellow-200 rounded-full blur-3xl -z-10 opacity-60"
          ></div>
          <div
            class="absolute -bottom-10 -left-10 w-24 h-24 md:w-40 md:h-40 bg-pink-200 rounded-full blur-3xl -z-10 opacity-60"
          ></div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-12 md:py-24 bg-gray-50">
      <div class="max-w-[1280px] mx-auto px-4">
        <div class="text-center mb-10 md:mb-20 space-y-4">
          <span class="text-pink-500 font-bold uppercase tracking-[0.2em]"
            >Our Values</span
          >
          <h2 class="text-4xl md:text-5xl font-black">
            <span class="text-gray-900">
              Why Families
              <span class="block md:inline"> </span>
            </span>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 block md:inline"
            >
              Trust Us
            </span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 md:gap-12">
          <div class="text-center space-y-6 group">
            <div
              class="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-pink-500 mx-auto shadow-xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2"
            >
              <Icon name="ph:shield-check-fill" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Safety First</h3>
            <p class="text-gray-600 text-lg">
              We maintain the highest standards of safety and hygiene in all our
              facilities.
            </p>
          </div>

          <div class="text-center space-y-6 group">
            <div
              class="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-blue-500 mx-auto shadow-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2"
            >
              <Icon name="ph:users-four-fill" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Expert Staff</h3>
            <p class="text-gray-600 text-lg">
              Our caregivers are certified professionals with years of
              experience in child care.
            </p>
          </div>

          <div class="text-center space-y-6 group">
            <div
              class="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-yellow-500 mx-auto shadow-xl group-hover:bg-yellow-500 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2"
            >
              <Icon name="ph:book-open-fill" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Rich Curriculum</h3>
            <p class="text-gray-600 text-lg">
              We offer a balanced blend of play, education, and creative
              expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
