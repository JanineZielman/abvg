import Head from "next/head";
import { PrismicRichText, PrismicImage } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import { ThemeMenu } from "../../components/ThemeMenu";
import Moment from 'moment';

const Page = ({ page, navigation, settings, themeMenu }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
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
      <div className={`container projects`}>
        <div className={`project active`}>
          <div className="info">
            <p className="title">{page.data.title}</p>
            <p className="location">{page.data.location}</p>
          </div>
          <PrismicImage field={page.data.image}/>
          <div className="description">
            <PrismicRichText field={page.data.description}/>
          </div>
          <div className="content">
            {page.data.content?.map((contentItem, j) => {
              return(
                <>
                  <PrismicImage key={`image${j}`} field={contentItem.image}/>
                  {contentItem.text?.[0] &&
                    <div className="text">
                      <PrismicRichText field={contentItem.text}/>
                    </div>
                  }
                </>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("project", params.uid);
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const themeMenu = await client.getSingle("theme_menu");

  return {
    props: {
      page,
      navigation,
      settings,
      themeMenu
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("project");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid }
      };
    }),
    fallback: false,
  };
}
