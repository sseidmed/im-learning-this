<template>
<Layout>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hello!</h2>
        <p class="mt-2 text-xl leading-8 text-gray-600">Documenting struggles, failures and successes.</p>
        <g-image alt="Example image" src="../assets/images/hagar.png" width="135" />
      </div>
      <!-- <div class="mt-5 text-lg leading-18 text-gray-600">I started this blog to document and track all the cool 
        technology and other everyday things I'll be learning. 
        The weight of mediocrity led to a profound sense of 
        depression, causing me to lose sight of life's perspective. 
        In my quest to rediscover meaning, I've embarked on a 
        journey of continuous learning—both within the realms 
        of my work and beyond. I've heard whispers that time 
        speeds up as we age, a phenomenon attributed to a lack 
        of new experiences. Determined to defy this norm, 
        I intend to inject novelty into my life. I reached a 
        pivotal moment in my career and life where the monotony 
        of mediocrity became insufferable. This blog becomes 
        my ally, a tool to hold myself accountable—I'll chronicle 
        my endeavors until I secure a job and, undoubtedly, 
        continue the adventure beyond.
      </div> -->


      <h1 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">A little bit about me</h1>
      <p class="mt-1 text-lg leading-18 text-gray-600">
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
    </div>
  </div>
</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'I\'m Learning This'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
