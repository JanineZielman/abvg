import Head from "next/head";
import { SliceZone, PrismicRichText, PrismicImage, PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
import { Layout } from "../../../components/Layout";
import { ThemeMenu } from "../../../components/ThemeMenu";
import { Projects } from "../../../components/Projects";
import Moment from 'moment';

const Page = ({ page, navigation, settings, themeMenu, projects, params }) => {

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
          let active = params.sub == item.sub_theme.uid;
          return(
            <PrismicLink className={`${active}`} key={`subtheme${i}`} href={`/theme/${page.uid}/${item.sub_theme.uid}`}>{item.sub_theme.data?.title}</PrismicLink>
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
  const subtheme = await client.getByUID("sub_theme", params.sub);

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const themeMenu = await client.getSingle("theme_menu");
  const projects = await client.getAllByType("project", { 
    predicates: [
      prismic.predicate.at(
        'my.project.sub_theme',
        subtheme.id
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
      projects,
      subtheme,
      params
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const subthemes = await client.getAllByType("sub_theme");
  const themes = await client.getAllByType("theme");


  return {
    paths: subthemes.map((subtheme) => {
      const res = themes.filter(theme => 
        theme.data.sub_themes.some(sub => 
            sub.sub_theme.uid == subtheme.uid
        )
      )
      return {
        params: { 
          uid: res[0].uid,
          sub: subtheme.uid,
        },
      };
    }),
    fallback: false,
  };
}
