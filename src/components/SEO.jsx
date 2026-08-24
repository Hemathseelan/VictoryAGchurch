import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | VICTORY A.G. CHURCH` : "VICTORY A.G. CHURCH, Cuddalore N.T";
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [title, description]);

  return null;
}
