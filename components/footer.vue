<template>
  <footer
    class="bg-[#1A1A1A] text-white pt-24 pb-12 relative overflow-visible mt-20"
  >
    <!-- Decorative curve top -->
    <div
      class="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%]"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-full h-[60px] md:h-[100px] fill-[#1A1A1A]"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        ></path>
      </svg>
    </div>

    <div
      class="max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
    >
      <!-- Logo & Info -->
      <div class="space-y-8">
        <NuxtLink
          to="/"
          class="flex items-center text-3xl font-extrabold tracking-tight select-none"
        >
          <span class="text-pink-500">Baby</span
          ><span class="text-blue-500">Care</span>
        </NuxtLink>
        <p class="text-gray-400 leading-relaxed text-lg">
          The most trusted child care center in your city. We provide a safe,
          nurturing and stimulating environment for your little ones to grow.
        </p>
        <div class="flex gap-4">
          <a
            href="#"
            class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-pink-500 transition-all duration-300 group"
          >
            <Icon
              name="ph:facebook-logo-fill"
              class="w-6 h-6 group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#"
            class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group"
          >
            <Icon
              name="ph:twitter-logo-fill"
              class="w-6 h-6 group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#"
            class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-all duration-300 group"
          >
            <Icon
              name="ph:instagram-logo-fill"
              class="w-6 h-6 group-hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="lg:pl-8">
        <h4 class="text-2xl font-bold mb-8 relative inline-block">
          Quick Links
          <span
            class="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500 rounded-full"
          ></span>
        </h4>
        <ul class="space-y-4 text-gray-400 text-lg">
          <li>
            <NuxtLink
              to="/"
              class="hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span> About
              Us
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/programs"
              class="hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              Programs
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Contact
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-2xl font-bold mb-8 relative inline-block">
          Special Services
          <span
            class="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"
          ></span>
        </h4>
        <ul class="space-y-4 text-gray-400 text-lg">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Infant
            Care
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Preschool
            Education
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Playgroup
            & Social
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> After
            School Program
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Bilingual
            Learning
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="space-y-8">
        <h4 class="text-2xl font-bold mb-8 relative inline-block">
          Contact Us
          <span
            class="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500 rounded-full"
          ></span>
        </h4>
        <div class="space-y-6">
          <div class="flex items-start gap-4 group">
            <div
              class="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 flex-shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors"
            >
              <Icon name="ph:map-pin-fill" class="w-6 h-6" />
            </div>
            <span class="text-gray-400 text-lg"
              >123 Baby Care St, Sweet City, Kids State 45678</span
            >
          </div>
          <div class="flex items-center gap-4 group">
            <div
              class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors"
            >
              <Icon name="ph:phone-fill" class="w-6 h-6" />
            </div>
            <span class="text-gray-400 text-lg">+880 1800 000 000</span>
          </div>
          <div class="flex items-center gap-4 group">
            <div
              class="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 flex-shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors"
            >
              <Icon name="ph:envelope-simple-fill" class="w-6 h-6" />
            </div>
            <span class="text-gray-400 text-lg lowercase"
              >support@babycare.com</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="max-w-[1280px] mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500"
    >
      <p>&copy; 2026 BabyCare. All Rights Reserved. Designed with Love.</p>
      <div class="flex gap-6">
        <a href="#" class="hover:text-white transition-colors"
          >Privacy Policy</a
        >
        <a href="#" class="hover:text-white transition-colors"
          >Terms of Service</a
        >
      </div>
    </div>
  </footer>
</template>
