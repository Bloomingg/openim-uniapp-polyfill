# OpenIM SDK for uni-app polyfill

> [中文文档](https://docs.openim.io/zh-Hans/sdks/quickstart/uniapp)

## About us

Open im includes instant messaging and real-time audio and video server and client SDK, which realizes important features such as high performance, lightweight and easy expansion. By integrating open im components and privatizing the deployment server, developers can quickly integrate instant messaging and real-time audio and video interaction into their own applications free of charge, and ensure the security and privacy of business data.[Click here](https://docs.openim.io) to visit our official website to learn more about Open IM.



## Getting Started

### How To Install

- To use the SDK in uniapp(android、ios)

  ```bash
  npm install openim-uniapp-polyfill @openim/client-sdk
  ```

  Then within your application,you can import it.

  ```typescript
  import IMSDK from 'openim-uniapp-polyfill'

  IMSDK.asyncApi(IMSDK.IMMethods.login, IMSDK.uuid(), userID, token)
  .then(() => {
    // 登录成功
  })
  .catch(({ errCode, errMsg }) => {
    // 登录失败
  });
  ```