import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Category = {
  id: string;
  name: string;
} & MicroCMSDate;

export type Article = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  categories: Category[];
  publishedAt?: string;
} & MicroCMSDate;
