<script setup lang="ts">
import { useInventory } from "@/stores/inventory.js";
import { computed, onMounted } from "vue";
import { useDraggable } from "@vueuse/core";
import { ref } from "vue";

const inventory = useInventory();
const { items } = inventory;

const rows = 5;
const cols = 5;
const totalSlotItem = rows * cols;

const slotsRender = computed(() => {
  let slots = new Array(totalSlotItem).fill(null);
  items.forEach((item, index) => {
    slots[index] = item;
  });
  return slots;
});

const initialItems = [
  {
    name: "Хлеб",
    image: "/card_green.svg",
  },
  {
    name: "Нож",
    image: "/card_yellow.svg",
  },
  {
    name: "Шляпа",
    image: "/card_violet.svg",
  },
  {
    name: "Шляпа",
    image: "/card_violet.svg",
  },
];

onMounted(() => {
  if (items.length === 0) {
    initialItems.forEach((item) => inventory.addItem(item));

    const el = ref < HTMLElement > "el";

    useDraggable(el);
  }
});
</script>

<template>
  <div
    v-for="(item, index) in slotsRender"
    :key="index"
    class="inventory__card cell"
    :ref="(el) => (el[index] = el)"
    :style="style"
  >
    <img class="card__img" v-if="item" :src="item.image" alt="" />
  </div>
</template>

<style scoped>
.inventory__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-top-left-radius: 12px;
  }
  &:nth-child(5) {
    border-top-right-radius: 12px;
  }

  &:nth-child(21) {
    border-bottom-left-radius: 12px;
  }

  &:nth-child(25) {
    border-bottom-right-radius: 12px;
  }
}
.card__img {
  width: 80px;
  height: 80px;
  background-color: #262626;
}

.cell {
  border: 1px solid #4d4d4d;
}
</style>
