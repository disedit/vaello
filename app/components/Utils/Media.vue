<script setup>
const props = defineProps({
  media: { type: Object, required: true },
  width: { type: Number, default: null },
  sizes: { type: String, default: null },
})

const emit = defineEmits(['loaded'])

const isVideo = props.media.filename.endsWith('mp4')
</script>

<template>
  <video
    v-if="isVideo"
    :src="media.filename"
    playsinline muted autoplay loop
    class="block"
    @loadeddata="emit('loaded')" />
  <NuxtImg
    v-else
    :src="media.filename"
    :width="width"
    :alt="media.alt"
    :sizes="sizes"
    preload
    class="block"
    @load="emit('loaded')"
  />
</template>
