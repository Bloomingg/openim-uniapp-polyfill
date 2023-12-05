import {
  api,
  asyncApi,
  getVideoCover,
  pickFile,
  subscribe,
  unsubscribe,
  uuid,
} from "./lib";
import { IMEvents, IMMethods } from "./types/enum";
export * from "./types/entity";
export * from "./types/enum";

export default {
  nomalApi: api,
  IMMethods,
  IMEvents,
  asyncApi,
  subscribe,
  unsubscribe,
  uuid,
  pickFile,
  getVideoCover,
};
