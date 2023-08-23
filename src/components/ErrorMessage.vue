<script setup lang="ts">
import { ErrorMessage } from "vee-validate";
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<template>
  <ErrorMessage :name="name" :className="name" as="p" />
</template>

<style scoped>
.error-massage {
  color: red;
}
</style>
