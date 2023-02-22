<template>
    <div class="flex items-center justify-center">
        <div class="lg:w-1/2 mx-auto">
            <ul class="inline-flex pt-2 px-1 w-full border-b justify-center mb-5">
                <li>
                    <a class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal"
                        v-on:click="toggleTabs(1)" v-bind:class="{
                            'border-none': openTab !== 1,
                            'border-l border-r border-t': openTab === 1,
                        }">
                        Login
                    </a>
                </li>
                <li>
                    <a class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal"
                        v-on:click="toggleTabs(2)" v-bind:class="{
                            'border-none': openTab !== 2,
                            'border-l border-r border-t': openTab === 2,
                        }">
                        Register
                    </a>
                </li>
            </ul>
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                <div class="px-4 py-5 flex-auto">
                    <div class="tab-content tab-space">
                        <!-- Login -->
                        <div v-bind:class="{
                            hidden: openTab !== 1,
                            block: openTab === 1,
                        }">
                            <div class="mx-auto relative">
                                <div class="realtive border p-4">
                                    <div class="flex justify-center mb-5">
                                        <div class="absolute bg-white px-4 -top-5">
                                            <h1 class="text-2xl border-b-2 border-cyan-500 text-center">Sign in</h1>
                                        </div>
                                    </div>
                                    <div class="">
                                        <input type="text" class="border px-4 py-2 my-2 w-full" placeholder="Email*">
                                        <div class="flex items-center w-full">
                                            <div class="w-full">
                                                <input v-if="showPassword" type="text" class="border px-4 py-2 my-2 w-full"
                                                    v-model="password" placeholder="Password*" />
                                                <input v-else type="password" class="border px-4 py-2 my-2 w-full"
                                                    v-model="password" placeholder="Password*" />
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
                                    </div>
                                    <div class="my-4 flex justify-between items-center">
                                        <div class="flex">
                                            <input type="checkbox" class="mr-2" name="" id="">
                                            <label for="">Remember me</label>
                                        </div>
                                        <a class='group text-pink-500 transition-all duration-300 ease-in-out' href='#'>
                                            <span
                                                class='pb-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                                Lost your password?
                                            </span>
                                        </a>
                                    </div>
                                    <button class="w-full py-3 border my-2 uppercase">sign in </button>
                                </div>
                            </div>
                        </div>
                        <!-- Register -->
                        <div v-bind:class="{
                            hidden: openTab !== 2,
                            block: openTab === 2,
                        }">
                            <div class="mx-auto relative">
                                <div class="realtive border p-4">
                                    <div class="flex justify-center mb-5">
                                        <div class="absolute bg-white px-4 -top-5">
                                            <h1 class="text-2xl border-b-2 border-cyan-500 text-center">Register</h1>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="flex">
                                            <input type="text" class="border px-4 py-2 my-2 w-full mr-2"
                                                placeholder="First name*">
                                            <input type="text" class="border px-4 py-2 my-2 w-full ml-2"
                                                placeholder="Last name*">
                                        </div>
                                        <input type="text" class="border px-4 py-2 my-2 w-full" placeholder="Email*">
                                        <div class="flex items-center w-full">
                                            <div class="w-full">
                                                <input v-if="showPassword" type="text" class="border px-4 py-2 my-2 w-full"
                                                    v-model="password" placeholder="Password*" />
                                                <input v-else type="password" class="border px-4 py-2 my-2 w-full"
                                                    v-model="password" placeholder="Password*" />
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
                                                <input v-if="showRePassword" type="text" class="border px-4 py-2 my-2 w-full"
                                                    v-model="Repeat_password" placeholder="Repeat your password*" />
                                                <input v-else type="password" class="border px-4 py-2 my-2 w-full"
                                                    v-model="Repeat_password" placeholder="Repeat your password*" />
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
                                    <button class="w-full py-3 border my-2 uppercase">create an account</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
            openTab: 1,
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
        toggleShowRepwd(){
            this.showRePassword = !this.showRePassword;
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber;
        },
    }
}
</script>

<style></style>