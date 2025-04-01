import { defineStore } from "pinia";
import { Inventory } from "@/types/inventory.type";
import { ref } from "vue";
import { computed } from "vue";

export const useInventory = defineStore("inventory", () => {
  const items = ref<Inventory[]>([]);

  //кол-во предметов
  const totalItems = computed(() => items.value.length);

  //получение по id
  const getItemId = (id: string) => {
    return computed(() => {
      items.value.find((item) => item.id === id);
    });
  };

  //добавление инвентаря
  const addItem = (item: Omit<Inventory, "if">) => {
    const newItem: Inventory = {
      ...item,
      id: crypto.randomUUID(),
    };
    items.value.push(newItem);
    saveToLocalStorage();
    return newItem;
  };

  //загрузка из localStorage
  const loadFromLocalStorage = () => {
    try {
      const storage = localStorage.getItem("inventory");
      if (storage) {
        items.value = JSON.parse(storage);
        console.log("Данные инвентаря загрузились");
      }
    } catch (e) {
      console.error("Данные инвентаря не загрузились", e);
    }
  };

  //сохранение в localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("inventory", JSON.stringify(items.value));
    console.log("Данные инвентаря сохранены");
  };

  //удаление
  const deleteFromLocalStorage = (id: string) => {
    items.value = items.value.filter((item) => item.id !== id);
    saveToLocalStorage();
  };

  return {
    items,
    totalItems,
    addItem,
    getItemId,
    loadFromLocalStorage,
    deleteFromLocalStorage,
  };
});
