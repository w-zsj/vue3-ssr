<template>
  <h1>Home</h1>
  <p>
    <img src="../assets/logo.png" alt="logo" />
  </p>
</template>

<script>
import { testMock } from "@/api/base";
import { useStore } from "vuex";
import { reactive, defineComponent, computed } from "vue";
export default defineComponent({
  setup(props) {
    testMock({}).then((res) => {
      console.log("res", res);
    });

    const store = useStore();
    let user = computed(() => store.state.user);
    console.log("store--", user.value);
  },
});
</script>

<style scoped>
h1,
a {
  color: green;
}
</style>
