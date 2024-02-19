<template>
  <div class="flex flex-col min-h-screen mx-auto px-4 mt-28 mb-28">
    <div class="flex-grow container mx-auto">
      <h1 class="mb-4 text-4xl text-start font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Centralized Document and Logo Repository</h1>
      <p class="mb-6 text-sm font-light text-justify text-gray-600 lg:text-base ml-4 dark:text-gray-400">Welcome to DocHub, the solution for accessing formal documents effortlessly. DocHub serves as a centralized document and logo repository, providing a streamlined platform for document storage, retrieval, and organization. With powerful search filters, intuitive categorization, and user-friendly features, DocHub ensures that finding and downloading the right document is quick and hassle-free. </p>

      <div class="flex flex-wrap -mx-2 mb-4 items-stretch">
        <!-- Upload Document Section -->
        <div class="w-full md:w-1/2 px-2 flex flex-col">
          <div class="bg-[#A78295] shadow-lg rounded-lg p-6 flex-grow text-white">
            <h2 class="text-3xl font-semibold mb-4">Upload Document</h2>
            <label class="block mb-4 text-base font-medium" for="category">Name</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-[#3F2E3E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4">
            <label class="block mb-4 mt-4 text-base font-medium" for="category">Category</label>
            <select id="DocsCategory" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
              <option>None</option>
              <option>DSO Templates</option>
              <option>Department Files</option>
              <option>Other</option>
            </select>
            <label class="block mb-4 text-base font-medium" for="file_input">Upload file</label>
            <input class="block w-full text-base text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4" id="file_input" type="file">
            <button class="bg-[#3F2E3E] hover:bg-[#331D2C] text-white font-bold py-2 px-4 rounded mt-2">
              Upload Document
            </button>
          </div>
        </div>

        <!-- Upload Logo Section -->
        <div class="w-full md:w-1/2 px-2 flex flex-col">
          <div class="bg-[#A78295] shadow-lg rounded-lg p-6 flex-grow text-white">
            <h2 class="text-3xl font-semibold mb-4">Upload Logo</h2>
            <label class="block mb-4 text-base font-medium" for="category">Name</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-[#3F2E3E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4">
            <label class="block mb-4 mt-4 text-base font-medium" for="category">Category</label>
            <select id="LogosCategory" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
              <option>None</option>
              <option>College</option>
              <option>Department</option>
              <option>USSC</option>
              <option>College-SSC</option>
              <option>Course-Organization</option>
              <option>Faith-Based</option>
              <option>Fraternity</option>
              <option>Other</option>
            </select>
            <label class="block mb-4 text-base font-medium" for="file_input">Upload file</label>
            <input class="block w-full text-base text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4" id="file_input" type="file">
            <button class="bg-[#3F2E3E] hover:bg-[#331D2C] text-white font-bold py-2 px-4 rounded mt-2">
              Upload Logo
            </button>
          </div>
        </div>
      </div>
      <!-- Download Section -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-800">Download Files</h2>
        <ul>
          <!-- Replace with your actual data -->
          <li class="mb-2">
            <a href="#" class="text-blue-600 hover:underline">File 1</a>
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded ml-2">
              Download
            </button>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline">File 2</a>
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded ml-2">
              Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>