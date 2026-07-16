import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  blog.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: '我的技术博客',
    description: '记录技术探索与个人随笔',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`, 
    })),
    customData: `<language>zh-cn</language>`,
  });
}
