import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const ADS_API_KEY = import.meta.env.ADS_API_KEY;
  const LIBRARY_ID = "q7ce2driS9W-SkN3IcOqNA";

  try {
    const params = new URLSearchParams({
      fl: "bibcode,title,pub,year",
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
    
    const publications = data.solr.response.docs.map((doc: any) => ({
      title: Array.isArray(doc.title) ? doc.title[0] : doc.title || doc.bibcode,
      journal: doc.pub && doc.year ? `${doc.pub}, ${doc.year}` : doc.pub || "",
      link: `https://ui.adsabs.harvard.edu/abs/${doc.bibcode}/abstract`
    }));

    return new Response(JSON.stringify(publications), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch publications" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};