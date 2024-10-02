<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = toTypedSchema(
  yup.object({
    name: yup.string().optional(),
    email: yup.string().required().email(),
    date: yup.date().min(new Date(new Date().toDateString())),
    hour: yup.number().min(0).max(23),
    minute: yup.number().min(0).max(59),
  })
);

const { values, handleSubmit, errors, isSubmitting, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    date: new Date(new Date().toDateString()),
    hour: 0,
    minute: 0,
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
    <AppCalendar
      dateName="date"
      hourName="hour"
      minuteName="minute"
      label="Date"
    />
    <AppButton label="Submit" type="submit" :disabled="isSubmitting" />
  </form>
  <pre style="color: green">{{ values }}</pre>
  <pre style="color: red">{{ errors }}</pre>
  <pre style="color: blue">{{ meta }}</pre>
</template>
