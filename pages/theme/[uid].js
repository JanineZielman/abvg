import Head from "next/head";
import { SliceZone, PrismicRichText, PrismicImage, PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { ThemeMenu } from "../../components/ThemeMenu";
import { Projects } from "../../components/Projects";

const Page = ({ page, navigation, settings, themeMenu, projects }) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {page.data.title} | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page.data.title} | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <ThemeMenu themeMenu={themeMenu}/>
      <div className="sub-menu">
        {page.data.sub_themes.map((item,i) => {
          return(
            <PrismicLink key={`subtheme${i}`} href={`/theme/${page.uid}/${item.sub_theme.uid}`}>{item.sub_theme.data?.title}</PrismicLink>
          )
        })}
      </div>
      <div className="sub">
        <Projects projects={projects}/>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const prismic = require("@prismicio/client");

  const page = await client.getByUID("theme", params.uid, {
    fetchLinks: "sub_theme.title",
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const themeMenu = await client.getSingle("theme_menu");
  const projects = await client.getAllByType("project", { 
    predicates: [
      prismic.predicate.at(
        'my.project.theme',
        page.id
      ),
    ],
    orderings: {
			field: 'my.project.start_date',
			direction: 'desc',
		},
  });

  return {
    props: {
      page,
      navigation,
      settings,
      themeMenu,
      projects
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("theme");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
