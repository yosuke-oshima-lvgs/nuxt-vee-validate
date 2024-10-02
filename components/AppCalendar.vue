<script setup lang="ts">
import { DatePicker } from 'v-calendar';
import type { DatePickerModel } from 'v-calendar/dist/types/src/use/datePicker.js';
import 'v-calendar/style.css';
import { useField } from 'vee-validate';

type Hoge = {
  yearMonthDate: Date;
  hours: number;
  minutes: number;
};

const props = defineProps<{
  dateName: string;
  hourName: string;
  minuteName: string;
  label: string;
}>();

const { value: dateValue, errorMessage: dateErrorMessage } =
  useField<DatePickerModel>(() => props.dateName);
const { value: hourValue, errorMessage: hourErrorMessage } = useField<number>(
  () => props.hourName
);
const { value: minuteValue, errorMessage: minuteErrorMessage } =
  useField<number>(() => props.minuteName);

watch([hourValue, minuteValue], ([hour, minute]) => {
  if (dateValue.value) {
    const pickDate = new Date(dateValue.value.toString());
    dateValue.value = {
      hours: hour,
      minutes: minute,
      day: pickDate.getDate(),
      month: pickDate.getMonth() + 1,
      year: pickDate.getFullYear(),
    };
  }
});
</script>

<template>
  <div>
    <DatePicker :name="dateName" v-model="dateValue" />
    <span style="color: red" v-if="dateErrorMessage">{{
      dateErrorMessage
    }}</span>

    <select :id="hourName" :name="hourName" v-model="hourValue">
      <option v-for="hour in 24" :key="hour" :value="hour - 1">
        {{ hour - 1 }}
      </option>
    </select>
    <span style="color: red" v-if="hourErrorMessage">{{
      hourErrorMessage
    }}</span>

    <select :id="minuteName" :name="minuteName" v-model="minuteValue">
      <option v-for="minute in 60" :key="minute" :value="minute - 1">
        {{ minute - 1 }}
      </option>
    </select>
    <span style="color: red" v-if="minuteErrorMessage">{{
      minuteErrorMessage
    }}</span>
  </div>
</template>
