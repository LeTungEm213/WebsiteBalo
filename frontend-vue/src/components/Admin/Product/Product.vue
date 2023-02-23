<template>
    <div class="mx-5 mb-12">
        <div class="flex my-5">
            <span aria-hidden="true">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                </svg>
            </span>
            <span class="mx-2">/</span>
            Create
        </div>
        <div class="lg:flex">
            <div class="lg:w-2/3 lg:mr-4 bg-white p-4 shadow-lg rounded-md border-2 my-4">
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Product Title</h4>
                    <input required type="text" class="w-full rounded-md px-3 py-2 border-2"
                        placeholder="Add a products...">
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Product Short Description</h4>
                    <textarea type="text" name="shortDesc" id="shortDesc" class="rounded-md p-3 border-2 w-full"
                        placeholder="Short Description..."></textarea>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Product Description</h4>
                    <editor v-model="init" class="w-full" api-key="yjaj2vzf11w5iyzfwroudo6smnvj72djze7vsfl7y23n9q1e" :init="{
                        menubar: false,
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                        toolbar: 'blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent',
                    }" />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Display images 1</h4>
                    <input type="file" class="mb-5">
                    <img :src="img" alt="">
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Display images 2</h4>
                    <input type="file" class="mb-5">
                    <img :src="img" alt="">
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Display images 3</h4>
                    <input type="file" class="mb-5">
                    <img :src="img" alt="">
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Display images 4</h4>
                    <input type="file" class="mb-5">
                    <img :src="img" alt="">
                </div>
            </div>
            <div class="lg:w-1/3 lg:ml-4 bg-white p-4 shadow-lg rounded-md border-2 h-fit my-4">
                <div class="relative z-0 w-full mb-6 group">
                    <h4 class="font-bold mb-2 text-md">Date</h4>
                    <input required type="date" class="w-full rounded-md px-3 py-2 border-2">

                </div>
                <div class="relative z-0 w-full mb-3">
                    <h4 class="font-bold mb-2 text-md">Price</h4>
                    <input required type="text" class="w-full rounded-md px-3 py-2 border-2"
                        placeholder="50.000, 60.000,...">
                </div>
                <div class="relative z-0 w-full mb-3">
                    <h4 class="font-bold mb-2 text-md">Amount</h4>
                    <input required type="text" class="w-full rounded-md px-3 py-2 border-2" placeholder="1000, 200,...">
                </div>
                <div class="mb-3">
                    <div class="flex justify-between">
                        <h4 class="font-bold mb-2 text-md">Category</h4>
                    </div>
                    <select v-model="catId" class="w-full rounded-md px-3 py-2 border-2">
                        <option> Option 1 </option>
                        <option> Option 2 </option>
                        <option> Option 3 </option>
                        <option> Option 4 </option>
                        <option> Option 5 </option>
                    </select>
                </div>
                <div class="relative z-0 w-full mb-3">
                    <h4 class="font-bold mb-2 text-md">Rate</h4>
                    <input required type="text" class="w-full rounded-md px-3 py-2 border-2" placeholder="5">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
    name: "ProductCRUD",
    data() {
        return {
            init: "Dung"
        }
    },
    components: {
        'editor': Editor
    }
}
</script>

<style></style>