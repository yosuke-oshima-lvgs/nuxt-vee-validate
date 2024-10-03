<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  label: string;
}>();

const { value, errors, meta, errorMessage } = useField(() => props.name);
</script>

<template>
  <div style="display: flex; gap: 1rem">
    <div>
      <label :for="name">
        <span>{{ label }}</span>
        <input :id="name" :name="name" v-model="value" />
      </label>
      <p style="color: red" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
    <div>
      <pre style="color: green">value: {{ value }}</pre>
      <pre style="color: red">errors: {{ errors }}</pre>
      <pre style="color: blue">meta: {{ meta }}</pre>
    </div>
  </div>
</template>
