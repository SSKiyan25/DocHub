<template>
  <div
    class="flex flex-col min-h-screen min-w-screen mt-36 mb-28 items-center z-0"
  >
    <div class="flex-grow">
      <div class="mt-4 text-center items-center justify-center">
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white sm:text-3xl"
        >
          Centralized Document and Logo Repository
        </h1>
        <p
          class="mb-2 mt-8 text-xs sm:text-sm md:text-base font-light text-center text-gray-600 lg:text-base ml-4 dark:text-gray-400 max-w-7xl mx-auto justify-center"
        >
          Welcome to DocHub, the solution for accessing formal documents
          effortlessly. DocHub serves as a centralized document and logo
          repository, providing a streamlined platform for document storage,
          retrieval, and organization. With powerful search filters, intuitive
          categorization, and user-friendly features, DocHub ensures that
          finding and downloading the right document is quick and hassle-free.
        </p>
      </div>
      <!-- Downloadable Section -->
      <div
        class="container mx-auto shadow-lg rounded-lg p-6 md:p-8 lg:p-10 xl:p-12 mt-14"
      >
        <div class="border-b-2 justify-between mb-8 flex items-center">
          <h2
            class="text-base md:text-base lg:text-1xl xl:text-2xl font-semibold mb-2"
          >
            Downloadable Document Files
          </h2>
          <div>
            <form
              @submit.prevent="uploadFileAndCloseModal"
              class="ml-auto flex items-center mb-2"
            >
              <div class="relative flex-grow">
                <!-- Modal toggle -->
                <button
                  data-modal-target="crud-modal"
                  data-modal-toggle="crud-modal"
                  class="block text-white bg-[#3F2E3E] hover:bg-[#331D2C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-1 sm:text-sm sm:px-2 sm:py-0.5 md:text-base md:px-4 md:py-2.5 mr-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-0"
                  type="button"
                  @click="isModalOpen = true"
                >
                  + Upload New Document
                </button>

                <!-- Main modal -->
                <div
                  id="crud-modal"
                  v-show="isModalOpen"
                  tabindex="-1"
                  aria-hidden="true"
                  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-full"
                >
                  <div class="absolute inset-0 bg-black opacity-50"></div>
                  <div
                    class="relative p-4 md:p-6 lg:p-8 w-full max-w-md max-h-full"
                  >
                    <!-- Modal content -->
                    <div
                      class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <!-- Modal header -->
                      <div
                        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                      >
                        <h3
                          class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                          Upload New Document
                        </h3>
                        <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="crud-modal"
                        >
                          <svg
                            class="w-3 h-3 md:w-4 md:h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                      <!-- Modal body -->
                      <form @submit.prevent="uploadFile" class="p-4 md:p-5">
                        <div class="grid gap-4 mb-4 grid-cols-2">
                          <div class="col-span-2">
                            <label
                              for="name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Title</label
                            >
                            <input
                              type="text"
                              v-model="newFile.title"
                              name="name"
                              id="name"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Document Title"
                              required
                            />
                          </div>
                          <div class="col-span-2 sm:col-span-1">
                            <label
                              for="price"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Tags</label
                            >
                            <input
                              type="text"
                              v-model="newFile.tags"
                              name="price"
                              id="price"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="DSO"
                              required
                            />
                          </div>
                          <div class="col-span-2 sm:col-span-1">
                            <label
                              for="category"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Category</label
                            >
                            <select
                              id="category"
                              v-model="newFile.category"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              required
                            >
                              <option value="" disabled>Select category</option>
                              <option value="DSO_Templates">
                                DSO Templates
                              </option>
                              <option value="Department_Files">
                                Department Files
                              </option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div class="col-span-2">
                            <label
                              for="description"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >File Upload</label
                            >
                            <input
                              class="block w-full text-base text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4"
                              id="file_input"
                              type="file"
                              @change="handleFileUpload"
                              required
                            />
                          </div>
                        </div>
                        <div class="ml-28">
                          <button
                            type="submit"
                            class="text-white items-center justif bg-[#3F2E3E] hover:bg-[#331D2C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            @click="isModalOpen = false"
                          >
                            Add new document
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative flex-grow">
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        @click="filterFiles('DSO_Templates')"
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        DSO Templates
                      </button>
                    </li>
                    <li>
                      <button
                        @click="filterFiles('Department_Files')"
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Department Files
                      </button>
                    </li>
                    <li>
                      <button
                        @click="filterFiles('Other')"
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Other
                      </button>
                    </li>
                    <li>
                      <button
                        @click="filterFiles('')"
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        All
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="relative flex-grow ml-2">
                <input
                  v-model="searchTerm"
                  type="search"
                  id="search-dropdown"
                  class="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  class="absolute top-0 end-0 p-2 text-sm font-medium h-full text-white bg-[#3F2E3E] rounded-r-lg border border-blue-700 hover:bg-[#331D2C] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Files -->
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="border-r border-b px-4 py-2">Document Title</th>
              <th class="border-r border-b px-4 py-2">Category</th>
              <th class="border-r border-b px-4 py-2">Tags</th>
              <th class="border-r border-b px-4 py-2">Date Published</th>
              <th class="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in filteredAndSearchedFiles" :key="file.id">
              <td class="border-r border-b px-4 py-2">
                <a
                  :href="file.url"
                  class="text-sm font-medium text-blue-900 dark:text-white underline hover:text-blue-700"
                  download
                >
                  {{ file.title }}
                </a>
              </td>
              <td class="border-r border-b px-4 py-2 text-center">
                {{ file.category }}
              </td>
              <td class="border-r border-b px-4 py-2 text-center">
                {{ file.tags }}
              </td>
              <td class="border-r border-b px-4 py-2 text-center">
                {{ file.datePublished }}
              </td>
              <td class="border-b px-4 py-2 text-center">
                <div class="flex items-center justify-center">
                  <a
                    :href="file.url"
                    target="_blank"
                    download
                    class="text-white items-center bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:underline font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb mr-2"
                  >
                    Download File
                  </a>
                  <button
                    class="text-green-500 text-xs"
                    @click="openEditModal(file)"
                  >
                    <span class="material-symbols-outlined mt-2 mr-2">
                      edit
                    </span>
                  </button>
                  <div
                    id="crud-modal"
                    v-show="isEditModalOpen.valueOf"
                    tabindex="-1"
                    aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div
                      class="relative p-4 md:p-6 lg:p-8 w-full max-w-md max-h-full"
                    >
                      <!-- Modal content -->
                      <div
                        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                      >
                        <!-- Modal header -->
                        <div
                          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                        >
                          <h3
                            class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white"
                          >
                            Edit Document
                          </h3>
                          <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal"
                          >
                            <svg
                              class="w-3 h-3 md:w-4 md:h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span class="sr-only">Close modal</span>
                          </button>
                        </div>
                        <!-- Modal body -->
                        <form
                          @submit.prevent="editFileAndCloseModal"
                          class="p-4 md:p-5"
                        >
                          <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2">
                              <label
                                for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Title</label
                              >
                              <input
                                type="text"
                                v-model="fileToEditTitle"
                                name="name"
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Document Title"
                                required
                              />
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                              <label
                                for="price"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Tags</label
                              >
                              <input
                                type="text"
                                v-model="fileToEditTags"
                                name="price"
                                id="price"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="DSO"
                                required
                              />
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                              <label
                                for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Category</label
                              >
                              <select
                                id="category"
                                v-model="fileToEditCategory"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required
                              >
                                <option value="" disabled>
                                  Select category
                                </option>
                                <option value="DSO_Templates">
                                  DSO Templates
                                </option>
                                <option value="Department_Files">
                                  Department Files
                                </option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            <div class="col-span-2">
                              <label
                                for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >File Upload</label
                              >
                              <input
                                class="block w-full text-base text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4"
                                id="file_input"
                                type="file"
                                @change="handleFileUpload"
                                required
                              />
                            </div>
                          </div>
                          <div class="ml-28">
                            <button
                              type="submit"
                              class="text-white items-center justif bg-[#3F2E3E] hover:bg-[#331D2C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              @click="editFileAndCloseModal"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <button class="text-red-500" @click="confirmDelete(file)">
                    <span class="material-symbols-outlined mt-2"> delete </span>
                  </button>
                  <div
                    v-if="
                      isDeleteModalOpen && fileToDelete && fileToDelete === file
                    "
                    class="modal fixed inset-0 top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                  >
                    <div class="modal-content bg-white p-5 rounded shadow-lg">
                      <h2 class="font-bold">Confirm Delete</h2>
                      <p>Are you sure you want to delete this file?</p>
                      <div class="flex justify-end space-x-2">
                        <button
                          @click="deleteFileAndCloseModal"
                          class="text-white bg-red-600 px-4 py-2 rounded shadow"
                        >
                          Yes
                        </button>
                        <button
                          @click="isDeleteModalOpen = false"
                          class="text-white bg-gray-600 px-4 py-2 rounded shadow"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { initFlowbite } from "flowbite";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  updateMetadata,
  deleteObject,
  listAll,
} from "firebase/storage";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "vue-router";
const router = useRouter();

