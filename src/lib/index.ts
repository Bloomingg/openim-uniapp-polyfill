import { CbEvents, OpenIMSDK } from "open-im-sdk";
import { BaseCallBackData } from "../types/entity";
import { IMEvents, IMMethods } from "../types/enum";

type Platform = "app" | "mp-weixin" | "web"| "mp-alipay";

// @ts-ignore
let platform: Platform = uni.getSystemInfoSync().uniPlatform;
const isApp = platform === "app";
const isWeb = platform === "web" || platform === "mp-weixin"|| platform === "mp-alipay";

export const api = isApp
  ? // @ts-ignore
    uni.requireNativePlugin("Tuoyun-OpenIMSDK")
  : new OpenIMSDK();

export const nativePicker = isApp
  ? // @ts-ignore
    uni.requireNativePlugin("Tuoyun-OpenIMSDK-OUIFilePicker")
  : null;
// @ts-ignore
const globalEvent = isApp ? uni.requireNativePlugin("globalEvent") : null;

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

const webLog = (res: any) => {
  // console.log("🚀 ~ polyfill-web-log:", res);
};

const webErrLog = (key: string, params: any, err: any) => {
  console.error("🛠️ ~ polyfill-web-ErrLog:", key, "---", params, "---", err);
};

export const asyncApi = (key: IMMethods, ...args: any[]) => {
  if (isApp) {
    return new Promise((resolve, reject) => {
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
  }

  if (isWeb) {
    return new Promise((resolve, reject) => {
      let params = Array.from(args);
      params.shift();
      if (nomalMethods.includes(key)) {
        api[key](...params)
          .then((res: any) => {
            webLog(res);
            if (res.errCode === 0) {
              try {
                res.data = JSON.parse(res.data);
              } catch (e) {}
              resolve(res.data);
            }
            reject(res);
          })
          .catch((err: any) => {
            webErrLog(key, params, err);
            reject(err);
          });
      } else {
        api[key](...params)
          .then((res: any) => {
            webLog(res);
            if (res.errCode === 0) {
              try {
                res.data = JSON.parse(res.data);
              } catch (e) {}
              resolve(res);
            }
            reject(res);
          })
          .catch((err: any) => {
            webErrLog(key, params, err);
            reject(err);
          });
      }
    });
  }

  return Promise.reject("not support");
};

export const pickFile = () => {
  if (isApp) {
    return new Promise<string>((resolve, reject) => {
      nativePicker.pick((path: string) => {
        if (path) {
          resolve(path);
        } else {
          reject();
        }
      });
    });
  }
};

export const getVideoCover = (videoPath: string) => {
  if (isApp) {
    return new Promise((resolve, reject) => {
      nativePicker.getVideoAttributes(videoPath, (res: { path: string }) => {
        if (res.path) {
          resolve(res);
        } else {
          reject();
        }
      });
    });
  }
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const subscribe = (
  evnetName: IMEvents | CbEvents,
  handler: (data: Record<string, unknown>) => void
) => {
  if (isApp) {
    globalEvent.addEventListener(evnetName, handler);
  }

  if (isWeb) {
    api.on(capitalizeFirstLetter(evnetName), handler);
  }
};

export const unsubscribe = (
  evnetName: IMEvents | CbEvents,
  handler: () => void
) => {
  if (isApp) {
    globalEvent.removeEventListener(evnetName, handler);
  }

  if (isWeb) {
    api.off(capitalizeFirstLetter(evnetName), handler);
  }
};

export const uuid = () =>
  (Math.random() * 36).toString(36).slice(2) + new Date().getTime().toString();
