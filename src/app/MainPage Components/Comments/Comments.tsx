import classes from './Comments.module.css';
import Image from 'next/image';
import { contentfulClient } from "@/app/lib/contentfulClient";
import { CommentsType } from "@/app/types/contentful";
import { notFound } from 'next/navigation';
import Script from 'next/script';

export const revalidate = 5;

export default async function Comments() {
  const commentsRes = await contentfulClient.getEntries({
    content_type: 'comments',
    limit: 3
  });

  if (!commentsRes || !commentsRes.items.length) notFound();
  const comments = commentsRes.items.map(item => item.fields as CommentsType);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nistor Gartenbau - Gartenservice Augsburg",
    "review": comments.map((comment) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": comment.name
      },
      "datePublished": comment.date,
      "reviewBody": comment.description,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  };

  return (
    <section id="Kundenstimmen">
      <Script
        id="schema-reviews"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        strategy="afterInteractive"
      />
      <h2 className="aboutText">Was unsere Kunden sagen</h2>
      <section style={{ marginTop: '20px' }}>
        {comments.map((comm, index) => (
          <article key={index} className={classes.comment} style={{ marginBottom: '32px' }} itemScope itemType="https://schema.org/Review">
            <div style={{ display: 'flex', marginBottom: '12px', alignItems: 'center' }}>
              <Image
                src={`https:${comm.images[0]?.fields.file.url}`}
                height={40}
                width={40}
                alt={`${comm.name} - Kundenbewertung`}
                className={classes.avatar}
                loading="lazy"
              />
              <div className={classes.about}>
                <p className={classes.name} itemProp="author">{comm.name}</p>
                <p className={classes.date}>
                  <time itemProp="datePublished" dateTime={comm.date}>{comm.date}</time>
                </p>
              </div>
            </div>
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content="5" />
              <meta itemProp="bestRating" content="5" />
              <Image src="/rate.svg" height={20} width={108} alt="5 Sterne Bewertung" />
            </div>
            <p className={classes.description} itemProp="reviewBody">{comm.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
}