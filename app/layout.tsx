import '../app/ui/global.css';
import Nav from '../app/ui/nav'

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Nav />
      </div>
      <div className="flex-grow p-6 md:overflow-x-auto md:p-12">{children}</div>
    </div>
    </body>
    </html>
  );
}
