import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enillumina.com.br";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#sobre`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#servicos`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#depoimentos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contato`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
