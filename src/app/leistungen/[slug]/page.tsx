import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@mantine/core";

import ServiceHero from "@/app/Service Components/ServiceHero/ServiceHero";
import SubServices from "@/app/Service Components/SubServices/SubServices";
import ServiceGallery from "@/app/Service Components/ServiceGallery/ServiceGallery";
import ContactForm from "@/app/MainPage Components/ContactForm/ContactForm";
import Contacts from "@/app/MainPage Components/Contacts/Contacts";
import WhatsAppButton from "@/app/MainPage Components/WhatsAppButton";

import { contentfulClient } from "@/app/lib/contentfulClient";
import type { ContentfulServiceFields } from "@/app/types/contentful";

export const revalidate = 5;

function assetUrl(a?: ContentfulServiceFields["heroImage"] | ContentfulServiceFields["galleryImage"]) {
  const raw = a?.fields?.file?.url;
  if (!raw) return undefined;
  return raw.startsWith("//") ? `https:${raw}` : raw;
}

async function fetchAllServices() {
  const res = await contentfulClient.getEntries<{ fields: ContentfulServiceFields; contentTypeId: string }>({
    content_type: "service",
    limit: 100,
    select: ["fields"],
  });
  return res.items.map(i => i.fields);
}

async function fetchServiceBySlug(slug: string) {
  const all = await fetchAllServices();
  return all.find(s => s.slug === slug);
}

export async function generateStaticParams() {
  const all = await fetchAllServices();
  return all.map(s => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchServiceBySlug(slug);

  if (!data) {
    return {
      title: "Страница не найдена | Nistor Gartenbau",
      robots: { index: false, follow: false },
    };
  }

  const title = `${data.title} | Nistor Gartenbau Augsburg`;
  const description = (String(data.mainDescription) || "").replace(/\s+/g, " ").slice(0, 160);
  const url = `https://www.nistor-gartenbau.de/leistungen/${slug}`;
  const og = assetUrl(data.heroImage) ?? assetUrl(data.galleryImage);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: og ? [{ url: og, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: og ? [og] : [],
    },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const data = await fetchServiceBySlug(slug);
  if (!data) notFound();

  return (
    <main>
      <ServiceHero service={data} />
      <Container size={960} className="mainContainer">
        <SubServices service={data} />
        <ServiceGallery service={data} />
        <p className="aboutText" style={{ marginBottom: 24 }}>Kontakt</p>
        <ContactForm />
        <Contacts />
      </Container>
      <WhatsAppButton />
    </main>
  );
}
