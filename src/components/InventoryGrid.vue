<script setup lang="ts">
import InventoryItem from "@/components/InventoryItem.vue";
import { useInventory } from "@/stores/inventory.js";
import { storeToRefs } from "pinia";
import DraggableElement from "@/components/DraggableElement.vue";

const inventory = useInventory();
inventory.loadFromLocalStorage();
const { items } = storeToRefs(inventory);
</script>

<template>
  <div class="inventory">
    <div class="inventory__left">
      <img class="inventory__img" src="/inventory.png" alt="card" />
      <div class="inventory__info">
        <div class="skeleton" style="width: 100%; height: 26px"></div>
        <div class="skeleton" style="width: 155px; height: 10px"></div>
        <div class="skeleton" style="width: 190px; height: 10px"></div>
        <div class="skeleton" style="width: 170px; height: 10px"></div>
        <div class="skeleton" style="width: 160px; height: 10px"></div>
        <div class="skeleton" style="width: 140px; height: 10px"></div>
        <div class="skeleton" style="width: 80px; height: 10px"></div>
      </div>
    </div>
    <div class="inventory__right">
      <InventoryItem />
    </div>
    <DraggableElement />
  </div>
</template>

<style scoped lang="scss">
.inventory {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 850px;
  width: 100%;

  &__left {
    padding: 10px;
    background-color: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
    width: 236px;
    height: 500px;
  }

  &__info {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__right {
    display: grid;
    grid-template-columns: repeat(5, 105px);
    grid-template-rows: repeat(5, 100px);
    background-color: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
    max-width: 525px;
    width: 100%;
  }
}
</style>
