<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Check.scss";

type CheckItem = {
  label: string;
  value: string | number;
};

interface Props {
  name: string;
  items: Array<CheckItem>;
}
defineProps<Props>();
</script>

<template>
  <div class="checkbox">
    <label v-for="item in items" :key="item.value" :value="item.value">
      <Field :name="name" type="checkbox" :value="item.value" />
      {{ item.label }}
    </label>
  </div>
  <ErrorMessage :name="name" />
</template>
