<template>
  <Layout>
    <g-image alt="Example image" src="../assets/images/hagar.png" width="135" />

    <h1 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">A little bit about me</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <h1 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">What I am currently obsessed with</h1>
    <h1 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Projects</h1>

    <p>
      <a class="mr-1" href="https://gridsome.org/docs/" target="_blank" rel="noopener">
        <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">My LinkedIn</span>
      </a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">
        <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">My Github</span>
      </a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
}
</script>
