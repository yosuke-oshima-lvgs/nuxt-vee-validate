<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = toTypedSchema(
  yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    address: yup.string().required(),
    reservationDate: yup.date().required(),
  })
);

const { values, handleSubmit, errors, isSubmitting, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    address: '',
    reservationDate: new Date(new Date().toDateString()),
  },
});
const onSubmit = handleSubmit(async (formValues) => {
  success.value = false;
  console.log(formValues);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  success.value = true;
});

const success = ref(false);
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2>予約フォーム</h2>
    <NameAndEmailInput />
    <hr />
    <AppInput name="address" label="住所" />
    <hr />
    <AppCalendar name="reservationDate" label="予約日" />
    <hr />
    <AppButton label="予約する" type="submit" :disabled="isSubmitting" />
    <hr />
    <p v-if="success" style="color: green">予約が成功しました！</p>
    <div>
      <pre style="color: green">values: {{ values }}</pre>
      <pre style="color: red">errors: {{ errors }}</pre>
      <pre style="color: blue">meta: {{ meta }}</pre>
    </div>
  </form>
</template>
