<template>
  <header class="w-full bg-white/80 backdrop-blur-md py-4 shadow-sm font-sans">
    <div class="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center text-3xl font-extrabold tracking-tight select-none"
      >
        <span class="text-pink-500">Baby</span
        ><span class="text-blue-500">Care</span>
      </NuxtLink>

      <!-- Navigation Menu (Desktop) -->
      <nav class="hidden lg:block">
        <ul
          class="flex items-center space-x-8 text-lg font-medium text-gray-600"
        >
          <li>
            <NuxtLink
              to="/"
              class="text-pink-500 hover:text-pink-600 transition-colors"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-pink-500 transition-colors"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="hover:text-pink-500 transition-colors"
              >Services</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/programs"
              class="hover:text-pink-500 transition-colors"
              >Programs</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/events" class="hover:text-pink-500 transition-colors"
              >Events</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="hover:text-pink-500 transition-colors"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-6">
        <div class="hidden xl:flex items-center gap-3">
          <!-- Icon Composition -->
          <div class="relative pr-2">
            <Icon
              name="ph:phone-fill"
              class="w-9 h-9 text-pink-500 transform rotate-12"
            />
            <Icon
              name="fa6-solid:comment-dots"
              class="absolute -top-1 -right-0 w-5 h-5 text-blue-500 bg-[#4D65F9] rounded-full border-2 border-[#4D65F9]"
            />
          </div>

          <!-- Text -->
          <div class="flex flex-col items-start leading-none ml-1">
            <span class="text-base font-medium text-pink-400 mb-1"
              >Have any questions?</span
            >
            <span class="text-base font-bold text-blue-500"
              >Free: +8801800000000</span
            >
          </div>
        </div>

        <!-- Search Button -->
        <button
          class="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200/50"
        >
          <Icon name="heroicons:magnifying-glass-20-solid" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>
