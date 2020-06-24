import Image from '@/types/Image';

export default interface Artist {
  _id: string;
  name: string;
  uri: string;
  genres?: string[];
  images?: Image[];
}
