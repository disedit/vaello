export const useLanguage = () => {
  const route = useRoute();
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ];
  const currentLanguage = computed(() =>
    route.params.slug?.[0] === "en" ? "en" : "es",
  );
  const switchLanguage = (newLanguage) => {
    const { slug } = route.params;
    let parts = [...slug];
    if (!parts) parts = [];
    if (parts[0] === "en" && newLanguage === "es") {
      parts.shift();
    } else if (parts[0] !== "en" && newLanguage !== "es") {
      parts.unshift(newLanguage);
    }
    return "/" + parts.join("/");
  };

  return {
    languages,
    currentLanguage,
    switchLanguage,
  };
};
