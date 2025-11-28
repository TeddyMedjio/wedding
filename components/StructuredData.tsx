export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Mariage de Noe et Sandrine",
    "description": "Célébration du mariage de Noe et Sandrine à Barcelone",
    "startDate": "2025-09-27T17:00:00+02:00",
    "endDate": "2025-09-27T23:59:00+02:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Castell de Sant Marçal",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barcelone",
        "addressCountry": "ES"
      }
    },
    "image": [
      "https://noesandrine.com/church.png",
      "https://noesandrine.com/maries.jpg"
    ],
    "organizer": {
      "@type": "Person",
      "name": "Noe & Sandrine"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
