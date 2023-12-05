import { BaseCallBackData } from "../types/entity";
import { IMEvents, IMMethods } from "../types/enum";

// @ts-ignore
export const api = uni.requireNativePlugin("Tuoyun-OpenIMSDK");
// @ts-ignore
export const nativePicker = uni.requireNativePlugin(
  "Tuoyun-OpenIMSDK-OUIFilePicker"
);
// @ts-ignore
const globalEvent = uni.requireNativePlugin("globalEvent");

const nomalMethods = [
  IMMethods.InitSDK,
  IMMethods.GetLoginStatus,
  IMMethods.GetLoginUserID,
  IMMethods.GetAtAllTag,
  IMMethods.CreateAdvancedTextMessage,
  IMMethods.CreateTextAtMessage,
  IMMethods.CreateTextMessage,
  IMMethods.CreateLocationMessage,
  IMMethods.CreateCustomMessage,
  IMMethods.CreateQuoteMessage,
  IMMethods.CreateAdvancedQuoteMessage,
  IMMethods.CreateCardMessage,
  IMMethods.CreateImageMessage,
  IMMethods.CreateImageMessageFromFullPath,
  IMMethods.CreateImageMessageByURL,
  IMMethods.CreateSoundMessage,
  IMMethods.CreateSoundMessageFromFullPath,
  IMMethods.CreateSoundMessageByURL,
  IMMethods.CreateVideoMessage,
  IMMethods.CreateVideoMessageFromFullPath,
  IMMethods.CreateVideoMessageByURL,
  IMMethods.CreateFileMessage,
  IMMethods.CreateFileMessageFromFullPath,
  IMMethods.CreateFileMessageByURL,
  IMMethods.CreateMergerMessage,
  IMMethods.CreateFaceMessage,
  IMMethods.CreateForwardMessage,
  IMMethods.GetConversationIDBySessionType,
  IMMethods.GetSdkVersion,
];

export const asyncApi = (key: IMMethods, ...args: any[]) =>
  new Promise((resolve, reject) => {
    if (nomalMethods.includes(key)) {
      let res = api[key](...args);
      try {
        res = JSON.parse(res);
      } catch (error) {}
      resolve(res);
    } else {
      api[key](...args, (res: BaseCallBackData) => {
        if (res.errCode === 0) {
          try {
            res.data = JSON.parse(res.data as string);
          } catch (e) {}
          resolve(res);
        } else {
          reject(res);
        }
      });
    }
  });

export const pickFile = () =>
  new Promise<string>((resolve, reject) => {
    nativePicker.pick((path: string) => {
      if (path) {
        resolve(path);
      } else {
        reject();
      }
    });
  });

export const getVideoCover = (videoPath: string) =>
  new Promise((resolve, reject) => {
    nativePicker.getVideoAttributes(videoPath, (res: { path: string }) => {
      if (res.path) {
        resolve(res);
      } else {
        reject();
      }
    });
  });

export const subscribe = (
  evnetName: IMEvents,
  handler: (data: Record<string, unknown>) => void
) => {
  globalEvent.addEventListener(evnetName, handler);
};

export const unsubscribe = (evnetName: IMEvents, handler: () => void) => {
  globalEvent.removeEventListener(evnetName, handler);
};

export const uuid = () =>
  (Math.random() * 36).toString(36).slice(2) + new Date().getTime().toString();
