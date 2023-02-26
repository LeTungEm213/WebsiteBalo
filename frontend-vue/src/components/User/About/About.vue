<template>
    <div class="">
        <div class="-mt-24 relative w-full py-8 px-12 bg-yellow-900 z-0 mb-12 lg:mb-24">
            <div class="relative z-10 text-center py-24 md:py-48">
                <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                    Your Shopping Cart</h1>
                <p class="text-3xl text-white">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <span class="mx-3">/</span>
                    <a href="" class="underline">About us</a>
                </p>
            </div>
            <img src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
                class="w-full h-full absolute inset-0 object-cover opacity-70">
        </div>
        <div class="md:flex px-4 lg:px-8 xl:px-36 my-24 wrap max-w-max mx-auto">
            <div class="">
                <img src="https://themewagon.github.io/minishop/images/about.jpg" alt="" />
            </div>
            <div class="px-8 text-md leading-8 my-6">
                <h1 class="text-2xl pb-6 font-bold">Stablished Sinced 1975</h1>
                <p class="mb-2">
                    But nothing the copy said could convince her and so it didn’t take
                    long until a few insidious Copy Writers ambushed her, made her drunk
                    with Longe and Parole and dragged her into their agency, where they
                    abused her for their.
                </p>
                <p>
                    But nothing the copy said could convince her and so it didn’t take
                    long until a few insidious Copy Writers ambushed her.
                </p>
                <router-link class="link" to="/Shop">
                    <p
                        class="mt-12 w-fit text-center text-xl border px-8 mx-auto cursor-pointer duration-300 bg-red-500 text-white py-3 hover:bg-red-600 uppercase rounded-full">
                        Shop now
                    </p>
                </router-link>
            </div>
        </div>
        <div class="py-12 bg-slate-100">
            <div class="w-10/12 mx-auto">
                <h1 class="text-6xl text-red-500 font-bold leading-none mb-7 text-center border-b pb-6">
                    Why Shop With Us
                </h1>
                <div class="grid grid-cols-4 gap-12">
                    <div>
                        <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services1.svg" alt="" />
                        <h5 class="text-lg mb-3 mt-4 font-medium">Fast Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                    <div>
                        <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services2.svg" alt="" />
                        <h5 class="text-lg mb-3 mt-4 font-medium">Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                    <div>
                        <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services3.svg" alt="" />
                        <h5 class="text-lg mb-3 mt-4 font-medium">Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                    <div>
                        <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services4.svg" alt="" />
                        <h5 class="text-lg mb-3 mt-4 font-medium">Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs"
}
</script>

<style></style>