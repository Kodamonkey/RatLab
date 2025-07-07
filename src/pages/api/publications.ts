import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const ADS_API_KEY = import.meta.env.ADS_API_KEY;
  const LIBRARY_ID = "q7ce2driS9W-SkN3IcOqNA";

  // Función para formatear fechas de ADS
  function formatADSDate(dateString: string): string {
    if (!dateString) return "";
    
    // Si la fecha contiene "00" como día, extraer solo año y mes
    if (dateString.includes("-00")) {
      const parts = dateString.split("-");
      if (parts.length >= 2) {
        const year = parts[0];
        const month = parts[1];
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const monthIndex = parseInt(month) - 1;
        if (monthIndex >= 0 && monthIndex < 12) {
          return `${monthNames[monthIndex]} ${year}`;
        }
        return year;
      }
    }
    
    // Si ya está en formato "Month Year", devolverlo tal como está
    return dateString;
  }

  // Función para limpiar texto de abstract
  function cleanAbstractFromADS(text: string): string {
    if (!text) return "";
    
    return text
      .replace(/\$[^$]*\$/g, "") // Quitar fórmulas LaTeX entre $...$
      .replace(/\\[a-zA-Z]+\{[^}]*\}/g, "") // Quitar comandos LaTeX
      .replace(/[\\${}]/g, "") // Quitar caracteres especiales restantes
      .replace(/\s+/g, " ") // Normalizar espacios
      .trim();
  }

  // Si no hay API key, usar datos de ejemplo mejorados con más detalles
  if (!ADS_API_KEY) {
    const samplePublications = [
      {
        title: "Observing radio transients with Phased ALMA: Pulses from the Galactic Centre magnetar",
        authors: ["Vera-Casanova, J.", "Cruces, M.", "Liu, K.", "Wongphechauxsorn, J.", "Braga, C. A.", "Kramer, M.", "Tome, P.", "Limaye, P.", "Espinoza-Dupouy, M. C.", "Rodriguez, L."],
        journal: "Astronomy & Astrophysics",
        year: 2025,
        bibcode: "2025arXiv250406234V",
        abstract: "First millimetre-wave detection of pulses from the Galactic Centre magnetar PSR J1745-2900 using phased ALMA observations.",
        fullAbstract: "Radio transients, such as pulsars and Fast Radio Bursts (FRBs), are primarily detected at centimetre radio wavelengths, where higher luminosities are found. However, observations of sources in dense environments are heavily affected by propagation effects which may hinder a detection. Millimetre wave observations bypass this complication but require the largest radio telescopes to compensate for the lower flux densities. When used in phased mode, the ALMA radio telescope provides an equivalent dish size of 84m, being the most sensitive instrument at mm/sub mm. With its high time resolution it offers a unique opportunity to study radio transients in an unexplored window. We study the Galactic Centre magnetar, PSR J1745-2900, as a laboratory for magnetars in complex magneto-turbulent environments and to link with FRBs.",
        doi: "10.48550/arXiv.2504.06234",
        arxiv: "arXiv:2504.06234",
        keywords: ["High Energy Astrophysical Phenomena"],
        publicationDate: "April 2025",
        comments: "9 pages, 5 figures, 4 tables, submitted to A&A. Comments are welcome",
        graphics: [
          {
            url: "/images/publications/sample-plot1.svg",
            caption: "Figure 1: Time-frequency analysis of magnetar pulses observed with ALMA"
          },
          {
            url: "/images/publications/sample-plot2.svg", 
            caption: "Figure 2: Energy distribution of detected pulses"
          }
        ],
        link: "https://ui.adsabs.harvard.edu/abs/2025arXiv250406234V/abstract"
      },
      {
        title: "DRAFTS: A Deep Learning Pipeline for Fast Radio Burst Classification",
        authors: ["Braga, C.", "Cruces, M.", "Bermedo, N."],
        journal: "Monthly Notices of the Royal Astronomical Society",
        year: 2024,
        bibcode: "2024MNRAS.515.2847B",
        abstract: "Novel deep learning pipeline for automated FRB classification achieving 95% accuracy in distinguishing genuine signals from interference using FAST telescope data.",
        fullAbstract: "The DRAFTS pipeline represents a novel approach to automated FRB classification, incorporating deep neural networks trained on extensive datasets from FAST telescope observations. Our method achieves 95% accuracy in distinguishing genuine FRB signals from radio frequency interference and terrestrial sources. We present results from processing over 10,000 hours of FAST L-band observations, leading to the discovery of 847 new FRB candidates.",
        doi: "10.1093/mnras/stac2847",
        arxiv: "arXiv:2209.12847",
        keywords: ["methods: data analysis", "radio continuum: transients", "techniques: image processing"],
        publicationDate: "November 2024", 
        comments: "15 pages, 8 figures, 3 tables, accepted for publication in MNRAS",
        graphics: [
          {
            url: "/images/publications/drafts-architecture.svg",
            caption: "Figure 3: DRAFTS neural network architecture and training pipeline"
          }
        ],
        link: "https://ui.adsabs.harvard.edu/abs/2024MNRAS.515.2847B/abstract"
      },
      {
        title: "Multi-frequency Analysis of FRB Populations using ALMA and FAST Data",
        authors: ["Vera-Casanova, J.", "Cruces, M.", "Pizarro, I."],
        journal: "Astronomy & Astrophysics",
        year: 2023,
        bibcode: "2023A&A...678..45V",
        abstract: "Multi-telescope study using ALMA and FAST data to characterize different FRB populations and their emission mechanisms.",
        fullAbstract: "Cross-telescope analysis reveals distinct morphological patterns in FRB populations, enabling improved characterization of progenitor systems and emission mechanisms. We analyze 156 FRBs detected across L-band (FAST) and mm-wave (ALMA Band 3) frequencies, finding systematic differences in pulse width, spectral index, and polarization properties that suggest multiple progenitor classes.",
        doi: "10.1051/0004-6361/202346745",
        arxiv: "arXiv:2310.12456", 
        keywords: ["radio continuum: galaxies", "methods: observational", "stars: magnetars"],
        publicationDate: "October 2023",
        comments: "12 pages, 6 figures, 2 tables, published in A&A",
        graphics: [
          {
            url: "/images/publications/frb-populations.svg",
            caption: "Figure 4: Morphological classification of FRB populations across frequencies"
          }
        ],
        link: "https://ui.adsabs.harvard.edu/abs/2023A&A...678..45V/abstract"
      },
      {
        title: "Unsupervised Clustering of Fast Radio Burst Morphologies", 
        authors: ["Bermedo, N.", "Vera-Casanova, J.", "Cruces, M."],
        journal: "The Astrophysical Journal Letters",
        year: 2023,
        bibcode: "2023ApJ...945L..12B",
        abstract: "Machine learning approach identifying 7 distinct FRB morphological classes using unsupervised clustering on FAST data.",
        fullAbstract: "Novel clustering algorithms reveal previously unidentified morphological classes in FRB signals, providing new insights into the diversity of Fast Radio Burst phenomena. Using unsupervised machine learning on 2,847 FRB detections from FAST, we identify 7 distinct morphological clusters with characteristic spectro-temporal signatures that correlate with host galaxy properties.",
        doi: "10.3847/2041-8213/acb12f",
        arxiv: "arXiv:2212.09876",
        keywords: ["methods: data analysis", "methods: statistical", "radio continuum: transients"], 
        publicationDate: "February 2023",
        comments: "6 pages, 4 figures, 1 table, published in ApJL",
        graphics: [
          {
            url: "/images/publications/clustering-results.svg",
            caption: "Figure 5: Unsupervised clustering results showing 7 distinct FRB morphological classes"
          }
        ],
        link: "https://ui.adsabs.harvard.edu/abs/2023ApJ...945L..12B/abstract"
      },
      {
        title: "Domain Transfer Learning for Radio Transient Detection Across Telescopes",
        authors: ["Pizarro, I.", "Braga, C.", "Cruces, M."],
        journal: "Publications of the Astronomical Society of the Pacific",
        year: 2023,
        bibcode: "2023PASP..135..084503P",
        abstract: "Domain adaptation methods enabling efficient transfer of FRB detection models across different telescope systems with minimal retraining.",
        fullAbstract: "We demonstrate successful domain adaptation techniques for transferring FRB detection models between different radio telescope systems, significantly reducing training time for new instruments. Our approach achieves 92% of the performance of telescope-specific models while requiring only 10% of the training data, enabling rapid deployment of detection systems across the global radio astronomy network.",
        doi: "10.1088/1538-3873/acd503",
        arxiv: "arXiv:2305.14789",
        keywords: ["methods: data analysis", "techniques: miscellaneous", "instrumentation: miscellaneous"],
        publicationDate: "August 2023", 
        comments: "10 pages, 7 figures, 2 tables, published in PASP",
        graphics: [
          {
            url: "/images/publications/domain-transfer.svg", 
            caption: "Figure 6: Domain transfer learning performance across different telescope systems"
          }
        ],
        link: "https://ui.adsabs.harvard.edu/abs/2023PASP..135..084503P/abstract"
      }
    ];

    return new Response(JSON.stringify(samplePublications), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Si hay API key, usar la API de ADS con más campos
  try {
    const params = new URLSearchParams({
      fl: "bibcode,title,author,pub,year,abstract,citation_count,doi,arxiv_class,keyword,comment,pubdate",
      rows: "50",
      sort: "date desc",
    });

    const res = await fetch(
      `https://api.adsabs.harvard.edu/v1/biblib/libraries/${LIBRARY_ID}?${params}`,
      {
        headers: {
          Authorization: `Bearer ${ADS_API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    
    const publications = data.solr.response.docs.map((doc: any) => {
      const abstractText = Array.isArray(doc.abstract) ? doc.abstract[0] : doc.abstract ?? "";
      
      return {
        title: Array.isArray(doc.title) ? doc.title[0] : doc.title ?? doc.bibcode,
        authors: doc.author ?? [],
        journal: doc.pub ?? "",
        year: doc.year ?? "",
        bibcode: doc.bibcode ?? "",
        abstract: cleanAbstractFromADS(abstractText).substring(0, 250) + (abstractText.length > 250 ? "..." : ""),
        fullAbstract: cleanAbstractFromADS(abstractText),
        doi: doc.doi ? doc.doi[0] : "",
        arxiv: doc.arxiv_class ? `arXiv:${doc.bibcode?.replace('arXiv:', '')}` : "",
        keywords: doc.keyword ?? [],
        publicationDate: formatADSDate(doc.pubdate ?? ""),
        comments: doc.comment ?? "",
        citationCount: undefined, // Quitamos las citas
        graphics: [], // ADS doesn't provide graphics directly, would need separate API call
        link: `https://ui.adsabs.harvard.edu/abs/${doc.bibcode}/abstract`
      };
    });

    return new Response(JSON.stringify(publications), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Registrar el error para debugging
    console.error("Error fetching publications from ADS:", error);
    
    // Determinar mensaje de error más específico
    let errorMessage = "Failed to fetch publications";
    if (error instanceof Error) {
      errorMessage = `Failed to fetch publications: ${error.message}`;
    }
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};