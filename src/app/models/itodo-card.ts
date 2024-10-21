import {CardStatus} from './card-status';

export interface ITodoCard {
  id: string,
  title: string,
  description: string,
  status: CardStatus,
  creator: string,
  worker: string,
  date_creation: Date,
  date_deadline: Date,
}
