<script setup lang="ts">
import { useForm } from "vee-validate";
import { watch } from "vue";
import Input from "./Input.vue";
import Select from "./Select.vue";
import Radio from "./Radio.vue";
import Check from "./Check.vue";
import Textarea from "./Textarea.vue";
import { area, reply, sns } from "../data/data.ts";
import { schema } from "../schema/schema.ts";

const { handleSubmit, errors, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
  console.log("errors", errors.value);
  if (isSubmitting) {
    console.log("is Submitting");
  }
  resetForm();
});

watch(
  () => errors.value,
  () => {
    console.log("errors", errors.value);
  },
);
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2>お名前</h2>
    <Input name="form.name" :schema="schema" />
    <h2>メールアドレス</h2>
    <Input name="formMail.email" :schema="schema" />
    <h2>メールアドレス（確認）</h2>
    <Input name="formMail.emailConfirm" :schema="schema" />
    <h2>お住まいの地域</h2>
    <Select name="form.area" :items="area" />
    <h2>利用SNS</h2>
    <Check name="form.sns" :items="sns" />
    <h2>返信の有無</h2>
    <Radio name="form.reply" :items="reply" />
    <h2>メッセージ</h2>
    <Textarea name="form.message" :schema="schema" />
    <button class="button">送信</button>
  </form>
</template>
