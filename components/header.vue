<template>
  <header
    class="w-full bg-white/80 backdrop-blur-md py-4 shadow-sm font-sans sticky top-0 z-50"
  >
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

      <div class="flex items-center gap-4">
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
          class="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200/50"
        >
          <Icon name="heroicons:magnifying-glass-20-solid" class="w-6 h-6" />
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
        >
          <Icon
            :name="
              isMenuOpen
                ? 'heroicons:x-mark-20-solid'
                : 'heroicons:bars-3-bottom-right-solid'
            "
            class="w-7 h-7"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4"
      >
        <nav>
          <ul class="flex flex-col space-y-4 text-lg font-medium text-gray-600">
            <li>
              <NuxtLink
                to="/"
                class="block text-pink-500 hover:text-pink-600 transition-colors"
                @click="isMenuOpen = false"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="block hover:text-pink-500 transition-colors"
                @click="isMenuOpen = false"
                >About</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="block hover:text-pink-500 transition-colors"
                @click="isMenuOpen = false"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/programs"
                class="block hover:text-pink-500 transition-colors"
                @click="isMenuOpen = false"
                >Programs</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/events"
                class="block hover:text-pink-500 transition-colors"
                @click="isMenuOpen = false"
                >Events</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="block hover:text-pink-500 transition-colors"
                @click="isMenuOpen = false"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- Mobile Contact Info -->
        <div class="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
          <div class="relative pr-2">
            <Icon
              name="ph:phone-fill"
              class="w-8 h-8 text-pink-500 transform rotate-12"
            />
          </div>
          <div class="flex flex-col items-start leading-none">
            <span class="text-sm font-medium text-pink-400 mb-1"
              >Have any questions?</span
            >
            <span class="text-sm font-bold text-blue-500">+8801800000000</span>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>
