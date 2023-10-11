import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const Index = ({ navigation, settings, page }) => {
  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={prismicH.asText(settings.data.siteTitle)} />
        <meta property="og:description" content={settings.data.description} />
        {/* <meta property="og:image" content={settings.data.image.url} /> */}
      </Head>
      <div className="container projects">
       hello
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  // const events = await client.getAllByType("event", { 
  //   lang: locale,
  //   orderings: {
	// 		field: 'my.event.date',
	// 		direction: 'asc',
	// 	},
  //   fetchLinks: 'location.title category.title'
  // });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getByUID("page", "projecten");


  return {
    props: {
      navigation,
      settings,
      page
    },
  };
}
