<template>
  <div class="overflow-hidden">

    <!-- //User
    <Header />
    <router-view />
    <Footer /> -->
    <!-- Admin -->
    <div class="flex">
      <!-- Sidebar -->
      <Sidebar v-if="openSidebar" />
      <div class="w-full">
        <!-- Header -->
        <header>
          <div class="flex justify-between items-center py-4 px-3 lg:px-8 border-b shadown-lg">
            <button class="border rounded-lg p-1" @click="openSidebar = !openSidebar">
              <span aria-hidden="true">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
              </span>
            </button>
            <div class="flex items-center">
              <form action="/search" class="flex justify-between md:flex-row">
                <input type="search" name="query" placeholder="Search Components" required="required"
                  class="border w-full py-2 px-2">
                <button type="submit" class="px-4 py-2 border">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <button class="inline-block relative mx-3">
                <i class="fa fa-bell" aria-hidden="true"></i>
                <span
                  class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
              </button>
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
            </div>
          </div>
        </header>
        <!-- Main content -->
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
// import Header from '@/components/User/Layout/Header.vue'
// import Footer from '@/components/User/Layout/Footer.vue'

// import Header from '@/components/Admin/Layout/Header.vue'
// import Footer from '@/components/Admin/Layout/Footer.vue'
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
export default {
  name: 'HomeView',
  components: {
    // Header,
    // Footer
    Sidebar
  },
  data() {
    return {
      account: false,
      openSidebar: true,
    }
  },
  methods: {
    toggleAccount() {
      this.account = !this.account;
    },
  },
}
</script>
<style></style>
