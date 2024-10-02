<script setup lang="ts">
import { useForm } from 'vee-validate';

defineProps<{
  label: string;
  type: 'button' | 'submit' | 'reset';
}>();

const emit = defineEmits(['click']);
</script>

<template>
  <button :type="type" @click="emit('click')">{{ label }}</button>
</template>
