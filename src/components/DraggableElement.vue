<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import { useTemplateRef } from "vue";

const el = useTemplateRef<HTMLElement>("el");

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<template>
  <div ref="el" :style="style" style="position: fixed; color: white">
    Drag me! I am at
  </div>
</template>
