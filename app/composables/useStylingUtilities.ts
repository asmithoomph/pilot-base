import type {
  MediaContainerStoryblok,
  MediaStoryblok,
  ContainerStoryblok,
  AppButtonStoryblok,
  ButtonRowStoryblok,
  GridStoryblok,
  SimpleTextStoryblok,
  CarouselStoryblok,
} from "~/types/component-types-sb";

export default function () {
  const useWidth = (
    size: MediaContainerStoryblok["size"] | ContainerStoryblok["width"]
  ) => {
    const sizes = {
      xs: "max-w-screen-xs",
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full !px-0",
    };
    return sizes[size || "full"];
  };

  const useBorderRadius = (
    radius:
      | MediaContainerStoryblok["border_radius"]
      | AppButtonStoryblok["border_radius"]
  ) => {
    const radii = {
      none: "rounded-none",
      default: "rounded-default",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    };
    return radii[radius || "none"];
  };

  const useAspectRatio = (ratio: MediaContainerStoryblok["aspect_ratio"]) => {
    const ratios = {
      auto: "aspect-auto",
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-portrait",
      vertical: "aspect-vertical",
    };
    return ratios[ratio || "auto"];
  };

  const useObjectFit = (mode: MediaStoryblok["fit_mode"]) => {
    const fits = {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down",
    };
    return fits[mode || "none"];
  };

  const useObjectPosition = (position: MediaStoryblok["position"]) => {
    const positions = {
      bottom: "object-bottom",
      center: "object-center",
      left: "object-left",
      "left-bottom": "object-left-bottom",
      "left-top": "object-left-top",
      right: "object-right",
      "right-bottom": "object-right-bottom",
      "right-top": "object-right-top",
      top: "object-top",
    };
    return positions[position || "center"];
  };

  const useFlexAJustify = (justify: ButtonRowStoryblok["justify"]) => {
    const justifications = {
      center: "justify-center text-center",
      left: "justify-start text-left",
      right: "justify-end text-right",
      between: "justify-between text-center",
      around: "justify-around text-center",
    };
    return justifications[justify || "center"];
  };

  const useFlexAlign = (
    alignment: "center" | "start" | "end" | "stretch" | "baseline"
  ) => {
    const alignments = {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    };
    return alignments[alignment || "center"];
  };

  const useTextAlign = (align: "left" | "center" | "right") => {
    const alignments = {
      left: "text-left",
      center: "text-center mx-auto",
      right: "text-right",
    };
    return alignments[align || "left"];
  };

  const useTextSize = (size: SimpleTextStoryblok["size"]) => {
    const sizes = {
      sm: "prose-sm",
      base: "prose-base",
      lg: "lg:prose-lg",
      xl: "lg:prose-xl",
      "2xl": "lg:prose-2xl",
    };
    return sizes[size || "base"];
  };

  const useColumns = (columns: GridStoryblok["columns"]) => {
    const columnClasses = {
      "2": "@2xl:grid-cols-2 grid-cols-1",
      "3": "@5xl:grid-cols-3 @2xl:grid-cols-2 grid-cols-1",
      "4": "@5xl:grid-cols-4 @2xl:grid-cols-2 grid-cols-1",
    };
    return columnClasses[columns || "3"];
  };

  const useGutter = (gap: GridStoryblok["gap"]) => {
    const gaps = {
      xs: "gap-2.5",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-10",
      xl: "gap-12",
      "2xl": "gap-16",
    };
    return gaps[gap || "md"];
  };

  const useSpaceBetween = (space: CarouselStoryblok["gutter"]) => {
    const spaces = {
      none: 0,
      sm: 10,
      md: 20,
      lg: 30,
      xl: 40,
    };
    return spaces[space || "md"];
  };

  const useSectionPadding = (top: boolean, bottom: boolean) => {
    const topPadding = top ? "pt-20" : "";
    const bottomPadding = bottom ? "pb-20" : "";
    return `${topPadding} ${bottomPadding}`.trim();
  };

  const useCardPadding = (padded: boolean) => {
    return padded ? "px-4 py-5 sm:p-6" : "p-0";
  };

  const useSectionMargins = (top: boolean, bottom: boolean) => {
    const topMargin = top ? "" : "!-mt-0";
    const bottomMargin = bottom ? "" : "!-mb-20";
    return `${topMargin} ${bottomMargin}`.trim();
  };

  const useRing = (ring: MediaStoryblok["ring"]) =>
    ring ? "ring-1 ring-primary" : "";

  const useShadow = (shadow: MediaStoryblok["shadow"]) =>
    shadow ? "shadow-xl" : "";

  return {
    useWidth,
    useBorderRadius,
    useAspectRatio,
    useObjectFit,
    useObjectPosition,
    useFlexAJustify,
    useFlexAlign,
    useTextAlign,
    useTextSize,
    useColumns,
    useSpaceBetween,
    useGutter,
    useSectionPadding,
    useCardPadding,
    useSectionMargins,
    useRing,
    useShadow,
  };
}
