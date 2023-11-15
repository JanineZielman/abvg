import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { ThemeMenu } from "../components/ThemeMenu";
import { Projects } from "../components/Projects";

const Index = ({ navigation, settings, page, projects, themeMenu}) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={prismicH.asText(settings.data.siteTitle)} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <ThemeMenu themeMenu={themeMenu}/>
      <Projects projects={projects}/>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const prismic = require("@prismicio/client");

  const projects = await client.getAllByType("project", { 
    // orderings: {
		// 	field: 'my.event.date',
		// 	direction: 'asc',
		// },
  });
  const themeMenu = await client.getSingle("theme_menu");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getByUID("page", "projecten");


  return {
    props: {
      navigation,
      settings,
      page,
      projects,
      themeMenu
    },
  };
}
