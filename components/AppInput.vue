<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  label: string;
}>();

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input :id="name" :name="name" v-model="value" />
    <span style="color: red" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>
