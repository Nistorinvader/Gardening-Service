import { Container } from "@mantine/core";
import classes from './LegalPages.module.css';
import Head from 'next/head';

const IMPRESSUM_CONTENT = `
    <h1>Impressum</h1>
    <p class="legal-subtitle">Angaben gemäß § 5 TMG</p>
    
    <div class="contact-info">
        <h2>Kontakt</h2>
        <p>
            <strong>Vadim Nistor</strong><br>
            Hauptstraße 19<br>
            86863 Langenneufnach<br>
            Deutschland
        </p>
        
        <p>
            <strong>Telefon:</strong> +49 172 5711590<br>
            <strong>E-Mail:</strong> <a href="mailto:vadimnistor84@gmail.com">vadimnistor84@gmail.com</a>
        </p>
    </div>

    <div class="legal-details">
        <h2>Rechtliche Informationen</h2>
        <p>
            <strong>Umsatzsteuer-Identifikationsnummer:</strong><br>
            gemäß §27a Umsatzsteuergesetz: 102/255/32627
        </p>
        
        <p>
            <strong>Berufsbezeichnung:</strong> Gärtnermeister<br>
            <strong>Zuständige Aufsichtsbehörde:</strong> Landratsamt Augsburg
        </p>
    </div>

    <div class="disclaimer-section">
        <h2>Haftungsausschluss</h2>
        
        <h3>Haftung für Inhalte</h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
        
        <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <h3>Urheberrecht</h3>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>

        <h3>Widerspruch Werbe-Mails</h3>
        <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
    </div>

    <div class="generator-info">
        <p><small>Impressum erstellt mit <a href="https://impressum-generator.de" target="_blank" rel="noopener noreferrer">Impressum-Generator.de</a></small></p>
    </div>
`;

export default function Impressum() {
    return (
        <>
            <Head>
                <title>Impressum - Nistor Gartenbau</title>
                <meta 
                    name="description" 
                    content="Impressum von Nistor Gartenbau. Kontaktdaten, rechtliche Informationen und Haftungsausschluss gemäß TMG." 
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.nistor-gartenbau.de/impressum" />
            </Head>

            <Container size="md" py="xl">
                <article className={classes.legalContent}>
                    <div 
                        dangerouslySetInnerHTML={{ __html: IMPRESSUM_CONTENT }}
                        className={classes.content}
                    />
                </article>
            </Container>
        </>
    );
}