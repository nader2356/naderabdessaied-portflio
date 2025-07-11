import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ 
      slug: post.slug 
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  try {
    let post = await getPost(params.slug);

    if (!post || !post.metadata) {
      return undefined;
    }

    let {
      title = "Untitled",
      publishedAt: publishedTime = new Date().toISOString(),
      summary: description = "",
      image,
    } = post.metadata;
    
    let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${encodeURIComponent(title)}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime,
        url: `${DATA.url}/blog/${post.slug}`,
        images: [
          {
            url: ogImage,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return undefined;
  }
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  try {
    let post = await getPost(params.slug);

    if (!post || !post.metadata) {
      notFound();
    }

    const {
      title = "Untitled",
      publishedAt = new Date().toISOString(),
      summary = "",
      image,
    } = post.metadata;

    return (
      <section id="blog">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: title,
              datePublished: publishedAt,
              dateModified: publishedAt,
              description: summary,
              image: image
                ? `${DATA.url}${image}`
                : `${DATA.url}/og?title=${encodeURIComponent(title)}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
          {title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(publishedAt)}
            </p>
          </Suspense>
        </div>
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.source || "" }}
        ></article>
      </section>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    notFound();
  }
}