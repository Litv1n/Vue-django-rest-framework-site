<template>

    <ul id="example-1">
      <li v-for="post in posts" :key="post.id" class="post">
        <article class="single-post zerogrid">
          <div class="row wrap-post"><!--Start Box-->
            <div class="entry-header">
              <h2 class="entry-title">{{ post.title }}</h2>
            </div>
            <div class="entry-content">
              <p>{{ post.body }}</p>
              <p class="tm-blue-text tm-margin-b-s">Views: 10,890</p>
            </div>
          </div>
        </article>
      </li>
    </ul>
  
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      post: {},
      posts: []
    }
  },
  async created(){
    await this.getPosts()
  },

  methods: {
    async getPosts(){
      let response = await fetch('https://young-garden-17464.herokuapp.com/api/posts/')
      this.posts = await response.json()
    },
  }
}
</script>

<style lang="scss">
.post {
  margin-top: 10px;
}
</style>
