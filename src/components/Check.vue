<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Check.scss";

interface Props {
  name: string;
  label: string;
}
defineProps<Props>();
</script>

<template>
  <div class="checkbox">
    <Field v-slot="{ field }" :name="name" type="checkbox" :value="true">
      <label>
        <input
          class="checkbox"
          type="checkbox"
          :name="name"
          v-bind="field"
          :value="true"
        />
        {{ label }}
      </label>
    </Field>
  </div>
  <ErrorMessage :name="name" />
</template>
