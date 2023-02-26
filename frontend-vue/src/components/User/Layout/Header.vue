<template>
  <header class="sticky top-0 z-10 bg-white">
    <div class="flex justify-between p-6 border-b shadow-lg">
      <div class="w-full flex">
        <div class="flex justify-between items-center w-full">
          <a href="/"><img src="https://themewagon.github.io/shionhouse/assets/img/logo/logo.png"
              alt="" /></a>
          <div class="hidden lg:flex justify-between items-center w-4/5">
            <nav>
              <ul class="uppercase lg:flex">
                <li
                  class="mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                  <a href="/">Home</a>
                </li>
                <li
                  class="mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                  <a href="/shop">shop</a>
                </li>
                <li
                  class="mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                  <a href="/about">About</a>
                </li>
                <li
                  class="mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                  <a href="/blog">Blog</a>
                </li>
                <li
                  class="mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div class="lg:flex items-center">
              <div class="flex mr-12 lg:text-sm uppercase lg:">
                <a href="/login"
                  class="mx-3 mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">Login</a>
                <span>/</span>
                <a href="/register"
                  class="mx-3 mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">Register</a>
              </div>
              <div class="flex">
                <div class="relative">
                  <button class="mx-3" @click="toggleAccount">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </button>
                  <!-- Account -->
                  <div class="absolute z-30 right-0 shadown-lg top-6" :class="{ hidden: !account }">
                    <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                      <a href="#" class="block font-semibold px-4 py-2 | hover:bg-gray-200">Your profile</a>
                      <a href="#" class="block font-semibold px-4 py-2 | hover:bg-gray-200">Settings</a>
                      <a href="#" class="block font-semibold px-4 py-2 | hover:bg-gray-200">Sign out</a>
                    </div>
                  </div>
                </div>
                <button class="mx-3" @click="searchButton">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
                <button class="mx-3" @click="onOpenCart">
                  <i class="fa fa-shopping-cart mr-1" aria-hidden="true"></i><sup>0</sup>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden flex items-center">
        <button class="mx-3" @click="searchButton">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <button class="mx-3 flex" @click="onOpenCart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i><sup>0</sup>
        </button>
        <button class="border px-2 py-1" @click="onToggle">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <!-- Cart -->
    <transition name="fade">
      <div v-if="isModelCartAvailable">
        <div @click="onOpenCart" class="fixed bg-black opacity-70 inset-0 z-10 h-full"></div>
        <div
          class="w-3/4 lg:w-1/3 h-screen fixed top-0 right-0 max-w-lg p-3 my-auto z-20 shadow-lg bg-white z-50 overflow-auto scrollbar-hide">
          <div class="pb-3">
            <div class="flex justify-between items-center border-b-2 pb-4 mb-5 pt-2">
              <h1 class="font-bold text-2xl text-green-500">Shopping Cart</h1>
              <button @click="onOpenCart">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <div class="" v-for="index in 5" :key="index">
              <div class="flex w-full mt-5">
                <img src="https://www.smartdatajob.com/images/joomlart/demo/default.jpg"
                  class="object-cover w-24 h-24 mr-4" alt="" />
                <div class="">
                  <p>Product</p>
                  <p>1 x <span class="font-bold text-lg">$92.00</span></p>
                </div>
              </div>
            </div>
            <div class="border-b py-5 mb-5"></div>
            <div class="border-b pb-5">
              <div class="flex justify-between font-bold">
                <h1>Total:</h1>
                <p>$92.00</p>
              </div>
            </div>
            <div class="mt-5">
              <button class="w-full border my-2 py-3 bg-green-500 hover:bg-green-600 text-white">
                proceed to checkout
              </button>
              <button class="w-full border my-2 py-3 bg-gray-300 hover:bg-gray-400">
                view cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Sidebar -->
    <transition name="fade">
      <div class="lg:hidden" v-if="isModalVisible" v-bind:class="{ hidden: !isModalVisible, block: isModalVisible }">
        <div @click="onToggle" class="fixed bg-black opacity-70 inset-0 z-10 h-full"></div>
        <div class="w-64 h-screen fixed top-0 max-w-lg p-3 my-auto z-20 shadow-lg bg-white z-50">
          <div class="">
            <div class="flex justify-between">
              <div class=""></div>
              <div class="">
                <button @click="onToggle" class="px-2 py-1 border rounded-full">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="my-5">
              <a href="">
                <img src="https://themewagon.github.io/shionhouse/assets/img/logo/logo.png" alt="" />
              </a>
            </div>
            <nav>
              <ul class="uppercase lg:flex leading-9">
                <li class="">
                  <a href="/">Home</a>
                </li>
                <li class="">
                  <button class="w-full flex justify-between uppercase items-center"
                    v-on:click="this.shopDropdown = !this.shopDropdown">
                    <span> shop </span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      class="h-4 w-4 transform transition-transform duration-200 ease-in-out">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div class="mx-4">
                    <ul v-show="shopDropdown">
                      <li><a href="">Menu 1</a></li>
                      <li><a href="">Menu 2</a></li>
                      <li><a href="">Menu 3</a></li>
                      <li><a href="">Menu 4</a></li>
                      <li><a href="">Menu 5</a></li>
                    </ul>
                  </div>
                </li>
                <li class="">
                  <a to="/about">About</a>
                </li>
                <li class="">
                  <a href="/blog">Blog</a>
                </li>
                <li class="">
                  <a href="/contact">Contact</a>
                </li>
                <li class="text-center mt-3">
                  <a href="/login">Login</a>
                  <span class="mx-3">/</span>
                  <a href="/register">Register</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </transition>
    <!-- Search -->
    <div v-if="search" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="searchButton"></div>
    <div class="absolute w-full top-12 z-50 left-0" :class="{ hidden: !search }">
      <div class="flex w-full px-4">
        <form action="" class="w-full">
          <div class="relative w-full">
            <input type="text" class="w-full border p-3" placeholder="search..." />
          </div>
        </form>
        <button @click="searchButton" class="p-3 border-white border rounded-full text-white px-4 mx-4">
          <li class="fa fa-close"></li>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      isOpen: false,
      shopDropdown: false,
      isOpenCart: false,
      search: false,
      account: false,
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
    isModelCartAvailable() {
      return this.isOpenCart;
    },
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    onOpenCart() {
      this.isOpenCart = !this.isOpenCart;
    },
    searchButton() {
      this.search = !this.search;
    },
    toggleAccount() {
      this.account = !this.account;
    },
  },
};
</script>

<style>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
