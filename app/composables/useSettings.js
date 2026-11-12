export const useSettings = async () => {
  const version = useEnvironment();
  const { locale } = useI18n();
  const storyblokApi = useStoryblokApi();

  // The key includes the locale, so each language gets its own cache entry.
  // When the locale changes, the key changes and Nuxt fetches that language's
  // settings (or reuses them if they were already loaded).
  const { data: settings } = await useAsyncData(
    () => `settings-${locale.value}`,
    async () => {
      return await storyblokApi.get("cdn/stories/settings", {
        version,
        language: locale.value,
        resolve_links: "url",
      });
    },
    {
      dedupe: "defer",
      getCachedData(key, nuxtApp) {
        return nuxtApp.isHydrating
          ? nuxtApp.payload.data[key]
          : nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
      },
    },
  );

  return settings;
};
