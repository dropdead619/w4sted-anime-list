<template>
  <button
    :class="{ 'bg-gray-500': $attrs.disabled }"
    class="px-3 py-2 font-semibold transition bg-transparent rounded-md shadow dark:text-white delay-25 focus:outline-none hover:hue-rotate-60 hover:drop-shadow-[0rem_0rem_0.4rem_#0ff] hover:scale-105"
  >
    <slot />
  </button>
</template>
