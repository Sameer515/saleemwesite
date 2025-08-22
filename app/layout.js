import './globals.css'

export const metadata = {
  title: 'Construcții Profesionale - Compania Ta de Încredere',
  description: 'Companie de construcții cu experiență de peste 15 ani în realizarea proiectelor rezidențiale și comerciale de calitate superioară.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
