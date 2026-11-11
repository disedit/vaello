// Measures a .freezable block for the freeze effect (see utils.css).
// Bind `inner` to .freezable-inner and `freezeStyle` to .freezable.
//
// --freeze-bottom: when the block ends above the bottom of the first screen
//                  (e.g. it's at the top of the page and fits on screen), how
//                  far above. It freezes there instead of being pushed down to
//                  the bottom of the screen.
export const useFreezable = () => {
  const inner = ref(null);
  const bottom = ref(0);

  const measure = () => {
    const el = inner.value;
    if (!el) return;
    const h = el.getBoundingClientRect().height;
    // The outer .freezable isn't sticky, so its position is its normal one.
    // The block starts after its top padding (page spacing, see .page-blocks).
    const outer = el.parentElement;
    const top =
      outer.getBoundingClientRect().top +
      window.scrollY +
      parseFloat(getComputedStyle(outer).paddingTop);
    bottom.value = Math.max(0, window.innerHeight - (top + h));
  };

  // Re-measure on resize (of the block, the page or the window), and whenever
  // an image or video inside finishes loading (load events don't bubble, so
  // listen in the capture phase).
  useResizeObserver(inner, measure);
  useResizeObserver(() => (import.meta.client ? document.body : null), measure);
  useEventListener(inner, "load", measure, { capture: true });
  useEventListener(inner, "loadeddata", measure, { capture: true });
  useEventListener("resize", measure);
  // Covers media that finished loading before this component mounted
  useEventListener("load", measure);
  onMounted(measure);

  const freezeStyle = computed(() => ({
    "--freeze-bottom": `${Math.round(bottom.value)}px`,
  }));

  return { inner, freezeStyle };
};
