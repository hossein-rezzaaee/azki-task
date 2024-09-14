import type { Metadata } from 'next';
import 'globals.css';
import ThemeRegistry from '_theme/themeRegistry';
import ReactQueryProvider from '_providers/reactQueryProvider';
import ContextProvider from '_providers/contextProvider';

export const metadata: Metadata = {
  title: 'AZKI TASK',
  description: 'azki code challenge task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <ThemeRegistry>
          <ReactQueryProvider>
            <ContextProvider>{children}</ContextProvider>
          </ReactQueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
