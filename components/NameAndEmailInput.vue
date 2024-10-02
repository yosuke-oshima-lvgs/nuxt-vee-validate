<script setup lang="ts">
defineProps<{
  name: string;
  label: string;
}>();
</script>

<template>
  <div>
    <label :for="name">{{ label }}</label>
    <AppInput name="name" label="Name" />
    <AppInput name="email" label="Email" />
  </div>
</template>
