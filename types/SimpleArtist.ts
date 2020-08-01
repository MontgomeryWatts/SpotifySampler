import Image from '@/types/Image';

export default interface SimpleArtist {
  _id: string;
  name: string;
  uri: string;
  images?: Image[];
}
