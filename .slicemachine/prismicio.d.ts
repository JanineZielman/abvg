// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = ColumnsSlice | ImageSlice | ImagesSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Title field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Location field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    location: prismicT.KeyTextField;
    /**
     * Image field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Theme field in *Project*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: project.theme
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    theme: prismicT.RelationField<"theme">;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Site Title field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the site
     * - **API ID Path**: settings.siteTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    siteTitle: prismicT.TitleField;
    /**
     * Logo field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Image field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
/** Content for Theme Menu documents */
interface ThemeMenuDocumentData {
    /**
     * Slice Zone field in *Theme Menu*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: theme_menu.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ThemeMenuDocumentDataSlicesSlice>;
}
/**
 * Slice for *Theme Menu → Slice Zone*
 *
 */
type ThemeMenuDocumentDataSlicesSlice = ThemeMenuSlice;
/**
 * Theme Menu document from Prismic
 *
 * - **API ID**: `theme_menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ThemeMenuDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ThemeMenuDocumentData>, "theme_menu", Lang>;
/** Content for Theme documents */
interface ThemeDocumentData {
    /**
     * Title field in *Theme*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: theme.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Theme document from Prismic
 *
 * - **API ID**: `theme`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ThemeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ThemeDocumentData>, "theme", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument | ProjectDocument | SettingsDocument | ThemeMenuDocument | ThemeDocument;
/**
 * Primary content in Columns → Primary
 *
 */
interface ColumnsSliceDefaultPrimary {
    /**
     * Title field in *Columns → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: columns.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in Columns → Items
 *
 */
export interface ColumnsSliceDefaultItem {
    /**
     * Column field in *Columns → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: columns.items[].column
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    column: prismicT.RichTextField;
    /**
     * Quote field in *Columns → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: columns.items[].quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    quote: prismicT.KeyTextField;
}
/**
 * Default variation for Columns Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Columns`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ColumnsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ColumnsSliceDefaultPrimary>, Simplify<ColumnsSliceDefaultItem>>;
/**
 * Slice variation for *Columns*
 *
 */
type ColumnsSliceVariation = ColumnsSliceDefault;
/**
 * Columns Shared Slice
 *
 * - **API ID**: `columns`
 * - **Description**: `Columns`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ColumnsSlice = prismicT.SharedSlice<"columns", ColumnsSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Title field in *Image → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Item in Images → Items
 *
 */
export interface ImagesSliceDefaultItem {
    /**
     * Title field in *Images → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: images.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Image field in *Images → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: images.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Images Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Images`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ImagesSliceDefaultItem>>;
/**
 * Slice variation for *Images*
 *
 */
type ImagesSliceVariation = ImagesSliceDefault;
/**
 * Images Shared Slice
 *
 * - **API ID**: `images`
 * - **Description**: `Images`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesSlice = prismicT.SharedSlice<"images", ImagesSliceVariation>;
/**
 * Primary content in ThemeMenu → Primary
 *
 */
interface ThemeMenuSliceDefaultPrimary {
    /**
     * Theme field in *ThemeMenu → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: theme_menu.primary.theme
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    theme: prismicT.LinkField;
}
/**
 * Item in ThemeMenu → Items
 *
 */
export interface ThemeMenuSliceDefaultItem {
    /**
     * Sub Theme field in *ThemeMenu → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: theme_menu.items[].sub_theme
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    sub_theme: prismicT.LinkField;
}
/**
 * Default variation for ThemeMenu Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ThemeMenu`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ThemeMenuSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ThemeMenuSliceDefaultPrimary>, Simplify<ThemeMenuSliceDefaultItem>>;
/**
 * Slice variation for *ThemeMenu*
 *
 */
type ThemeMenuSliceVariation = ThemeMenuSliceDefault;
/**
 * ThemeMenu Shared Slice
 *
 * - **API ID**: `theme_menu`
 * - **Description**: `ThemeMenu`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ThemeMenuSlice = prismicT.SharedSlice<"theme_menu", ThemeMenuSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, ProjectDocumentData, ProjectDocument, SettingsDocumentData, SettingsDocument, ThemeMenuDocumentData, ThemeMenuDocumentDataSlicesSlice, ThemeMenuDocument, ThemeDocumentData, ThemeDocument, AllDocumentTypes, ColumnsSliceDefaultPrimary, ColumnsSliceDefaultItem, ColumnsSliceDefault, ColumnsSliceVariation, ColumnsSlice, ImageSliceDefaultPrimary, ImageSliceDefault, ImageSliceVariation, ImageSlice, ImagesSliceDefaultItem, ImagesSliceDefault, ImagesSliceVariation, ImagesSlice, ThemeMenuSliceDefaultPrimary, ThemeMenuSliceDefaultItem, ThemeMenuSliceDefault, ThemeMenuSliceVariation, ThemeMenuSlice };
    }
}
