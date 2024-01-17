<template>
    <Layout>
      <div>
        <div class="mx-auto mt-10">
          <article v-for="post in $page.posts.edges" :key="post.id" class="border-b border-gray-200 py-5">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.node.date" class="text-gray-500">{{ post.node.date }}</time>
              <!-- <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a> -->
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <g-link :to="post.node.path">
                  <span class="absolute inset-0" />
                  {{ post.node.title }}
                </g-link>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.node.summary }}</p>
              <div class="mt-2">
                <g-link :to="post.node.path" class="text-md text-gray-600">Read More</g-link>
              </div>
            </div>
          </article>
        </div>
  
        <!-- <pagination-posts
          v-if="$page.posts.pageInfo.totalPages > 1"
          base="/blog"
          :totalPages="$page.posts.pageInfo.totalPages"
          :currentPage="$page.posts.pageInfo.currentPage"
        /> -->
				<Pager :info="$page.posts.pageInfo" class="pager-container"
       linkClass="pager-container__link" range="3" showLinks/>
      </div>
    </Layout>
</template>

<page-query>
	query Posts ($page: Int) {
		posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					title
					path
					date (format: "MMMM D, Y")
					summary
				}
			}
		}
	}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
		components: {
			Pager
		},
    metaInfo: {
        title: 'Blog'
    }
}
</script>

<style scoped>
.pager-container {
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  color: black;
}
.pager-container__link {
    text-align: center;
    padding: 0.8rem 1.2rem;
    text-decoration: none;
    border-radius: 50%;
    margin: 2px;
		border: none;
	}
	.active {
		border-radius: 50%;
		border: 1px solid rgb(220,220,220);
}
</style>