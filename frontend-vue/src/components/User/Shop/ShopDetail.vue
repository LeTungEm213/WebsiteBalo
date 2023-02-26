<template>
    <div class="mb-24">
        <div class="-mt-24 relative w-full py-8 px-12 bg-yellow-900 z-0 mb-12 lg:mb-24">
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
        <div class="lg:w-8/12 mx-auto">
            <div class="pb-24 border-b  mb-16">
                <div class="lg:flex justify-between">
                    <div class="mx-8 lg:w-1/2">
                        <swiper :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mb-12">
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </swiper-slide>
                        </swiper>
                        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                            :watchSlidesVisibility="true" :watchSlidesProgress="true" class="mySwiper">
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide>
                            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
                        </swiper>
                    </div>
                    <div class="mt-12 lg:mt-0 mx-8 leading-loose">
                        <h1 class="text-3xl font-bold">Black Peppepr Read</h1>
                        <p class="text-red-500 my-3">$80.00</p>
                        <p class="mb-3">Availability: <span class="text-red-500">10 Left In Stock</span></p>
                        <p class="text-gray-600 mb-6">There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable.</p>
                        <div class="my-5">
                            <div class="flex w-full my-3">
                                <h3 class="text-lg w-1/4">Size:</h3>
                                <div>
                                    <ul class="flex w-full">
                                        <li><button class="w-full mx-4 hover:text-gray-500"> XL</button></li>
                                        <li><button class="w-full mx-4 hover:text-gray-500"> ML</button></li>
                                        <li><button class="w-full mx-4 hover:text-gray-500"> XS</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex w-full my-3">
                                <h3 class="text-lg w-1/4">Material:</h3>
                                <div>
                                    <ul class="flex justify-between">
                                        <li><button class="w-full mx-4 hover:text-gray-500"> Partex</button></li>
                                        <li><button class="w-full mx-4 hover:text-gray-500"> Wood</button></li>
                                        <li><button class="w-full mx-4 hover:text-gray-500"> Glass</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between mt-12">
                            <div class="flex w-full">
                                <button class="border-b border-t border-l px-3 py-1 border-gray-500 hover:bg-gray-200"
                                    @click="changeCounter('-1')" type="button" name="button">
                                    -
                                </button>
                                <input class="text-center border border-gray-500 w-full" type="text" name="name"
                                    :value="counter">
                                <button class="border-r border-b border-t px-3 py-1 border-gray-500 hover:bg-gray-200"
                                    @click="changeCounter('1')" type="button" name="button">
                                    +
                                </button>
                            </div>
                            <button class="fixed lg:relative bottom-0 left-0 py-2 z-0 uppercase text-white bg-gray-500 w-full border lg:mx-2 hover:bg-gray-600">Add to
                                cart</button>
                            <button class="border-2 ml-2 lg:ml-0 p-2 border-gray-500 hover:bg-gray-500 rounded-sm"><i class="fa fa-heart-o"
                                    aria-hidden="true"></i></button>
                        </div>
                        <button class="w-full py-2 bg-gray-200 hover:bg-gray-300 mt-12">buy it now</button>
                        <p class="text-lg my-6">Guaranteed safe checkout</p>
                        <div class="border-b pb-4 mb-4">
                            <ul class="flex">
                                <li class="mr-2"><a href=""><img
                                            src="https://aglobal.vn/upload/images/amazon_logo_500500.png"
                                            class="w-8 h-8 border rounded-md" alt=""></a></li>
                                <li class="mx-2"><a href=""><img
                                            src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                                            class="w-8 h-8 border rounded-md" alt=""></a></li>
                            </ul>
                        </div>
                        <div>
                            <ul class="flex">
                                <li class="mr-2"><a href=""><img
                                            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
                                            class="w-8 h-8 rounded-full" alt=""></a></li>
                                <li class="mx-2"><a href=""><img
                                            src="https://play-lh.googleusercontent.com/x3XxTcEYG6hYRZwnWAUfMavRfNNBl8OZweUgZDf2jUJ3qjg2p91Y8MudeXumaQLily0"
                                            class="w-8 h-8 rounded-full" alt=""></a></li>
                                <li class="mx-2"><a href=""><img
                                            src="https://i.pinimg.com/originals/61/6a/d8/616ad83e3cf5ef66fbcc43acb2b7499a.png"
                                            class="w-8 h-8 rounded-full" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap ">
                <div class="w-full">
                    <ul class="inline-flex pt-2 px-1 w-full border-b justify-center">
                        <li>
                            <a class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal"
                                v-on:click="toggleTabs(1)" v-bind:class="{
                                    'border-none': openTab !== 1,
                                    'border-l border-r border-t': openTab === 1,
                                }">
                                Description
                            </a>
                        </li>
                        <li>
                            <a class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal"
                                v-on:click="toggleTabs(2)" v-bind:class="{
                                    'border-none': openTab !== 2,
                                    'border-l border-r border-t': openTab === 2,
                                }">
                                Infomation
                            </a>
                        </li>
                    </ul>
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">
                                <div v-bind:class="{
                                    hidden: openTab !== 1,
                                    block: openTab === 1,
                                }">
                                    <h1 class="my-8 text-3xl font-bold">Product Description</h1>
                                    <p>
                                        Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                                        sea. Consetetur vero aliquyam invidunt duo dolores et duo
                                        sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                                        consetetur invidunt sed sed et, lorem duo et eos elitr,
                                        sadipscing kasd ipsum rebum diam. Dolore diam stet rebum
                                        sed tempor kasd eirmod. Takimata kasd ipsum accusam
                                        sadipscing, eos dolores sit no ut diam consetetur duo
                                        justo est, sit sanctus diam tempor aliquyam eirmod nonumy
                                        rebum dolor accusam, ipsum kasd eos consetetur at sit
                                        rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                                        sanctus eirmod takimata dolor ea invidunt. Dolore magna
                                        est eirmod sanctus dolor, amet diam et eirmod et ipsum.
                                        Amet dolore tempor consetetur sed lorem dolor sit lorem
                                        tempor. Gubergren amet amet labore sadipscing clita clita
                                        diam clita. Sea amet et sed ipsum lorem elitr et, amet et
                                        labore voluptua sit rebum. Ea erat sed et diam takimata
                                        sed justo. Magna takimata justo et amet magna et.
                                    </p>
                                </div>
                                <div v-bind:class="{
                                    hidden: openTab !== 2,
                                    block: openTab === 2,
                                }">
                                    <h1 class="my-8 text-3xl font-bold">
                                        Additional Information
                                    </h1>

                                    <p>
                                        Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                                        sea. Consetetur vero aliquyam invidunt duo dolores et duo
                                        sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                                        consetetur invidunt sed sed et, lorem duo et eos elitr,
                                        sadipscing kasd ipsum rebum diam. Dolore diam stet rebum
                                        sed tempor kasd eirmod. Takimata kasd ipsum accusam
                                        sadipscing, eos dolores sit no ut diam consetetur duo
                                        justo est, sit sanctus diam tempor aliquyam eirmod nonumy
                                        rebum dolor accusam, ipsum kasd eos consetetur at sit
                                        rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                                        sanctus eirmod takimata dolor ea invidunt. Dolore magna
                                        est eirmod sanctus dolor, amet diam et eirmod et ipsum.
                                        Amet dolore tempor consetetur sed lorem dolor sit lorem
                                        tempor. Gubergren amet amet labore sadipscing clita clita
                                        diam clita. Sea amet et sed ipsum lorem elitr et, amet et
                                        labore voluptua sit rebum. Ea erat sed et diam takimata
                                        sed justo. Magna takimata justo et amet magna et.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12">
                <div class="mb-24 text-center">
                    <h3 class="text-2xl font-bold text-green-500 mb-4">YOU CAN BE LOVE IT</h3>
                    <h1 class="text-4xl font-bold">RELATED PRODUCTS</h1>
                </div>
                <swiper class="relative overflow-hidden w-full cursor-grab px-6" :navigation="true" :pagination="{
                    clickable: true,
                }" :autoplay="{
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
        slidesPerView: 4,
        spaceBetween: 50,
    },
}">
                    <swiper-slide class="pb-5" v-for="index in 10" :key="index">
                        <div class="mb-6 border-2 rounded-xl">
                            <div class="overflow-hidden cursor-pointer rounded-t-xl relative group">
                                <div
                                    class="z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                    <div
                                        class="transform-gpu w-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div class="text-center flex justify-center items-center">
                                            <button class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                                    class="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                            <button class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                                    class="fa fa-search" aria-hidden="true"></i></button>
                                            <button class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                                    class="fa fa-heart-o" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <img alt=""
                                    class="object-cover w-full h-72 group-hover:scale-110 transition duration-300 ease-in-out"
                                    src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU" />
                            </div>
                            <div class="text-center my-6">
                                <a href="" class="text-xl uppercase">HOSIERY LINGERIE SET</a>
                                <p class="text-red-500 hover:text-red-600 mt-3">$529.00</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
export default {
    name: "ProductDetail",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            openTab: 1,
            thumbsSwiper: null,
            counter: 1
        };
    },
    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber;
        },
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
        changeCounter: function (num) {
            this.counter += +num
            console.log(this.counter)
            !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;

        }
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
}
</script>

<style></style>