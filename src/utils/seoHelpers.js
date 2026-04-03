/**
 * SEO Helper Functions
 * Manages meta tags and page titles for SEO optimization
 */

export const setPageMeta = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogTitle,
  ogDescription,
  ogType = "website",
}) => {
  // Set page title
  if (title) {
    document.title = title;
  }

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  if (description) {
    metaDescription.content = description;
  }

  // Update or create keywords meta
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
  }

  // Update canonical tag
  if (canonical) {
    let canLink = document.querySelector('link[rel="canonical"]');
    if (!canLink) {
      canLink = document.createElement("link");
      canLink.rel = "canonical";
      document.head.appendChild(canLink);
    }
    canLink.href = canonical;
  }

  // Update Open Graph tags
  if (ogTitle) {
    updateMetaTag("property", "og:title", ogTitle);
  }

  if (ogDescription) {
    updateMetaTag("property", "og:description", ogDescription);
  }

  if (ogImage) {
    updateMetaTag("property", "og:image", ogImage);
  }

  if (ogType) {
    updateMetaTag("property", "og:type", ogType);
  }

  // Update Twitter tags
  if (ogTitle) {
    updateMetaTag("property", "twitter:title", ogTitle);
  }

  if (ogDescription) {
    updateMetaTag("property", "twitter:description", ogDescription);
  }

  // Scroll to top for better UX
  window.scrollTo(0, 0);
};

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (attribute, value, content) => {
  let tag = document.querySelector(`meta[${attribute}="${value}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

/**
 * Add structured data (JSON-LD) to the page
 */
export const addStructuredData = (schema) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Common SEO configurations for each page
 */
export const SEO_CONFIG = {
  home: {
    title: "Ambika Precision Works - CNC Machining & Precision Engineering",
    description:
      "Ambika Precision Works offers precision CNC machining services for Oil & Gas, Aerospace, Defence, and Mining. ISO 9001:2015 certified with 15+ years of expertise.",
    keywords:
      "ambika precision works, CNC machining, precision engineering, metal machining, industrial components",
    canonical: "https://ambikaprecisionworks.in/",
    ogType: "website",
  },
  about: {
    title: "About Ambika Precision Works - ISO 9001:2015 Certified",
    description:
      "Learn about Ambika Precision Works - a leading precision engineering company with ISO 9001:2015 certification, 15+ years of experience, and expert team of engineers.",
    keywords:
      "ambika precision works, about us, ISO certified, quality engineering, experienced team",
    canonical: "https://ambikaprecisionworks.in/about",
  },
  services: {
    title: "CNC Machining & Precision Engineering Services - Ambika Precision Works",
    description:
      "Expert CNC turning, VMC machining, production machining, and quality inspection services. High-precision components for Oil & Gas, Aerospace, Defence, and Mining industries.",
    keywords:
      "CNC machining, CNC turning, VMC machining, precision engineering, quality inspection, ambika",
    canonical: "https://ambikaprecisionworks.in/services",
  },
  products: {
    title: "Products & Industries - Ambika Precision Works",
    description:
      "Precision components for Oil & Gas, Valves & Fittings, Defence, Aerospace, Mining, and General Engineering. 250+ projects completed with Ambika Precision Works.",
    keywords:
      "precision components, industrial parts, oil and gas components, aerospace parts, defence manufacturing, ambika precision",
    canonical: "https://ambikaprecisionworks.in/product",
  },
  contact: {
    title: "Contact Ambika Precision Works - Get a Quote Today",
    description:
      "Get in touch with Ambika Precision Works for precision engineering services, quotes, and inquiries. Contact us today for your project requirements.",
    keywords: "contact ambika precision works, get quote, precision engineering services",
    canonical: "https://ambikaprecisionworks.in/contact",
  },
};

/**
 * Schema.org structured data templates
 */
export const SCHEMA_TEMPLATES = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ambika Precision Works",
    url: "https://ambikaprecisionworks.in",
    logo: "https://ambikaprecisionworks.in/ambika_final_logo.jpeg",
    description:
      "Leading CNC machining and precision engineering services provider",
    sameAs: [
      "https://www.linkedin.com/company/ambika-precision-works",
      "https://www.facebook.com/ambikaprecisionworks",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@ambikaprecisionworks.com",
      telephone: "+91-XXXXXXXXXX",
    },
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ambika Precision Works",
    url: "https://ambikaprecisionworks.in",
    logo: "https://ambikaprecisionworks.in/ambika_final_logo.jpeg",
    description: "Precision engineering and CNC machining services",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@ambikaprecisionworks.com",
    },
  },
  breadcrumb: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
