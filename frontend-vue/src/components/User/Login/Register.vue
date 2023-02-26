<template>
    <div class="">
        <div class="relative w-full py-8 px-12 bg-yellow-900 z-0">
            <div class="relative z-10 text-center py-0">
                <h1 class="text-white text-center text-4xl mb-4">
                    categories</h1>
                <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                    Account</h1>
                <p class="text-3xl text-white">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <span class="mx-3">/</span>
                    <a href="" class="underline">Register</a>
                </p>
            </div>
            <img src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
                class="w-full h-full absolute inset-0 object-cover opacity-70">
        </div>
        <div class="flex items-center justify-center my-12">
            <div class="lg:w-1/2">
                <h1 class="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">Register
                </h1>
                <div class="realtive border p-4 bg-gray-50 py-5">
                    <div class="">
                        <div class="flex">
                            <input type="text" class="border px-4 py-2 my-2 w-full mr-2 bg-white" placeholder="First name*">
                            <input type="text" class="border px-4 py-2 my-2 w-full ml-2 bg-white" placeholder="Last name*">
                        </div>
                        <input type="text" class="border px-4 py-2 my-2 w-full" placeholder="Email*">
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input v-if="showPassword" type="text" class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="password" placeholder="Password*" />
                                <input v-else type="password" class="border px-4 py-2 my-2 w-full bg-white" v-model="password"
                                    placeholder="Password*" />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="button" @click="toggleShow">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showPassword,
                                            'fa fa-eye-slash': !showPassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input v-if="showRePassword" type="text" class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="Repeat_password" placeholder="Repeat your password*" />
                                <input v-else type="password" class="border px-4 py-2 my-2 w-full bg-white" v-model="Repeat_password"
                                    placeholder="Repeat your password*" />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="button" @click="toggleShowRepwd">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showRePassword,
                                            'fa fa-eye-slash': !showRePassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button class="w-full py-3  bg-black hover:bg-gray-800 duration-500 text-white  border my-2 uppercase">create an account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
        return {
            showPassword: false,
            password: null,
            Repeat_password: null,
            showRePassword: false,

        };
    },
    computed: {
        buttonLabel() {
            return this.showPassword ? "Hide" : "Show";
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        toggleShowRepwd() {
            this.showRePassword = !this.showRePassword;
        },
    }
}
</script>

<style></style>