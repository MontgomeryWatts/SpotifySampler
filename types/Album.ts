import Image from '@/types/Image';

export default interface Album {
  _id: string;
  name: string;
  uri: string;
  image?: Image;
}
