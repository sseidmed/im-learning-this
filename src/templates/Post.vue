<template>
    <Layout>
      <div>
        <!-- <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <g-link :to="post.node.path">
                  <span class="absolute inset-0" />
                  {{ post.node.title }}
                </g-link>
              </h3> -->

        <h1 class="mt-3 text-3xl font-bold tracking-tight font-medium text-pink-700 font-semibold leading-6 text-gray-900">{{ $page.post.title }}</h1>
        <div class="my-5 text-md text-gray-900">{{ $page.post.date }}</div>
        <!-- text-lg leading-18 text-gray-600 -->

        <!-- <div>
          <g-link
            :to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id">
            {{ tag.title }}

          </g-link>
        </div> -->

        <div class="text-lg leading-18 text-gray-600" v-html="$page.post.content" />
        <div class="mt-5">
          <g-link to="/blog">
            <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Back to Blog</button>
          </g-link>
        </div>
      </div>
    </Layout>
  </template>
  
  <page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
  </page-query>
  
  <script>
  export default {
  }
  </script>