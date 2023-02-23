<template>
  <aside class="w-72 border-r whitespace-nowrap">
    <div class="flex flex-col h-full">
      <nav aria-label="Main" class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
        <router-link to="/">
          <img src="https://themewagon.github.io/shionhouse/assets/img/logo/logo.png" alt="" />
        </router-link>
        <a href="#"
          class="flex p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary bg-primary-100 dark:bg-primary">
          <span aria-hidden="true">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              </path>
            </svg>
          </span>
          <span class="ml-2 text-sm"> Dashboards </span>
        </a>
        <a href="#"
          class="flex p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary bg-primary-100 dark:bg-primary">
          <svg class="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
            </path>
          </svg>
          <span class="ml-2 text-sm"> About </span>
        </a>
        <a href="#"
          class="flex p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary bg-primary-100 dark:bg-primary">
          <svg class="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
            </path>
            <path
              d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
            </path>
          </svg>
          <span class="ml-2 text-sm"> Contact </span>
        </a>
        <div class="p-2">
          <button @click="isOpenProduct = !isOpenProduct"
            class="flex justify-between w-full items-center text-gray-500 transition-colors rounded-md dark:text-light">
            <span class="flex items-center pr-2">
              <span aria-hidden="true">
                <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                  </path>
                </svg>
              </span>
              Product Managerment
            </span>
            <i :class="isOpenProduct ? 'fa fa-chevron-up' : 'fa fa-chevron-down'" class="text-sm" aria-hidden="true"></i>
          </button>
          <div class="w-full" v-show="isOpenProduct">
            <ul>
              <li>
                <div class="relative text-lg w-full">
                  <div>
                    <ul class="px-4 mt-2">
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        <router-link to="adminBlog">
                          Page Managerment
                        </router-link>
                      </li>
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        Create Page
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-2">
          <button @click="isopenPage = !isopenPage"
            class="flex justify-between w-full items-center text-gray-500 transition-colors rounded-md dark:text-light">
            <span class="flex">
              <span aria-hidden="true">
                <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                  </path>
                </svg>
              </span>
              Page Managerment
            </span>
            <i :class="isopenPage ? 'fa fa-chevron-up' : 'fa fa-chevron-down'" class="text-sm" aria-hidden="true"></i>
          </button>
          <div class="w-full" v-show="isopenPage">
            <ul>
              <li>
                <div class="relative text-lg w-full">
                  <div>
                    <ul class="px-4">
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        Check 1
                      </li>
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        Check 1
                      </li>
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        Check 1
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-2">
          <button @click="isAuthentication = !isAuthentication"
            class="flex justify-between w-full items-center text-gray-500 transition-colors rounded-md dark:text-light">
            <span class="flex">
              <span aria-hidden="true">
                <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </span>
              Authentication
            </span>
            <i :class="isAuthentication ? 'fa fa-chevron-up' : 'fa fa-chevron-down'" class="text-sm"
              aria-hidden="true"></i>
          </button>
          <div class="w-full" v-show="isAuthentication">
            <ul>
              <li>
                <div class="relative text-lg w-full">
                  <div>
                    <ul class="px-4">
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        Register
                      </li>
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        Reset Password
                      </li>
                      <li
                        class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        Setting
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarPage",
  data() {
    return {
      isopenPage: true,
      isOpenProduct: true,
      isAuthentication: true,
    }
  }

};
</script>

<style></style>
