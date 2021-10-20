import Image from "next/image"
import styles from './Track.module.css'

export default function Track({ track }) {
  //  console.log(track.album);
  // console.log(track.album.images);
  return (
    <li key={track.id}>
     {track.artists.map(artist => artist.name)} - {track.album.name}
     <Image 
      src={track.album.images[1].url} 
      height={track.album.images[1].height} 
      width={track.album.images[1].width}
      alt={track.name + ' album cover'} 
      layout="responsive" />
      <a href={track.album.external_urls.spotify} target="_blank">Click to open album.</a>
    </li>
  )
}
