<template>
  <div>
    <label v-if="label" class="form-label fw-normal" :for="id">{{ label }}</label>
    <div class="custom-select" :id="id">
      <div class="single-select-header form-select" @click="toggleOptions">
        {{ selected || `Seleccione ${label.toLowerCase()}` }}
        <!-- <i class="fas fa-chevron-down select-icon"></i> -->
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
import { ref } from 'vue';

const emit = defineEmits();

const props = defineProps({
  id: String,
  label: String,
  name: String,
  options: Array,
  modelValue: [String, Number],
});

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
