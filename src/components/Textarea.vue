<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Textarea.scss";
import { Schema } from "../schema/schema.ts";

interface Props {
  name: string;
  schema: Schema;
}
defineProps<Props>();
</script>

<template>
  <Field :name="name" as="textarea" :rules="schema" class="textarea" />
  <ErrorMessage :name="name" />
</template>
