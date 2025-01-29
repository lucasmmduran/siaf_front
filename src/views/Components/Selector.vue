<template>
  <div>
    <label v-if="label" class="form-label fw-normal" :for="id">{{ label }}</label>
    <div class="custom-select" :id="id">
      <div class="single-select-header form-select" @click="toggleOptions">
        {{ selectedName || `Seleccione ${label.toLowerCase()}` }}
        <i class="fas fa-chevron-down select-icon"></i>
      </div>
      <div v-if="isOpen" class="single-select-options">
        <div 
          v-for="option in options" 
          :key="option.id"
          class="single-option"
          @click="selectOption(option)"
          :title="displayValue(option)"
          :data-value="option.id"
        >
          {{ displayValue(option) }}
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
  labelField: {
    type: String,
    default: 'name'  // Cambiar a 'name', 'id' o cualquier otro valor dinámico
  }
});

watch(
  () => props.modelValue,
  (newValue) => {
    selected.value = newValue;
    updateSelectedName();  // Actualiza el nombre seleccionado
  }
);

const isOpen = ref(false);
const selected = ref(props.modelValue || '');  // ID seleccionado
const selectedName = ref('');  // Nombre seleccionado

// Función para decidir qué mostrar como el valor de cada opción
const displayValue = (option) => {
  return option[props.labelField]; // Usa la propiedad indicada por `labelField`
};

const toggleOptions = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option.id;  // Guardar el 'id' seleccionado
  selectedName.value = option[props.labelField]; // Mostrar el 'name' correspondiente
  isOpen.value = false;
  emit('update:modelValue', selected.value);  // Emitir el id
};

// Actualiza el nombre seleccionado basado en el id
const updateSelectedName = () => {
  const selectedOption = props.options.find(option => option.id === selected.value);
  selectedName.value = selectedOption ? selectedOption[props.labelField] : ''; 
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
