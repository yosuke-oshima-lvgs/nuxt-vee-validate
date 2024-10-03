<script setup lang="ts">
import { DatePicker } from 'v-calendar';

import 'v-calendar/style.css';
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  label: string;
}>();

const { value, errors, meta, errorMessage } = useField<Date>(() => props.name);
</script>

<template>
  <div style="display: flex; gap: 1rem">
    <div>
      <DatePicker :name="name" v-model="value" locale="ja" />
      <p style="color: red" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
    <div>
      <pre style="color: green">value: {{ value }}</pre>
      <pre style="color: red">errors: {{ errors }}</pre>
      <pre style="color: blue">meta: {{ meta }}</pre>
    </div>
  </div>
</template>
