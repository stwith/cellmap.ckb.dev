import { Document } from 'mongoose'

export interface Live extends Document {
  readonly cid: string;
  readonly size: string;
  readonly type: string;
  readonly lock: {
    code: string;
    args: string;
  }
}