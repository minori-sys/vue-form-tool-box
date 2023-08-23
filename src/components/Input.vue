<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Input.scss";
import { Schema } from "../schema/schema.ts";

interface Props {
  name: string;
  schema: Schema;
}
defineProps<Props>();
</script>

<template>
  <Field :name="name" type="input" :rules="schema" class="input" />
  <ErrorMessage :name="name" />
</template>
