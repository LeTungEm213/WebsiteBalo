<template>
  <header>
    <div class="flex justify-between items-center py-4 px-8 border-b shadown-lg">
      <div class="flex justify-between">
        <router-link to="/"><img src="https://themewagon.github.io/shionhouse/assets/img/logo/logo.png"
            alt="" /></router-link>
      </div>
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
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      account: false,
    }
  },
  methods: {
    toggleAccount() {
      this.account = !this.account;
    },
  },
};
</script>

<style></style>
