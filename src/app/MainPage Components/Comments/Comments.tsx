import classes from './Comments.module.css';
import Image from 'next/image';
import { contentfulClient } from "@/app/lib/contentfulClient";
import { CommentsType } from "@/app/types/contentful";
import { notFound } from 'next/navigation';

export const revalidate = 5;

export default async function Comments() {
  const commentsRes = await contentfulClient.getEntries({
    content_type: 'comments',
    limit: 3
  });

  if (!commentsRes || !commentsRes.items.length) notFound();
  const comments = commentsRes.items.map(item => item.fields as CommentsType);

  return (
    <section id="Kundenstimmen">
      <p className="aboutText">Was unsere Kunden sagen</p>
      <section style={{ marginTop: '20px' }}>
        {comments.map((comm, index) => (
          <div key={index} className={classes.comment} style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', marginBottom: '12px', alignItems: 'center' }}>
              <Image
                src={`https:${comm.images[0]?.fields.file.url}`}
                height={40}
                width={40}
                alt={comm.name}
                className={classes.avatar}
              />
              <div className={classes.about}>
                <p className={classes.name}>{comm.name}</p>
                <p className={classes.date}>{comm.date}</p>
              </div>
            </div>
            <Image src="/rate.svg" height={20} width={108} alt="Rating" />
            <p className={classes.description}>{comm.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
