import {DateTime} from 'luxon';

export type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
  program: string;
  concertDates: DateTime[];
  sponsors: string[];
}