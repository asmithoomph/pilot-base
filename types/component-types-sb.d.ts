// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface AccordionStoryblok {
  component: "accordion";
  _uid: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      anchor?: string;
      rel?: string;
      title?: string;
      prep?: string;
      linktype: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      linktype: "url";
      rel?: string;
      title?: string;
      [k: string]: any;
    }
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      email?: string;
      linktype: "email";
      [k: string]: any;
    }
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      linktype: "asset";
      [k: string]: any;
    };

export interface AppButtonStoryblok {
  padded?: boolean;
  block?: boolean;
  size?: "" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?:
    | ""
    | "white"
    | "gray"
    | "black"
    | "primary"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";
  variant?: "" | "link" | "solid" | "outline" | "soft" | "ghost";
  border_radius?: "" | "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  label: string;
  path?: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  icon_trailing?: boolean;
  type?: "" | "button" | "submit" | "reset";
  component: "app-button";
  _uid: string;
  [k: string]: any;
}

export interface AppFormStoryblok {
  name: string;
  recipients: string;
  fields: AppInputStoryblok[];
  buttons?: (AppButtonStoryblok | ButtonRowStoryblok)[];
  component: "app-form";
  _uid: string;
  [k: string]: any;
}

export interface AppInputStoryblok {
  full_width?: boolean;
  type: "" | "text" | "textarea" | "email" | "tel" | "time" | "date";
  label: string;
  placeholder?: string;
  validation?: ("" | "required" | "number" | "email")[];
  component: "app-input";
  _uid: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt: string | null;
  copyright?: string | null;
  fieldtype: "asset";
  id: number;
  filename: string | null;
  name: string;
  title: string | null;
  focus: string | null;
  meta_data?: {
    [k: string]: any;
  };
  source?: string | null;
  is_external_url?: boolean;
  is_private?: boolean;
  src?: string;
  updated_at?: string;
  width?: number | null;
  height?: number | null;
  aspect_ratio?: number | null;
  public_id?: string | null;
  content_type?: string;
  [k: string]: any;
}

export interface BackgroundStoryblok {
  image?: AssetStoryblok;
  cover?: boolean;
  repeatable?: boolean;
  component: "background";
  _uid: string;
  [k: string]: any;
}

export interface BannerStoryblok {
  headline?: string;
  component: "banner";
  _uid: string;
  [k: string]: any;
}

export interface BreadcrumbLinkStoryblok {
  label?: string;
  path?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "breadcrumb-link";
  _uid: string;
  [k: string]: any;
}

export interface BreadcrumbsStoryblok {
  hide_root?: boolean;
  hide_current?: boolean;
  component: "breadcrumbs";
  _uid: string;
  [k: string]: any;
}

export interface ButtonRowStoryblok {
  buttons: AppButtonStoryblok[];
  justify?: "" | "left" | "center" | "right" | "between" | "around";
  component: "button-row";
  _uid: string;
  [k: string]: any;
}

export interface CarouselStoryblok {
  slides: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  slides_per_view?: "" | "1" | "2" | "3" | "4";
  gutter?: "" | "none" | "sm" | "md" | "lg" | "xl";
  show_arrows?: boolean;
  component: "carousel";
  _uid: string;
  [k: string]: any;
}

export interface ContainerStoryblok {
  width?: "" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  content?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  component: "container";
  _uid: string;
  [k: string]: any;
}

export interface DefaultPageStoryblok {
  meta_title?: string;
  meta_description?: string;
  body?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  component: "default-page";
  _uid: string;
  [k: string]: any;
}

export interface DynamicCardStoryblok {
  footer_padded?: boolean;
  footer_content?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  body_padded?: boolean;
  body_content?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  header_padded?: boolean;
  header_content?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  shadow?: boolean;
  border_radius?: "" | "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  component: "dynamic-card";
  _uid: string;
  [k: string]: any;
}

export interface GlobalReferenceStoryblok {
  reference?: any;
  component: "global-reference";
  _uid: string;
  [k: string]: any;
}

export interface GridStoryblok {
  content?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  columns?: "" | "2" | "3" | "4";
  gap?: "" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  component: "grid";
  _uid: string;
  [k: string]: any;
}