const firebaseConfig = {
  apiKey: "AIzaSyCQr1LXsr8ZExzJoMjWy7XJJfjvMcG62T8",
  authDomain: "dochub-ca00f.firebaseapp.com",
  projectId: "dochub-ca00f",
  storageBucket: "dochub-ca00f.appspot.com",
  messagingSenderId: "927840663843",
  appId: "1:927840663843:web:89777ea8ab021263cb7496",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore();

interface FileData {
  id?: string;
  title: string;
  tags: string;
  category: string;
  file: File | null;
  url?: string;
  format?: string;
  datePublished?: string;
}

onMounted(() => {
  initFlowbite();
});

const newFile = ref<FileData>({
  title: "",
  tags: "",
  category: "",
  file: null,
});

const files = ref<FileData[]>([]);
const isModalOpen = ref(false);

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;
  if (file) {
    newFile.value.file = file;
  }
};

async function uploadFile() {
  if (newFile.value.file) {
    const filePath = `Documents/${newFile.value.file.name}`;
    const fileRef = storageRef(storage, filePath);
    const directoryRef = storageRef(storage, "Documents");

    // List all files in the directory
    const res = await listAll(directoryRef);

    // Check if a file with the same name already exists
    const fileExists = res.items.some(
      (item) => item.name === newFile.value.file?.name
    );

    if (fileExists) {
      alert("A file with the same name already exists!");
      return;
    }
    try {
      await uploadBytes(fileRef, newFile.value.file);
      console.log("Uploaded a blob or file!");

      // Add metadata to the file
      const metadata = {
        customMetadata: {
          title: newFile.value.title,
          tags: newFile.value.tags,
          category: newFile.value.category,
          datePublished: new Date().toLocaleDateString(),
        },
      };
      await updateMetadata(fileRef, metadata);

      // Get the download URL and store it in Firestore
      const url = await getDownloadURL(fileRef);
      newFile.value.url = url;

      const format = newFile.value.file
        ? newFile.value.file.name.split(".").pop()
        : "";
      // Create a new object that doesn't include the file property
      const { file, ...newFileWithoutFile } = newFile.value;
      const newFileWithFormat = {
        ...newFileWithoutFile,
        format,
        datePublished: metadata.customMetadata.datePublished,
      };

      await addDoc(collection(db, "documents"), newFileWithFormat);
      alert("File Uploaded Sucessfully");
      router.go(0);
    } catch (error) {
      console.error("Error uploading file:", error);
      if (error instanceof Error) {
        alert("Upload failed: " + error.message);
      } else {
        alert("Upload failed");
      }
    }
  }
}

