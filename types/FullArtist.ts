import SimpleArtist from '@/types/SimpleArtist';
import Album from '@/types/Album';

export default interface FullArtist extends SimpleArtist {
  genres?: string[];
  albums?: Album;
}
