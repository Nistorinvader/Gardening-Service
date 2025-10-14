import { Container } from "@mantine/core";
import classes from './LegalPages.module.css';
import Head from 'next/head';

// Выносим контент в отдельную константу для лучшей читаемости
const DATENSCHUTZ_CONTENT = `
    <h1>Datenschutzerklärung</h1>
    
    <h2 id="m716">Präambel</h2>
    <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.&nbsp;B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").</p>
    <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>

    <h2 id="m3">Verantwortlicher</h2>
    <p><strong>Vadim Nistor</strong><br>
    Hauptstraße 19<br>
    86863 Langenneufnach<br>
    Tel.: +49 172 5711590<br>
    E-Mail: <a href="mailto:vadimnistor84@gmail.com">vadimnistor84@gmail.com</a><br>
    Steuernummer: 102/255/32627</p>

    <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
    <h3>Arten der verarbeiteten Daten</h3>
    <ul>
        <li>Bestandsdaten</li>
        <li>Zahlungsdaten</li>
        <li>Kontaktdaten</li>
        <li>Inhaltsdaten</li>
        <li>Vertragsdaten</li>
        <li>Nutzungsdaten</li>
        <li>Meta-, Kommunikations- und Verfahrensdaten</li>
    </ul>

    <h3>Kategorien betroffener Personen</h3>
    <ul>
        <li>Leistungsempfänger und Auftraggeber</li>
        <li>Interessenten</li>
        <li>Kommunikationspartner</li>
        <li>Nutzer</li>
        <li>Geschäfts- und Vertragspartner</li>
    </ul>

    <h3>Zwecke der Verarbeitung</h3>
    <ul>
        <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten</li>
        <li>Kommunikation</li>
        <li>Reichweitenmessung</li>
        <li>Büro- und Organisationsverfahren</li>
        <li>Feedback</li>
        <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
        <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren</li>
    </ul>

    <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>
    <p><strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong></p>
    <ul>
        <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
        <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Personen erfolgen.</li>
        <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig.</li>
    </ul>

    <h2 id="m10">Rechte der betroffenen Personen</h2>
    <p>Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu:</p>
    <ul>
        <li><strong>Auskunftsrecht:</strong> Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten.</li>
        <li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht auf Berichtigung unrichtiger personenbezogener Daten.</li>
        <li><strong>Recht auf Löschung:</strong> Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten.</li>
        <li><strong>Recht auf Einschränkung der Verarbeitung:</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.</li>
        <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
    </ul>

    <h2 id="m317">Geschäftliche Leistungen</h2>
    <p>Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf die Kommunikation mit den Vertragspartnern.</p>

    <h2 id="m134">Einsatz von Cookies</h2>
    <p>Wir verwenden Cookies gemäß den gesetzlichen Vorschriften, um unsere Webseite nutzerfreundlich zu gestalten und bestimmte Funktionen zu ermöglichen. Sie können die Verwendung von Cookies in Ihren Browsereinstellungen kontrollieren.</p>

    <h2 id="m182">Kontakt- und Anfrageverwaltung</h2>
    <p>Bei der Kontaktaufnahme mit uns werden Ihre Angaben verarbeitet, soweit dies zur Beantwortung Ihrer Anfrage erforderlich ist.</p>

    <h2 id="m263">Webanalyse, Monitoring und Optimierung</h2>
    <p>Wir verwenden Google Analytics zur Analyse der Nutzung unserer Webseite. Ihre IP-Adresse wird anonymisiert, und Sie können der Verarbeitung widersprechen.</p>

    <h2 id="m136">Präsenzen in sozialen Netzwerken</h2>
    <p>Wir unterhalten Onlinepräsenzen in sozialen Netzwerken, um mit Nutzern zu kommunizieren und Informationen anzubieten.</p>

    <p><em>Stand: ${new Date().getFullYear()}</em></p>
`;

export default function DatenschutzPage() {
    return (
        <>
            <Head>
                <title>Datenschutzerklärung - Nistor Gartenbau</title>
                <meta 
                    name="description" 
                    content="Datenschutzerklärung von Nistor Gartenbau. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO." 
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.nistor-gartenbau.de/datenschutz" />
            </Head>

            <Container size="md" py="xl">
                <article className={classes.legalContent}>
                    <header>
                        <h1>Datenschutzerklärung</h1>
                        <p className={classes.lastUpdated}>
                            Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
                        </p>
                    </header>
                    
                    <div 
                        dangerouslySetInnerHTML={{ __html: DATENSCHUTZ_CONTENT }}
                        className={classes.content}
                    />
                    
                    <footer className={classes.legalFooter}>
                        <p>
                            <small>
                                Erstellt mit Datenschutz-Generator.de von Dr. Thomas Schwenke
                            </small>
                        </p>
                    </footer>
                </article>
            </Container>
        </>
    );
}