import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact title',
  description: 'Página de contacto de la empresa',
  keywords: ['Contact Page', 'Contactos', 'Otra info']
};

export default function ContactPage() {
  return (
    <span className="text-7xl">Contact Page</span>
  )
}