import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mariage Noe & Sandrine',
    short_name: 'Noe & Sandrine',
    description: 'Rejoignez-nous pour célébrer notre mariage le 27 septembre 2025 à Barcelone',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