export interface MediaStoryblok {
  file: AssetStoryblok;
  path?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  position?:
    | ""
    | "center"
    | "top"
    | "bottom"
    | "right"
    | "right-top"
    | "right-bottom"
    | "left"
    | "left-top"
    | "left-bottom";
  fit_mode?: "" | "cover" | "contain" | "fill" | "scale-down" | "none";
  lazy?: boolean;
  component: "media";
  _uid: string;
  [k: string]: any;
}

export interface MediaContainerStoryblok {
  media: (MediaStoryblok | YoutubeEmbedStoryblok)[];
  ring?: boolean;
  shadow?: boolean;
  size?: "" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  aspect_ratio?: "" | "auto" | "square" | "video" | "portrait" | "vertical";
  border_radius?: "" | "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  component: "media-container";
  _uid: string;
  [k: string]: any;
}

export interface NavigationLinkStoryblok {
  name?: string;
  path?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  dropdown?: NavigationLinkStoryblok[];
  component: "navigation-link";
  _uid: string;
  [k: string]: any;
}

export interface SectionStoryblok {
  content?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  padding_top?: boolean;
  padding_bottom?: boolean;
  remove_margins?: boolean;
  component: "section";
  _uid: string;
  [k: string]: any;
}

export interface SideBySideStoryblok {
  layout?: "" | "50_50" | "60_40" | "40_60";
  left_col?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  right_col?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  gap?: "" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  alignment?: "" | "center" | "start" | "end" | "stretch" | "baseline";
  component: "side-by-side";
  _uid: string;
  [k: string]: any;
}

export interface SimpleCardStoryblok {
  ring?: boolean;
  shadow?: boolean;
  border_radius?: "" | "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  image?: AssetStoryblok;
  eyebrow?: string;
  headline?: string;
  content?: string;
  buttons?: (AppButtonStoryblok | ButtonRowStoryblok)[];
  component: "simple-card";
  _uid: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface SimpleTextStoryblok {
  eyebrow?: string;
  headline?: string;
  body?: RichtextStoryblok;
  buttons?: (ButtonRowStoryblok | AppButtonStoryblok)[];
  align?: "" | "left" | "center" | "right";
  size?: "" | "sm" | "base" | "lg" | "xl" | "2xl";
  component: "simple-text";
  _uid: string;
  [k: string]: any;
}

export interface SiteConfigStoryblok {
  cookies_enabled?: boolean;
  cookie_headline?: string;
  cookie_text?: string;
  site_name: string;
  site_description?: string;
  primary_logo: AssetStoryblok;
  header_navigation?: NavigationLinkStoryblok[];
  header_buttons?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  linkedin?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  twitter?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  facebook?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  instagram?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  youtube?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  footer_navigation?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  copyright?: string;
  secondary_logo?: AssetStoryblok;
  mobile_navigation?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  component: "site-config";
  _uid: string;
  [k: string]: any;
}

export interface SpacerStoryblok {
  component: "spacer";
  _uid: string;
  [k: string]: any;
}

export interface StackableStoryblok {
  content?: (
    | AccordionStoryblok
    | AppButtonStoryblok
    | AppFormStoryblok
    | AppInputStoryblok
    | BackgroundStoryblok
    | BannerStoryblok
    | BreadcrumbLinkStoryblok
    | BreadcrumbsStoryblok
    | ButtonRowStoryblok
    | CarouselStoryblok
    | ContainerStoryblok
    | DefaultPageStoryblok
    | DynamicCardStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | MediaStoryblok
    | MediaContainerStoryblok
    | NavigationLinkStoryblok
    | SectionStoryblok
    | SideBySideStoryblok
    | SimpleCardStoryblok
    | SimpleTextStoryblok
    | SiteConfigStoryblok
    | SpacerStoryblok
    | StackableStoryblok
    | YoutubeEmbedStoryblok
  )[];
  component: "stackable";
  _uid: string;
  [k: string]: any;
}

export interface YoutubeEmbedStoryblok {
  video_url: string;
  thumbnail?: AssetStoryblok;
  controls?: boolean;
  autoplay?: boolean;
  component: "youtube-embed";
  _uid: string;
  [k: string]: any;
}
