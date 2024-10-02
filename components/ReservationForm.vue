<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = toTypedSchema(
  yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    reservationDate: yup.date().required(),
  })
);

const { values, handleSubmit, errors, isSubmitting, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    reservationDate: new Date(new Date().toDateString()),
  },
});
const onSubmit = handleSubmit(async (formValues) => {
  console.log(formValues);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('done');
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2>予約フォーム</h2>
    <AppInput name="name" label="名前" />
    <AppInput name="email" label="メールアドレス" />
    <AppCalendar name="reservationDate" label="予約日" />
    <AppButton label="予約する" type="submit" :disabled="isSubmitting" />

    <div>
      <pre style="color: green">values: {{ values }}</pre>
      <pre style="color: red">errors: {{ errors }}</pre>
      <pre style="color: blue">meta: {{ meta }}</pre>
    </div>
  </form>
</template>
