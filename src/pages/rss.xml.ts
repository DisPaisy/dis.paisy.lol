import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(context: any) {
    return rss({
        title: 'Blog | DisPaisy',
        description: 'N/A',
        site: "https://dis.paisy.lol",
        items: await pagesGlobToRssItems(import.meta.glob('./blog/*.md')),
        customData: `<language>en-us</language>`,
    });
}