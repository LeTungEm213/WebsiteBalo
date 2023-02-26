<template>
  <div class="">
    <!-- End Header -->
    <div class="pt-12 bg-gray-200 pb-12">
      <div class="flex justify-between items-center">
        <div class="flex-none p-3 text-center">
          <ul class="">
            <li>
              <a href=""><i class="fa fa-facebook-square hover:text-gray-600 my-2" style="font-size:18px"
                  aria-hidden="true"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-linkedin-square hover:text-gray-600 my-2" style="font-size:18px"
                  aria-hidden="true"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-twitter-square hover:text-gray-600 my-2" style="font-size:18px"
                  aria-hidden="true"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-instagram hover:text-gray-600 my-2" style="font-size:18px"
                  aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
        <div class="flex-auto">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU"
            class="w-full h-1/2 lg:h-screen" alt="" />
        </div>
      </div>
      <div class="flex items-center mt-6 pl-7">
        <!-- Open Video -->
        <button class="border border-gray-500 p-2 rounded-full relative">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU"
            class="w-24 h-24 rounded-full" alt="" />
          <div class="absolute top-1/2 left-1/2 opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="absolute text-white top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            </svg>
          </div>
        </button>
        <!-- End Video -->
        <div class="mx-3">
          <h3 class="text-3xl mb-2">Watch</h3>
          <p>
            The Eco-making of Bogo <br />
            Bamboo Bikes
          </p>
        </div>
      </div>
    </div>
    <div class="mb-20 multColor" data-aos="fade-down" data-aos-duration="1500" data-aos-delay='500'>
      <div class="relative overflow-hidden h-auto w-full px-[10vw] lg:px-[16vw] cursor-grab">
        <div class="bg-gray-200">
          <h1 class="text-5xl mb-8">Latest New</h1>
        </div>
        <swiper :slidesPerView="1" :grabCursor="true" :scrollbar="true" :modules="modules" :spaceBetween="30"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '1500': {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }" class="swiper-container slider1 swiper-initialized swiper-horizontal swiper-pointer-events">
          <swiper-slide v-for="index in 10" :key="index" class="pb-12">
            <div class="shadow-lg border">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU"
                class="w-full" alt="" />
              <div class="p-6">
                <a href="" class="mb-5 font-bold text-2xl">Bogo Set to Launch in Singapore as a Moves Towards
                  Sustainable Transportation</a>
                <p class="mt-10">June 30, 2021 — Cities, Events</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="relative w-11/12 md:w-8/12 mx-auto" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay='500'>
      <h1 class="text-center text-5xl font-bold mb-6">BEST SELLERS</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div class="mb-6 border-2 rounded-xl" v-for="index in 8" :key="index">
          <router-link to="/shopDetail">
            <div class="z-0 overflow-hidden cursor-pointer rounded-t-xl relative group">
              <div
                class="z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div
                  class="transform-gpu w-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div class="text-center flex justify-center items-center">
                    <router-link to="shopdetail" class="border p-2 mx-2 hover:bg-gray-200 hover:text-black rounded-sm"><i
                        class="fa fa-shopping-cart" aria-hidden="true"></i></router-link>
                    <router-link to="/" class="border p-2 mx-2 hover:bg-gray-200 hover:text-black rounded-sm"><i
                        class="fa fa-search" aria-hidden="true"></i></router-link>

                  </div>
                </div>
              </div>
              <img alt="" class="object-cover w-full h-72 group-hover:scale-110 transition duration-300 ease-in-out"
                src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU" />
            </div>
          </router-link>
          <div class="text-center my-6">
            <router-link to="shopdetail" class="text-xl uppercase">HOSIERY LINGERIE
              SET</router-link>
            <p class="text-red-500 hover:text-red-600 mt-3">$529.00</p>
          </div>
        </div>
      </div>
      <button
        class="flex my-12 border rounded-full px-8 py-3 mx-auto bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:from-blue-500 hover:to-blue-900 duration-1000">
        Shop All Products
      </button>
    </div>
    <div class="relative my-32" data-aos="zoom-out" data-aos-duration="1500" data-aos-delay='500'>
      <div class="text-center mb-10">
        <h1 class="font-bold text-4xl mb-4">News</h1>
        <p class="text-gray-600 italic text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 w-11/12 md:w-7/12 mx-auto gap-10">
        <div class="shadow-lg border rounded-t-2xl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU"
            class="w-full" alt="" />
          <div class="p-4">
            <h1 class="font-bold text-2xl my-2">Speed cycle</h1>
            <div class="flex justify-between my-4">
              <p>Post by : Den</p>
              <p>20-12-2019</p>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
          </div>
        </div>
        <div class="shadow-lg border rounded-t-2xl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU"
            class="w-full" alt="" />
          <div class="p-4">
            <h1 class="font-bold text-2xl my-2">Speed cycle</h1>
            <div class="flex justify-between my-4">
              <p>Post by : Den</p>
              <p>20-12-2019</p>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
          </div>
        </div>
        <div class="shadow-lg border rounded-t-2xl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU"
            class="w-full" alt="" />
          <div class="p-4">
            <h1 class="font-bold text-2xl my-2">Speed cycle</h1>
            <div class="flex justify-between my-4">
              <p>Post by : Den</p>
              <p>20-12-2019</p>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- tailwind Carousel -->
    <div class="" data-aos="flip-up" data-aos-duration="1500" data-aos-delay='500'>
      <swiper class="relative overflow-hidden w-full cursor-grab py-10 bg-gray-300 px-6" :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }" :loop="true" :scrollbar="false" :modules="modules" :slidesPerView="1" :spaceBetween="30" :breakpoints="{
  '640': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 5,
    spaceBetween: 50,
  },
}">
        <swiper-slide v-for="index in 10" :key="index">
          <div class="opacity-50 hover:opacity-100">
            <h5 class="text-3xl">
              “The carbon frame and sporty handlebars make the bike feel agile,
              too“
            </h5>
            <a rel="noopener noreferrer"><img
                src="https://images.prismic.io/gogoro-eeyo/4bd12e66-c86e-49a8-a6df-30786ff8fb17_engadget-logo.svg?auto=compress,format"
                class="w-2/5 pt-8" /></a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Scrollbar } from "swiper";

export default {
  name: "HomePage",
  data() {
    return {
      toggle: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Scrollbar],
    };
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
    }
  },
  computed: {

  }
};
</script>

<style>
.multColor {
  background-image: linear-gradient(180deg, rgb(229 231 235) 30%, white 20%);
}

.swiper-scrollbar {
  margin: auto;
  width: 65% !important;
  position: relative !important;
}

.slider1 {
  overflow: initial !important;
}
</style>
