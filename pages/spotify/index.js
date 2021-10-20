import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'

export default function Spotify({ genres }) {
  // console.log(genres)
  return (
    <Layout home>
      <Head>
        <title>Spotify | { siteTitle }</title>
      </Head>
      <main>
        <h1>Spotify stuff</h1>
        <h2>Genre List</h2>
        <ul>
          {genres.map(genre => 
          <li key={genre}>
            <Link href={`/spotify/${genre}`}>
              <a>{genre}</a>
            </Link>
          </li>)}
        </ul>
      </main> 
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", 
  {
    headers:{
      Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
    }
  }).then(response => response.json());

  // console.log(data);

  return {
    props: {
      genres: data.genres
    },
    revalidate: 60
  }
}