import { Inter } from 'next/font/google';
import './globals.css';

const kodeMono = Inter({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-kode-mono',
});

export const metadata = {
  title: 'Retro CRT UI',
  description: 'A retro-style UI with old-school vibes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kodeMono.variable}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{
        backgroundImage: 'url(/public/scene2-d14f31-compressed-da7d54.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {children}
      </body>
    </html>
  );
}
