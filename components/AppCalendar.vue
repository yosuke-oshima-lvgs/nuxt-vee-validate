<script setup lang="ts">
import { DatePicker } from 'v-calendar';

import 'v-calendar/style.css';
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  label: string;
}>();

const { value, errorMessage } = useField<Date>(() => props.name);
</script>

<template>
  <div>
    <DatePicker :name="name" v-model="value" locale="ja" />
    <span style="color: red" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>
