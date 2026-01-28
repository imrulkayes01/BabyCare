<template>
  <main class="pt-[80px]">
    <!-- Breadcrumb/Header -->
    <section class="bg-[#FFFDF8] py-20 relative overflow-hidden">
      <div class="max-w-[1280px] mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
        >
          Get In <span class="text-yellow-500">Touch</span>
        </h1>
        <div class="flex items-center justify-center gap-3 text-xl font-bold">
          <NuxtLink
            to="/"
            class="text-gray-400 hover:text-yellow-600 transition-colors"
            >Home</NuxtLink
          >
          <Icon name="ph:caret-right-bold" class="text-gray-300 w-5 h-5" />
          <span class="text-yellow-600">Contact</span>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div
          class="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-50 relative"
        >
          <!-- Decorative Stamp -->
          <div
            class="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white rotate-12 shadow-xl border-4 border-white animate-pulse"
          >
            <Icon name="ph:paper-plane-tilt-fill" class="w-12 h-12" />
          </div>

          <h2 class="text-4xl font-black text-gray-900 mb-8">
            Send Us A Message
          </h2>
          <form @submit.prevent class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <label class="font-bold text-gray-700 ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  class="w-full px-8 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-pink-500 focus:bg-white outline-none transition-all font-medium"
                />
              </div>
              <div class="space-y-3">
                <label class="font-bold text-gray-700 ml-1"
                  >Email Address</label
                >
                <input
                  type="email"
                  placeholder="john@example.com"
                  class="w-full px-8 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
                />
              </div>
            </div>
            <div class="space-y-3">
              <label class="font-bold text-gray-700 ml-1">Subject</label>
              <input
                type="text"
                placeholder="Admission inquiry"
                class="w-full px-8 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-yellow-500 focus:bg-white outline-none transition-all font-medium"
              />
            </div>
            <div class="space-y-3">
              <label class="font-bold text-gray-700 ml-1">Your Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                class="w-full px-8 py-5 bg-gray-50 rounded-3xl border-2 border-transparent focus:border-pink-500 focus:bg-white outline-none transition-all resize-none font-medium"
              ></textarea>
            </div>
            <button
              class="w-full py-6 bg-gray-900 text-white rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl hover:-translate-y-1 active:scale-[0.98]"
            >
              Send Message Now
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-12">
          <div class="space-y-8">
            <h2
              class="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
            >
              We're Always Here <br />To
              <span
                class="text-pink-500 italic underline decoration-blue-500 underline-offset-8"
                >Help You</span
              >
            </h2>
            <p class="text-xl text-gray-500 leading-relaxed">
              Have questions about our programs or admissions? Don't hesitate to
              reach out! Our friendly staff is ready to assist you every step of
              the way.
            </p>
          </div>

          <div class="grid gap-8">
            <div
              class="flex items-center gap-6 p-8 bg-pink-50/50 rounded-[2.5rem] group hover:bg-pink-50 transition-all border-2 border-transparent hover:border-pink-100"
            >
              <div
                class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-pink-500 shadow-sm group-hover:scale-110 transition-transform"
              >
                <Icon name="ph:phone-call-fill" class="w-8 h-8" />
              </div>
              <div>
                <div
                  class="text-sm font-bold text-pink-500 uppercase tracking-widest mb-1"
                >
                  Call Anytime
                </div>
                <div class="text-2xl font-black text-gray-900 tracking-tight">
                  +880 1800 000 000
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-6 p-8 bg-blue-50/50 rounded-[2.5rem] group hover:bg-blue-50 transition-all border-2 border-transparent hover:border-blue-100"
            >
              <div
                class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform"
              >
                <Icon name="ph:envelope-fill" class="w-8 h-8" />
              </div>
              <div>
                <div
                  class="text-sm font-bold text-blue-500 uppercase tracking-widest mb-1"
                >
                  Email Us
                </div>
                <div
                  class="text-2xl font-black text-gray-900 uppercase tracking-tight"
                >
                  support@babycare.com
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-6 p-8 bg-yellow-50/50 rounded-[2.5rem] group hover:bg-yellow-50 transition-all border-2 border-transparent hover:border-yellow-100"
            >
              <div
                class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-yellow-600 shadow-sm group-hover:scale-110 transition-transform"
              >
                <Icon name="ph:map-pin-fill" class="w-8 h-8" />
              </div>
              <div>
                <div
                  class="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-1"
                >
                  Our Location
                </div>
                <div class="text-2xl font-black text-gray-900 tracking-tight">
                  Sweet City, Kids State 456
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
