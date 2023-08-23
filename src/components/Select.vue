<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Select.scss";

type SelectItem = {
  label: string;
  value: string | number;
};

interface Props {
  name: string;
  items: Array<SelectItem>;
}
defineProps<Props>();
</script>

<template>
  <div class="select">
    <Field :name="name" as="select">
      <option v-for="item in items" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </Field>
  </div>
  <ErrorMessage :name="name" />
</template>
