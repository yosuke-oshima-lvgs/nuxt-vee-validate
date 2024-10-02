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
    <div>
      <label :for="name">
        <span>{{ label }}</span>
        <input :id="name" :name="name" v-model="value" />
      </label>
    </div>
    <p style="color: red" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
