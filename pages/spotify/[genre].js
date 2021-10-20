import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'

import Track from '../../components/Track'

import styles from '../../styles/Genres.module.css'

export default function SpotifyGenre({genre, tracks}) {

  return (
    <Layout home>
      <Head>
        <title>Spotify | { siteTitle }</title>
      </Head>
      <main>
        <h1>Spotify stuff</h1>
        <h2>Genre: { genre }</h2>
        <ul className={styles.grid}>
        {tracks.map(track => <Track key={track.id} track={track} />)}
        </ul>
      </main> 
    </Layout>
  )
}

export async function getStaticPaths() {
    const data = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", 
    {
      headers:{
        Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
      }
    }).then(response => response.json());
  
    // console.log(data);

    const genrePaths = data.genres.map( genre => { return { params: { genre } } });

    return {
        paths: genrePaths,
        fallback: false
    }
}

export async function getStaticProps({params}) {

    const data = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${params.genre}`, 
    {
        headers:{
        Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
        }
    }).then(response => response.json());
  
    // console.log(data)

  return {
    props: {
      genre: params.genre,
      tracks: data.tracks
    }
  }
}