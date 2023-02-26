<template>
    <div>
        <div class="-mt-24 relative w-full py-8 px-12 bg-yellow-900 z-0">
            <div class="relative z-10 text-center py-24 md:py-48">
                <h1 class="text-white text-center text-4xl mb-4">
                    categories</h1>
                <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                    Products</h1>
                <p class="text-3xl text-white">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <span class="mx-3">/</span>
                    <a href="" class="underline">Products</a>
                </p>
            </div>
            <img src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
                class="w-full h-full absolute inset-0 object-cover opacity-70">
        </div>
        <div class="lg:w-11/12 mx-auto">
            <div class="mb-12 mt-20 px-8 lg:px-0">
                <h1 class="text-6xl font-bold mb-4">Shop with us</h1>
                <p>Browse from 230 latest items</p>
            </div>
            <div class="lg:flex relative mb-24 px-8">
                <div class="hidden lg:block mr-8 w-full lg:w-1/4 border-t-2 border-b-2 bg-white p-4 h-full">
                    <div class="">
                        <!-- Categories -->
                        <button @click="isopenCategories = !isopenCategories"
                            class="w-full uppercase font-bold mb-5 flex items-center justify-between">
                            Categories
                            <i :class="isopenCategories ? 'fa fa-minus' : 'fa fa-plus'" class="" aria-hidden="true"></i>
                        </button>
                        <div class="mb-6 w-full px-4" v-show="isopenCategories">
                            <ul>
                                <li class="mb-4">
                                    <div class="relative text-lg w-full">
                                        <div>
                                            <ul class="px-4">
                                                <li class="px-3 py-1 transition-colors duration-300 hover:bg-gray-200">
                                                    Check 1
                                                </li>
                                                <li class="px-3 py-1 transition-colors duration-300 hover:bg-gray-200">
                                                    Check 1
                                                </li>
                                                <li class="px-3 py-1 transition-colors duration-300 hover:bg-gray-200">
                                                    Check 1
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">Bags</li>
                                <li class="mb-4">Men</li>
                                <li class="mb-4">Women's Collection</li>
                            </ul>
                        </div>

                        <!-- Slider -->
                        <swiper :loop="true" :pagination="{
                            dynamicBullets: true,
                        }" :modules="modules" class="hidden lg:block">
                            <swiper-slide v-for="index in 10" :key="index">
                                <div class="mb-6 border-2 rounded-xl">
                                    <div class="overflow-hidden cursor-pointer rounded-t-xl relative group">
                                        <div
                                            class="z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                            <div
                                                class="transform-gpu w-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                <div class="text-center flex justify-center items-center"><button
                                                        class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                                            class="fa fa-shopping-cart"
                                                            aria-hidden="true"></i></button><button
                                                        class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                                            class="fa fa-search" aria-hidden="true"></i></button><button
                                                        class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                                            class="fa fa-heart-o" aria-hidden="true"></i></button></div>
                                            </div>
                                        </div><img alt=""
                                            class="object-cover w-full h-72 group-hover:scale-110 transition duration-300 ease-in-out"
                                            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&amp;usqp=CAU">
                                    </div>
                                    <div class="text-center my-6"><a href="" class="text-xl uppercase">HOSIERY LINGERIE
                                            SET</a>
                                        <p class="text-red-500 hover:text-red-600 mt-3">$529.00</p>
                                    </div>
                                </div>
                            </swiper-slide>

                        </swiper>
                        <!-- Brand -->
                        <button @click="isBrand = !isBrand"
                            class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                            brand
                            <i :class="isBrand ? 'fa fa-minus' : 'fa fa-plus'" class="" aria-hidden="true"></i>
                        </button>
                        <div class="mb-6 w-full px-4 w-full" v-show="isBrand">
                            <ul>
                                <li class="border-b" v-for="index in 6" :key="index">
                                    <div class="flex justify-between items-center">
                                        <div class="my-4">
                                            <input type="checkbox" class="mr-2">
                                            Brand {{ index }}
                                        </div>
                                        <p class="text-gray-400">(120)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- Product Type -->
                        <button @click="isProduct = !isProduct"
                            class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                            product
                            <i :class="isProduct ? 'fa fa-minus' : 'fa fa-plus'" class="" aria-hidden="true"></i>
                        </button>
                        <div class="mb-6 w-full px-4" v-show="isProduct">
                            <ul>
                                <li class="border-b" v-for="index in 6" :key="index">
                                    <div class="flex justify-between items-center">
                                        <div class="my-4">
                                            <input type="checkbox" class="mr-2">
                                            Product {{ index }}
                                        </div>
                                        <p class="text-gray-400">(120)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- Slider -->
                        <h3 class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                            Best seller
                        </h3>

                        <!-- Availibility -->
                        <h3 class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                            Availability
                        </h3>
                        <div class="mb-6 w-full px-4">
                            <ul>
                                <li class="border-b">
                                    <div class="flex justify-between items-center">
                                        <div class="my-4">
                                            <input type="checkbox" class="mr-2">
                                            In stock
                                        </div>
                                        <p class="text-gray-400">(120)</p>
                                    </div>
                                </li>
                                <li class="border-b">
                                    <div class="flex justify-between items-center">
                                        <div class="my-4">
                                            <input type="checkbox" class="mr-2">
                                            Out of stock
                                        </div>
                                        <p class="text-gray-400">(120)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- Price -->
                        <h3 class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                            PRIce
                        </h3>
                        <p>The highest price is $957$</p>
                        <div class="flex justify-between">
                            <input type="number" class="border w-full px-3 py-2 mr-2" value="0">
                            <input type="number" class="border w-full px-3 py-2 ml-2" value="0">
                        </div>
                        <!-- Submit -->
                        <button class="rounded-sm px-6 py-3 bg-gray-600 text-white mt-6">filter</button>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-center mb-6">
                        <div class="w-1/2">
                            <button @click="onToggle"
                                class="lg:hidden mx-3 mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                                                                                                                                  before:bottom-0 before:left-0 before:bg-black
                                                                                                                                                  before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                                                                                                                                                  before:transition before:ease-in-out before:duration-300">
                                <i class="fa fa-filter" aria-hidden="true"></i>
                                <span class="ml-2">Filters</span>
                            </button>
                        </div>
                        <div class="relative w-full lg:w-1/2">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 pl-10 w-full text-sm border"
                                placeholder="Search Mockups, Logos..." required>
                            <button type="submit"
                                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                    <h1 class="uppercase text-5xl mb-12">Classical bikes</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        <div class="mb-6 border-2 rounded-xl" v-for="index in 8" :key="index">
                            <router-link to="/shopDetail">
                                <div class="z-0 overflow-hidden cursor-pointer rounded-t-xl relative group">
                                    <div
                                        class="z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                        <div
                                            class="transform-gpu w-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                            <div class="text-center flex justify-center items-center">
                                                <router-link to="shopdetail"
                                                    class="border p-2 mx-2 hover:bg-gray-200 hover:text-black rounded-sm"><i
                                                        class="fa fa-shopping-cart" aria-hidden="true"></i></router-link>
                                                <router-link to="/"
                                                    class="border p-2 mx-2 hover:bg-gray-200 hover:text-black rounded-sm"><i
                                                        class="fa fa-search" aria-hidden="true"></i></router-link>

                                            </div>
                                        </div>
                                    </div>
                                    <img alt=""
                                        class="object-cover w-full h-72 group-hover:scale-110 transition duration-300 ease-in-out"
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
                    <button class="flex mx-auto rounded-full border bg-black text-white hover:bg-gray-800 duration-200 px-8 py-3 my-8">Load more</button>
                </div>
            </div>
            <transition name="fade">
                <div class="lg:hidden" v-if="isModalVisible"
                    v-bind:class="{ 'hidden': !isModalVisible, 'block': isModalVisible }">
                    <div @click="onToggle" class="fixed bg-black opacity-70 inset-0 z-10 h-full"></div>
                    <div
                        class="w-72 h-screen fixed top-0 max-w-lg p-3 my-auto z-20 shadow-lg bg-white overflow-scroll z-50">
                        <div class="">
                            <div class="flex justify-between mb-3">
                                <div class=""></div>
                                <div class="">
                                    <button @click="onToggle" class="px-3 py-2 border rounded-full"><i class="fa fa-times"
                                            aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <!-- Categories -->
                            <button @click="isopenCategories = !isopenCategories"
                                class="w-full uppercase font-bold mb-5 flex items-center justify-between">
                                Categories
                                <i :class="isopenCategories ? 'fa fa-minus' : 'fa fa-plus'" class="" aria-hidden="true"></i>
                            </button>
                            <div class="mb-6 w-full px-4" v-show="isopenCategories">
                                <ul>
                                    <li class="mb-4">
                                        <div class="relative text-lg w-full">
                                            <div>
                                                <ul class="px-4">
                                                    <li class="px-3 py-1 transition-colors duration-300 hover:bg-gray-200">
                                                        Check 1
                                                    </li>
                                                    <li class="px-3 py-1 transition-colors duration-300 hover:bg-gray-200">
                                                        Check 1
                                                    </li>
                                                    <li class="px-3 py-1 transition-colors duration-300 hover:bg-gray-200">
                                                        Check 1
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-4">Bags</li>
                                    <li class="mb-4">Men</li>
                                    <li class="mb-4">Women's Collection</li>
                                </ul>
                            </div>
                            <!-- Brand -->
                            <button @click="isBrand = !isBrand"
                                class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                                brand
                                <i :class="isBrand ? 'fa fa-minus' : 'fa fa-plus'" class="" aria-hidden="true"></i>
                            </button>
                            <div class="mb-6 w-full px-4 w-full" v-show="isBrand">
                                <ul>
                                    <li class="border-b" v-for="index in 6" :key="index">
                                        <div class="flex justify-between items-center">
                                            <div class="my-4">
                                                <input type="checkbox" class="mr-2">
                                                Brand {{ index }}
                                            </div>
                                            <p class="text-gray-400">(120)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <!-- Product Type -->
                            <button @click="isProduct = !isProduct"
                                class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                                product
                                <i :class="isProduct ? 'fa fa-minus' : 'fa fa-plus'" class="" aria-hidden="true"></i>
                            </button>
                            <div class="mb-6 w-full px-4" v-show="isProduct">
                                <ul>
                                    <li class="border-b" v-for="index in 6" :key="index">
                                        <div class="flex justify-between items-center">
                                            <div class="my-4">
                                                <input type="checkbox" class="mr-2">
                                                Product {{ index }}
                                            </div>
                                            <p class="text-gray-400">(120)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <!-- Slider -->
                            <h3 class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                                Best seller
                            </h3>

                            <!-- Availibility -->
                            <h3 class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                                Availability
                            </h3>
                            <div class="mb-6 w-full px-4">
                                <ul>
                                    <li class="border-b">
                                        <div class="flex justify-between items-center">
                                            <div class="my-4">
                                                <input type="checkbox" class="mr-2">
                                                In stock
                                            </div>
                                            <p class="text-gray-400">(120)</p>
                                        </div>
                                    </li>
                                    <li class="border-b">
                                        <div class="flex justify-between items-center">
                                            <div class="my-4">
                                                <input type="checkbox" class="mr-2">
                                                Out of stock
                                            </div>
                                            <p class="text-gray-400">(120)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- Price -->
                            <h3 class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between">
                                PRIce
                            </h3>
                            <p>The highest price is $957$</p>
                            <div class="flex justify-between">
                                <input type="number" class="border w-full px-3 py-2 mr-2" value="0">
                                <input type="number" class="border w-full px-3 py-2 ml-2" value="0">
                            </div>


                            <!-- Submit -->
                            <button class="rounded-sm px-6 py-3 bg-gray-600 text-white mt-6">filter</button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

export default {
    name: "ShoppingPage",
    data() {
        return {
            isopenCategories: true,
            isBrand: true,
            isProduct: true,
            sideBar: false,
        };
    },
    methods: {
        onToggle() {
            this.sideBar = !this.sideBar;
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        isModalVisible() {
            return this.sideBar;
        },
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },


}
</script>

<style></style>