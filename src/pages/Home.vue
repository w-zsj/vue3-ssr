<template>
  <h1>Home</h1>
  <p>
    <img src="../assets/logo.png" alt="logo" />
  </p>
</template>

<script>
import { testMock } from "@/api/base";
import { reactive, defineComponent } from "vue";
export default defineComponent({
  setup(props) {
    testMock({}).then((res) => {
      console.log("res", res);
    });
  },
});
</script>

<style scoped>
h1,
a {
  color: green;
}
</style>
