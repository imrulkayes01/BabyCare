<template>
  <main class="pt-[80px]">
    <!-- Breadcrumb/Header -->
    <section class="bg-[#F8F9FF] py-20 relative overflow-hidden">
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
      ></div>
      <div class="max-w-[1280px] mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
        >
          Our <span class="text-blue-500">Premium</span> Services
        </h1>
        <div class="flex items-center justify-center gap-3 text-xl font-bold">
          <NuxtLink
            to="/"
            class="text-gray-400 hover:text-blue-500 transition-colors"
            >Home</NuxtLink
          >
          <Icon name="ph:caret-right-bold" class="text-gray-300 w-5 h-5" />
          <span class="text-blue-500">Services</span>
        </div>
      </div>
    </section>

    <!-- Main Services -->
    <section class="py-24">
      <div class="max-w-[1280px] mx-auto px-4 space-y-32">
        <!-- Service Flow 1 -->
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div class="relative group">
            <div
              class="bg-pink-100 rounded-[4rem] p-4 -rotate-3 transition-transform group-hover:rotate-0 duration-700"
            >
              <div
                class="rounded-[3.2rem] overflow-hidden aspect-[4/3] bg-white"
              >
                <img
                  src="/photo/Gmi_Image.png"
                  alt="Infant Care"
                  class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000"
                />
              </div>
            </div>
            <div
              class="absolute -top-8 -left-8 w-24 h-24 bg-pink-500 rounded-3xl flex items-center justify-center text-white text-4xl font-black shadow-2xl rotate-12 group-hover:rotate-0 transition-transform"
            >
              01
            </div>
          </div>
          <div class="space-y-8">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-500 font-bold text-sm tracking-widest uppercase"
            >
              Ages 0-2 Years
            </div>
            <h2
              class="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
            >
              Infant & Toddler <span class="text-pink-500">Care</span>
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed">
              Our infant program is designed to provide a safe, warm, and
              nurturing environment for babies. We focus on individual needs and
              developmental milestones through personalized attention.
            </p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div
                class="flex items-center gap-4 text-lg text-gray-700 font-bold"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="ph:moon-fill" class="w-6 h-6" />
                </div>
                Napping Routines
              </div>
              <div
                class="flex items-center gap-4 text-lg text-gray-700 font-bold"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="ph:bowl-food-fill" class="w-6 h-6" />
                </div>
                Healthy Meals
              </div>
              <div
                class="flex items-center gap-4 text-lg text-gray-700 font-bold"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="ph:users-two-fill" class="w-6 h-6" />
                </div>
                Social Interaction
              </div>
              <div
                class="flex items-center gap-4 text-lg text-gray-700 font-bold"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="ph:heartbeat-fill" class="w-6 h-6" />
                </div>
                Safety Monitoring
              </div>
            </div>
          </div>
        </div>

        <!-- Service Flow 2 -->
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div class="space-y-8 order-2 lg:order-1">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-500 font-bold text-sm tracking-widest uppercase"
            >
              Ages 3-5 Years
            </div>
            <h2
              class="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
            >
              Quality <span class="text-blue-500">Preschool</span> Education
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed">
              Our curriculum-based program prepares children for the transition
              to kindergarten with a blend of academic learning and social skill
              development.
            </p>
            <div class="space-y-6">
              <div
                class="p-6 bg-white border-2 border-slate-50 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="font-bold text-xl text-gray-900 mb-2">
                  Early Literacy & Numeracy
                </div>
                <p class="text-gray-500">
                  Building strong foundations in reading, writing and
                  mathematics through fun activities.
                </p>
              </div>
              <div
                class="p-6 bg-white border-2 border-slate-50 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="font-bold text-xl text-gray-900 mb-2">
                  STEM Learning
                </div>
                <p class="text-gray-500">
                  Introducing science, technology, engineering, and math
                  concepts through hands-on discovery.
                </p>
              </div>
            </div>
          </div>
          <div class="relative group order-1 lg:order-2">
            <div
              class="bg-blue-100 rounded-[4rem] p-4 rotate-3 transition-transform group-hover:rotate-0 duration-700"
            >
              <div
                class="rounded-[3.2rem] overflow-hidden aspect-[4/3] bg-white"
              >
                <img
                  src="/photo/Gei_Image.png"
                  alt="Preschool"
                  class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000"
                />
              </div>
            </div>
            <div
              class="absolute -top-8 -right-8 w-24 h-24 bg-blue-500 rounded-3xl flex items-center justify-center text-white text-4xl font-black shadow-2xl skew-x-6 group-hover:skew-x-0 transition-transform"
            >
              02
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services Grid -->
    <section class="py-24 bg-blue-50/50">
      <div class="max-w-[1280px] mx-auto px-4">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            More Special Features
          </h2>
          <p class="text-xl text-gray-500">
            Wait, there's even more for your little angels!
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-blue-50"
          >
            <div
              class="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mb-8"
            >
              <Icon name="ph:bus-fill" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Transport Facility
            </h3>
            <p class="text-gray-500 text-lg leading-relaxed">
              Safe and reliable door-to-door transportation for your
              convenience.
            </p>
          </div>
          <div
            class="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-blue-50"
          >
            <div
              class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-8"
            >
              <Icon name="ph:broccoli-fill" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Organic Meals</h3>
            <p class="text-gray-500 text-lg leading-relaxed">
              Nutritious, balanced meals prepared with fresh, organic
              ingredients daily.
            </p>
          </div>
          <div
            class="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-blue-50"
          >
            <div
              class="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-500 mb-8"
            >
              <Icon name="ph:video-camera-fill" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Live Monitoring
            </h3>
            <p class="text-gray-500 text-lg leading-relaxed">
              Secure live camera access for parents to check in on their kids
              anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
