import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly age: string;
  readonly phone: string;
}