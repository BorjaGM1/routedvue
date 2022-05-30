import { createRouter, createWebHistory } from "vue-router";
import Feed from "../components/Feed.vue";
import  Post from "../components/Post.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "feed",
      component: Feed,
      props: true
    },
    {
      path: "/post/:title",
      name: "post",
      component: Post,
      props: route => ({ query: route.query.q })
    },
  ],
});

export default router;
