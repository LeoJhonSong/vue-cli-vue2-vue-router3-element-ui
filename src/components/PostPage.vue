<template>
  <div class="post-page">
    <post-head :postName="postName" :postTime="postTime"></post-head>
    <p>Here is some content</p>
  </div>
</template>

<script>
import PostHead from "./PostHead.vue";
export default {
  components: { PostHead },
  name: "post-page",
  props: ["postName", "postTime"],
};
</script>
