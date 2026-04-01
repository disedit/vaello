export const useSettings = async () => {
  const nuxtApp = useNuxtApp()
  const version = useEnvironment()
  const storyblokApi = useStoryblokApi()
  const { data: settings } = await useAsyncData(
    'settings',
    async () => {
      return await storyblokApi.get('cdn/stories/settings', {
        version,
        resolve_links: 'url',
      })
    },
    {
      dedupe: 'defer',
      getCachedData (key) {
        return nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key]
      }
    }
  )

  return settings
}
