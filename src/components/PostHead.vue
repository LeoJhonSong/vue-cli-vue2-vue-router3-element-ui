<template>
  <div class="post-head">
    <h3>{{ postName }}</h3>
    <i class="el-icon-time"></i> {{ postTime }}
    <dialog-button :postName="postName"></dialog-button>
  </div>
</template>

<script>
import DialogButton from "./DialogButton.vue";
export default {
  components: { DialogButton },
  name: "post-head",
  props: ["postName", "postTime"],
};
</script>
