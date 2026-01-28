<template>
  <main class="pt-[80px]">
    <!-- Breadcrumb/Header -->
    <section class="bg-[#FFF9FB] py-20 relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
      >
        <Icon
          name="ph:baby-fill"
          class="absolute top-10 left-10 w-32 h-32 rotate-12"
        />
        <Icon
          name="ph:palette-fill"
          class="absolute bottom-10 right-20 w-40 h-40 -rotate-12"
        />
      </div>
      <div class="max-w-[1280px] mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
        >
          About Our <span class="text-pink-500">Family</span>
        </h1>
        <div class="flex items-center justify-center gap-3 text-xl font-bold">
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
    <section class="py-24">
      <div
        class="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center"
      >
        <div class="space-y-8 order-2 lg:order-1">
          <div
            class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold text-sm tracking-widest uppercase"
          >
            Since 2012
          </div>
          <h2
            class="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
          >
            Nurturing The Future <br />
            With
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
              >Love & Care</span
            >
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            BabyCare was founded with a simple yet powerful vision: to create a
            home away from home for children where they feel loved, safe, and
            inspired to learn.
          </p>
          <p class="text-xl text-gray-600 leading-relaxed">
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
          <div class="bg-white p-4 rounded-[4rem] shadow-2xl -rotate-2">
            <div class="rounded-[3.2rem] overflow-hidden aspect-square">
              <img
                src="/photo/about.png"
                alt="Our Story"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- Decorative elements -->
          <div
            class="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl -z-10 opacity-60"
          ></div>
          <div
            class="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl -z-10 opacity-60"
          ></div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-[1280px] mx-auto px-4">
        <div class="text-center mb-20 space-y-4">
          <span class="text-pink-500 font-bold uppercase tracking-[0.2em]"
            >Our Values</span
          >
          <h2 class="text-4xl md:text-5xl font-black text-gray-900">
            Why Families Trust Us
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
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

    <!-- CTA Section -->
    <!-- <section class="py-20">
      <div class="max-w-[1280px] mx-auto px-4">
        <div
          class="bg-gradient-to-r from-pink-500 to-blue-600 rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 p-10 opacity-10">
            <Icon name="ph:sparkle-fill" class="w-64 h-64" />
          </div>
          <div class="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 class="text-4xl md:text-6xl font-black leading-tight">
              Ready To Give Your Child The Best Start?
            </h2>
            <p class="text-xl text-pink-100">
              Contact us today to schedule a personalized tour of our center.
            </p>
            <div class="flex flex-wrap justify-center gap-6">
              <NuxtLink
                to="/contact"
                class="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                Contact Us Now
              </NuxtLink>
              <button
                class="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </main>
</template>
