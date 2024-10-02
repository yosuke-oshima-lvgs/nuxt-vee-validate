<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = toTypedSchema(
  yup.object({
    name: yup.string().optional(),
    email: yup.string().required().email(),
    date: yup.date().nullable(),
  })
);

const { values, handleSubmit, errors, isSubmitting, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    date: new Date(new Date().toDateString()),
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
    <AppInput name="name" label="Name" />
    <AppInput name="email" label="Email" />
    <AppCalendar name="date" label="Date" />
    <AppButton label="Submit" type="submit" :disabled="isSubmitting" />
  </form>
  <pre style="color: green">{{ values }}</pre>
  <pre style="color: red">{{ errors }}</pre>
  <pre style="color: blue">{{ meta }}</pre>
</template>
