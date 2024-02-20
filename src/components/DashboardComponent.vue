<template>
  <div class="flex flex-col min-h-screen w-screen mx-auto px-4 mt-36 mb-28 items-center">
    <div class="flex-grow">
      <div class="mt-4 text-center items-center justify-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Centralized Document and Logo Repository</h1>
        <p class="mb-2 mt-8 text-sm font-light text-center text-gray-600 lg:text-base ml-4 dark:text-gray-400 max-w-7xl mx-auto justify-center">Welcome to DocHub, the solution for accessing formal documents effortlessly. DocHub serves as a centralized document and logo repository, providing a streamlined platform for document storage, retrieval, and organization. With powerful search filters, intuitive categorization, and user-friendly features, DocHub ensures that finding and downloading the right document is quick and hassle-free. </p>
      </div>
      <!-- Downloadable Section -->
      <div class="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-14">
        <div class="border-b-2 justify-between mb-8 flex items-center">
          <h2 class="text-2xl font-semibold mb-2 text-gray-800">Downloadable Document Files</h2> 
          <form class="ml-auto flex items-center mb-2">    
              <div class="relative flex-grow">
              <!-- Modal toggle -->
              <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="block text-white bg-[#3F2E3E] hover:bg-[#331D2C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-0" type="button">
                + Upload New Document
              </button>

              <!-- Main modal -->
              <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                  <div class="relative p-4 w-full max-w-md max-h-full">
                      <!-- Modal content -->
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <!-- Modal header -->
                          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                  Upload New Document
                              </h3>
                              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                  </svg>
                                  <span class="sr-only">Close modal</span>
                              </button>
                          </div>
                          <!-- Modal body -->
                          <form @submit.prevent="uploadFile" class="p-4 md:p-5">
                              <div class="grid gap-4 mb-4 grid-cols-2">
                                  <div class="col-span-2">
                                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                      <input type="text" v-model="newFile.title" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Document Title" required>
                                  </div>
                                  <div class="col-span-2 sm:col-span-1">
                                      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                                      <input type="text" v-model="newFile.tags" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="DSO" required>
                                  </div>
                                  <div class="col-span-2 sm:col-span-1">
                                      <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                      <select id="category" v-model="newFile.category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                          <option select="None">Select category</option>
                                          <option value="DSO_Templates">DSO Templates</option>
                                          <option value="Department_Files">Department Files</option>
                                          <option value="Other">Other</option>
                                      </select>
                                  </div>
                                  <div class="col-span-2">
                                      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Upload</label>
                                      <input class="block w-full text-base text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4" id="file_input" type="file" @change="handleFileUpload" required>                  
                                  </div>
                              </div>
                              <div class="ml-28">
                                <button type="submit" class="text-white items-center justif bg-[#3F2E3E] hover:bg-[#331D2C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add new document
                                </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div> 

              </div>          
              <div class="relative flex-grow">
                  <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories 
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DSO Templates</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Department Files</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Other</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">None</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="relative flex-grow ml-2">
                <input type="search" id="search-dropdown" class="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search..." />
                  <button type="submit" class="absolute top-0 end-0 p-2 text-sm font-medium h-full text-white bg-[#3F2E3E] rounded-r-lg border border-blue-700 hover:bg-[#331D2C] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span> 
                  </button>
              </div>
          </form>
        </div>
          <!-- Files -->
        <div class="flex flex-col justify-between">
          <div class="flex-auto inline-flex space-x-24">
            <label>Document Name</label>
            <label>Category</label>
            <label>Tags</label>
            <label>File Format</label>
          </div>
            <div v-for="file in files" :key="file.title" class="flex-auto mt-4 border-b-2 space-x-36">
              <a :href="file.url" class="text-sm font-medium text-blue-900 dark:text-white underline hover:text-blue-700" download>
                {{ file.title }}
              </a>
              <label>{{ file.category }}</label>
              <label>{{ file.tags }}</label>
              <a :href="file.url" id="downloadLink" download class="text-white items-center bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:underline font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb">
                Download File
              </a>
              <div class="mb-4"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { initFlowbite } from 'flowbite'

  interface FileData 
  {
    title: string;
    tags: string;
    category: string;
    file: File | null;
    url?: string;
  }
  onMounted(() => {
    initFlowbite();
  })

  const newFile = ref<FileData>({ title: '', tags: '', category: '', file: null });
  const files = ref<FileData[]>([]);

  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;
    if (file) {
      newFile.value.file = file;
    }
  };

  const uploadFile = () => {
    if (newFile.value.file) {
      const url = URL.createObjectURL(newFile.value.file);
      files.value.push({ ...newFile.value, url });
      newFile.value = { title: '', tags: '', category: '', file: null };
    }
  };
  const downloadLink = document.getElementById('downloadLink');
  if (downloadLink) {
    const downloadLink = document.getElementById('downloadLink') as HTMLAnchorElement;
    if (downloadLink) {
      downloadLink.href = 'path/to/your/file';
    }
  }

</script>