// Fetch documents from Firestore
const documentsCollection = collection(db, "documents");
onSnapshot(documentsCollection, (snapshot) => {
  files.value = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FileData[];
});

async function uploadFileAndCloseModal() {
  await uploadFile();
  isModalOpen.value = false;
}

async function deleteFile(file: FileData) {
  if (file.id && file.url) {
    // Decode the URL
    const decodedUrl = decodeURIComponent(file.url);

    // Construct the file path from the URL
    const urlParts = decodedUrl.split("/");
    const filePath = `Documents/${urlParts[urlParts.length - 1].split("?")[0]}`;
    const fileRef = storageRef(storage, filePath);

    try {
      // Delete the file from Firebase Storage
      await deleteObject(fileRef);

      // Delete the document from Firestore
      const documentRef = doc(db, "documents", file.id);
      await deleteDoc(documentRef);

      alert("File deleted successfully!");
    } catch (_error) {
      alert("Delete failed!");
    }
  }
}

//Edit File Functions
const fileToEdit = ref<FileData | null>({
  title: "",
  tags: "",
  category: "",
  file: null,
});

const isEditModalOpen = ref(false);

const fileToEditTitle = computed({
  get: () => fileToEdit.value?.title || "",
  set: (newValue) => {
    if (fileToEdit.value) {
      fileToEdit.value.title = newValue;
    }
  },
});

