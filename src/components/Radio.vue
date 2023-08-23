<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Radio.scss";

type RadioItem = {
  label: string;
  value: string | number;
};

interface Props {
  name: string;
  items: Array<RadioItem>;
}
defineProps<Props>();
</script>

<template>
  <fieldset class="radio">
    <label v-for="item in items" :key="item.value" :value="item.value">
      <Field :name="name" type="radio" :value="item.value" /> {{ item.label }}
    </label>
  </fieldset>
  <ErrorMessage :name="name" />
</template>
