export const metadata = {
  title: 'AssignAid',  
  description: 'Where your learnig activites get easier',  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </head>
      <body>{children}</body>
    </html>
  )
}