const fileToEditTags = computed({
  get: () => fileToEdit.value?.tags || "",
  set: (newValue) => {
    if (fileToEdit.value) {
      fileToEdit.value.tags = newValue;
    }
  },
});

const fileToEditCategory = computed({
  get: () => fileToEdit.value?.category || "",
  set: (newValue) => {
    if (fileToEdit.value) {
      fileToEdit.value.category = newValue;
    }
  },
});

const openEditModal = (file: FileData) => {
  fileToEdit.value = { ...file };
  isEditModalOpen.value = true;
};

async function editFile() {
  if (fileToEdit.value && fileToEdit.value.id) {
    const documentRef = doc(db, "documents", fileToEdit.value.id);

    // Update the document in Firestore
    await updateDoc(documentRef, {
      title: fileToEdit.value.title,
      tags: fileToEdit.value.tags,
      category: fileToEdit.value.category,
    });

    // Create a new object to trigger Vue's reactivity system
    fileToEdit.value = { ...fileToEdit.value };

    alert("File updated successfully!");
  }
}

async function editFileAndCloseModal() {
  await editFile();
  isEditModalOpen.value = false;
  fileToEdit.value = { title: "", tags: "", category: "", file: null };
}

const isDeleteModalOpen = ref(false);
const fileToDelete = ref<FileData | null>(null);

const confirmDelete = (file: FileData) => {
  fileToDelete.value = file;
  isDeleteModalOpen.value = true;
};

async function deleteFileAndCloseModal() {
  if (fileToDelete.value) {
    await deleteFile(fileToDelete.value);
    isDeleteModalOpen.value = false;
  }
}

const selectedCategory = ref("");

const filterFiles = (category: string) => {
  selectedCategory.value = category;
};

const searchTerm = ref("");

const filteredAndSearchedFiles = computed(() => {
  let result = files.value;

  if (selectedCategory.value) {
    result = result.filter((file) => file.category === selectedCategory.value);
  }

  if (searchTerm.value) {
    const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
    result = result.filter(
      (file) =>
        file.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        file.tags.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  return result;
});

defineExpose({
  newFile,
  isModalOpen,
  isDeleteModalOpen,
  fileToDelete,
  handleFileUpload,
  uploadFile,
  uploadFileAndCloseModal,
  deleteFile,
  confirmDelete,
  deleteFileAndCloseModal,
  filterFiles,
  selectedCategory,
  searchTerm,
  filteredAndSearchedFiles,
  fileToEdit,
  isEditModalOpen,
  openEditModal,
  editFile,
  editFileAndCloseModal,
  fileToEditTitle,
  fileToEditTags,
  fileToEditCategory,
});
</script>
