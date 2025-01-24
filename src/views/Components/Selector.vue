<template>
  <div>
    <label v-if="label" class="form-label fw-normal" :for="id">{{ label }}</label>
    <div class="custom-select" :id="id">
      <div class="single-select-header form-select" @click="toggleOptions">
        {{ selected || `Seleccione ${label.toLowerCase()}` }}
        <i class="fas fa-chevron-down select-icon"></i>
      </div>
      <div v-if="isOpen" class="single-select-options">
        <div 
          v-for="option in options" 
          :key="option"
          class="single-option"
          @click="selectOption(option)"
          :title="option"
          :data-value="option"
        >
          {{ option }}
        </div>
      </div>
      <input type="hidden" :name="name" :value="selected">
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits();

const props = defineProps({
  id: String,
  label: String,
  name: String,
  options: Array,
  modelValue: [String, Number],
});

watch(
  () => props.modelValue,
  (newValue) => {
    selected.value = newValue; 
  }
);

const isOpen = ref(false);
const selected = ref(props.modelValue || ''); 

const toggleOptions = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option;
  isOpen.value = false;
  emit('update:modelValue', selected.value);
};
</script>

<style scoped>
.single-select-options {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    display: block;
    z-index: 88;
    border-radius: 0 0 8px 8px;
    background-color: #FFFFFF;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #2897D4 !important;
    border-radius: 0px 0px 8px 8px !important;
    border-top: none !important;
    box-shadow: 0px 4px 4px 0px #2897D4 !important;
    font-family: "Montserrat", sans-serif;
  }
</style>