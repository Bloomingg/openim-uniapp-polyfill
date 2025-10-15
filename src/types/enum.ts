export enum MessageReceiveOptType {
  Normal = 0,
  NotReceive = 1,
  NotNotify = 2,
}

export enum AddFriendPermission {
  AddFriendAllowed = 0,
  AddFriendAllowedNoReview = 1,
  AddFriendDenied = 2,
}

export enum AllowType {
  Allowed = 0,
  NotAllowed = 1,
}

export enum GroupType {
  Group = 2,
  WorkingGroup = 2,
}

export enum GroupJoinSource {
  Invitation = 2,
  Search = 3,
  QrCode = 4,
}

export enum GroupMemberRole {
  Normal = 20,
  Admin = 60,
  Owner = 100,
}

export enum GroupVerificationType {
  ApplyNeedInviteNot = 0,
  AllNeed = 1,
  AllNot = 2,
}

export enum MessageStatus {
  Sending = 1,
  Succeed = 2,
  Failed = 3,
}

export enum Platform {
  iOS = 1,
  Android = 2,
  Windows = 3,
  MacOSX = 4,
  Web = 5,
  Linux = 7,
  AndroidPad = 8,
  iPad = 9,
}

export enum LogLevel {
  Verbose = 6,
  Debug = 5,
  Info = 4,
  Warn = 3,
  Error = 2,
  Fatal = 1,
  Panic = 0,
}

export enum ApplicationHandleResult {
  Unprocessed = 0,
  Agree = 1,
  Reject = -1,
}

export enum MessageType {
  TextMessage = 101,
  PictureMessage = 102,
  VoiceMessage = 103,
  VideoMessage = 104,
  FileMessage = 105,
  AtTextMessage = 106,
  MergeMessage = 107,
  CardMessage = 108,
  LocationMessage = 109,
  CustomMessage = 110,
  TypingMessage = 113,
  QuoteMessage = 114,
  FaceMessage = 115,
  MarkdownMessage = 118,
  StreamMessage = 143,
  FriendAdded = 1201,
  OANotification = 1400,
  GroupCreated = 1501,
  GroupInfoUpdated = 1502,
  MemberQuit = 1504,
  GroupOwnerTransferred = 1507,
  MemberKicked = 1508,
  MemberInvited = 1509,
  MemberEnter = 1510,
  GroupDismissed = 1511,
  GroupMemberMuted = 1512,
  GroupMemberCancelMuted = 1513,
  GroupMuted = 1514,
  GroupCancelMuted = 1515,
  GroupAnnouncementUpdated = 1519,
  GroupNameUpdated = 1520,
  BurnMessageChange = 1701,
  RevokeMessage = 2101,

  MsgPinned = 2400,
}

export enum SessionType {
  Single = 1,
  Group = 3,
  WorkingGroup = 3,
  Notification = 4,
}

export enum GroupStatus {
  Normal = 0,
  Banned = 1,
  Dismissed = 2,
  Muted = 3,
}

export enum GroupAtType {
  AtNormal = 0,
  AtMe = 1,
  AtAll = 2,
  AtAllAtMe = 3,
  AtGroupNotice = 4,
}

export enum GroupMemberFilter {
  All = 0,
  Owner = 1,
  Admin = 2,
  Normal = 3,
  AdminAndNormal = 4,
  AdminAndOwner = 5,
}

export enum Relationship {
  isBlack = 0,
  isFriend = 1,
}

export enum LoginStatus {
  Logout = 1,
  Logging = 2,
  Logged = 3,
}

export enum OnlineState {
  Online = 1,
  Offline = 0,
}

export enum GroupMessageReaderFilter {
  Read = 0,
  UnRead = 1,
}

export enum ViewType {
  History = 0,
  Search = 1,
}

export enum IMMethods {
  InitSDK = "initSDK",
  UnInitSDK = "unInitSDK",
  UploadLogs = "uploadLogs",
  Login = "login",
  Logout = "logout",
  SetAppBackgroundStatus = "setAppBackgroundStatus",
  NetworkStatusChanged = "networkStatusChanged",
  GetLoginStatus = "getLoginStatus",
  GetLoginUserID = "getLoginUserID",
  GetUsersInfo = "getUsersInfo",
  SetSelfInfo = "setSelfInfo",
  GetSelfUserInfo = "getSelfUserInfo",
  GetAllConversationList = "getAllConversationList",
  GetConversationListSplit = "getConversationListSplit",
  GetOneConversation = "getOneConversation",
  GetMultipleConversation = "getMultipleConversation",
  SetGlobalRecvMessageOpt = "setGlobalRecvMessageOpt",
  HideConversation = "hideConversation",
  GetConversationRecvMessageOpt = "getConversationRecvMessageOpt",
  DeleteAllConversationFromLocal = "deleteAllConversationFromLocal",
  SetConversationDraft = "setConversationDraft",
  ResetConversationGroupAtType = "resetConversationGroupAtType",
  PinConversation = "pinConversation",
  SetConversationPrivateChat = "setConversationPrivateChat",
  SetConversationBurnDuration = "setConversationBurnDuration",
  SetConversationRecvMessageOpt = "setConversationRecvMessageOpt",
  GetTotalUnreadMsgCount = "getTotalUnreadMsgCount",
  GetAtAllTag = "getAtAllTag",
  CreateAdvancedTextMessage = "createAdvancedTextMessage",
  CreateTextAtMessage = "createTextAtMessage",
  CreateTextMessage = "createTextMessage",
  CreateLocationMessage = "createLocationMessage",
  CreateCustomMessage = "createCustomMessage",
  CreateQuoteMessage = "createQuoteMessage",
  CreateAdvancedQuoteMessage = "createAdvancedQuoteMessage",
  CreateCardMessage = "createCardMessage",
  CreateImageMessage = "createImageMessage",
  CreateImageMessageFromFullPath = "createImageMessageFromFullPath",
  CreateImageMessageByURL = "createImageMessageByURL",
  CreateSoundMessage = "createSoundMessage",
  CreateSoundMessageFromFullPath = "createSoundMessageFromFullPath",
  CreateSoundMessageByURL = "createSoundMessageByURL",
  CreateVideoMessage = "createVideoMessage",
  CreateVideoMessageFromFullPath = "createVideoMessageFromFullPath",
  CreateVideoMessageByURL = "createVideoMessageByURL",
  CreateFileMessage = "createFileMessage",
  CreateFileMessageFromFullPath = "createFileMessageFromFullPath",
  CreateFileMessageByURL = "createFileMessageByURL",
  CreateMergerMessage = "createMergerMessage",
  CreateFaceMessage = "createFaceMessage",
  CreateForwardMessage = "createForwardMessage",
  GetConversationIDBySessionType = "getConversationIDBySessionType",
  SendMessage = "sendMessage",
  SendMessageNotOss = "sendMessageNotOss",
  FindMessageList = "findMessageList",
  GetAdvancedHistoryMessageList = "getAdvancedHistoryMessageList",
  GetAdvancedHistoryMessageListReverse = "getAdvancedHistoryMessageListReverse",
  RevokeMessage = "revokeMessage",
  TypingStatusUpdate = "typingStatusUpdate",
  MarkConversationMessageAsRead = "markConversationMessageAsRead",
  MarkMessagesAsReadByMsgID = "markMessagesAsReadByMsgID",
  DeleteMessageFromLocalStorage = "deleteMessageFromLocalStorage",
  DeleteMessage = "deleteMessage",
  DeleteConversationFromLocal = "deleteConversationFromLocal",
  DeleteAllMsgFromLocalAndSvr = "deleteAllMsgFromLocalAndSvr",
  DeleteAllMsgFromLocal = "deleteAllMsgFromLocal",
  ClearConversationAndDeleteAllMsg = "clearConversationAndDeleteAllMsg",
  DeleteConversationAndDeleteAllMsg = "deleteConversationAndDeleteAllMsg",
  InsertSingleMessageToLocalStorage = "insertSingleMessageToLocalStorage",
  InsertGroupMessageToLocalStorage = "insertGroupMessageToLocalStorage",
  SearchLocalMessages = "searchLocalMessages",
  SetMessageLocalEx = "setMessageLocalEx",
  GetSpecifiedFriendsInfo = "getSpecifiedFriendsInfo",
  GetFriendList = "getFriendList",
  GetFriendListPage = "getFriendListPage",
  SearchFriends = "searchFriends",
  CheckFriend = "checkFriend",
  AddFriend = "addFriend",
  SetFriendRemark = "setFriendRemark",
  DeleteFriend = "deleteFriend",
  GetFriendApplicationListAsRecipient = "getFriendApplicationListAsRecipient",
  GetFriendApplicationListAsApplicant = "getFriendApplicationListAsApplicant",
  AcceptFriendApplication = "acceptFriendApplication",
  RefuseFriendApplication = "refuseFriendApplication",
  AddBlack = "addBlack",
  GetBlackList = "getBlackList",
  RemoveBlack = "removeBlack",
  CreateGroup = "createGroup",
  JoinGroup = "joinGroup",
  QuitGroup = "quitGroup",
  DismissGroup = "dismissGroup",
  ChangeGroupMute = "changeGroupMute",
  ChangeGroupMemberMute = "changeGroupMemberMute",
  SetGroupMemberRoleLevel = "setGroupMemberRoleLevel",
  SetGroupMemberInfo = "setGroupMemberInfo",
  GetJoinedGroupList = "getJoinedGroupList",
  GetJoinedGroupListPage = "getJoinedGroupListPage",
  GetSpecifiedGroupsInfo = "getSpecifiedGroupsInfo",
  SearchGroups = "searchGroups",
  SetGroupInfo = "setGroupInfo",
  SetGroupVerification = "setGroupVerification",
  SetGroupLookMemberInfo = "setGroupLookMemberInfo",
  SetGroupApplyMemberFriend = "setGroupApplyMemberFriend",
  GetGroupMemberList = "getGroupMemberList",
  GetGroupMemberOwnerAndAdmin = "getGroupMemberOwnerAndAdmin",
  GetGroupMemberListByJoinTimeFilter = "getGroupMemberListByJoinTimeFilter",
  GetSpecifiedGroupMembersInfo = "getSpecifiedGroupMembersInfo",
  KickGroupMember = "kickGroupMember",
  TransferGroupOwner = "transferGroupOwner",
  InviteUserToGroup = "inviteUserToGroup",
  GetGroupApplicationListAsRecipient = "getGroupApplicationListAsRecipient",
  GetGroupApplicationListAsApplicant = "getGroupApplicationListAsApplicant",
  AcceptGroupApplication = "acceptGroupApplication",
  RefuseGroupApplication = "refuseGroupApplication",
  SetGroupMemberNickname = "setGroupMemberNickname",
  SearchGroupMembers = "searchGroupMembers",
  IsJoinGroup = "isJoinGroup",
  UpdateFcmToken = "updateFcmToken",
  SetAppBadge = "setAppBadge",
  GetSdkVersion = "getSdkVersion",
  UploadFile = "uploadFile",
  SetConversationIsMsgDestruct = "setConversationIsMsgDestruct",
  SetConversationMsgDestructTime = "setConversationMsgDestructTime",
  SubscribeUsersStatus = "subscribeUsersStatus",
  UnsubscribeUsersStatus = "unsubscribeUsersStatus",
}

export enum IMEvents {
  OnConnectFailed = "onConnectFailed",
  OnConnectSuccess = "onConnectSuccess",
  OnConnecting = "onConnecting",
  OnKickedOffline = "onKickedOffline",
  OnUserTokenInvalid = "onUserTokenInvalid",
  OnSelfInfoUpdated = "onSelfInfoUpdated",
  OnUserTokenExpired = "onUserTokenExpired",
  OnMsgDeleted = "onMsgDeleted",
  OnNewRecvMessageRevoked = "onNewRecvMessageRevoked",
  OnRecvC2CReadReceipt = "onRecvC2CReadReceipt",
  OnRecvGroupReadReceipt = "onRecvGroupReadReceipt",
  OnRecvNewMessage = "onRecvNewMessage",
  OnRecvNewMessages = "onRecvNewMessages",
  OnRecvOfflineNewMessage = "onRecvOfflineNewMessage",
  OnRecvOfflineNewMessages = "onRecvOfflineNewMessages",
  OnConversationChanged = "onConversationChanged",
  OnNewConversation = "onNewConversation",
  OnSyncServerFailed = "onSyncServerFailed",
  OnSyncServerFinish = "onSyncServerFinish",
  OnSyncServerStart = "onSyncServerStart",
  OnSyncServerProgress = "onSyncServerProgress",
  OnTotalUnreadMessageCountChanged = "onTotalUnreadMessageCountChanged",
  SendMessageFailed = "sendMessageFailed",
  OnProgress = "onProgress",
  SendMessageSuccess = "sendMessageSuccess",
  UploadFileProgress = "uploadFileProgress",
  OnBlackAdded = "onBlackAdded",
  OnBlackDeleted = "onBlackDeleted",
  OnFriendApplicationAccepted = "onFriendApplicationAccepted",
  OnFriendApplicationAdded = "onFriendApplicationAdded",
  OnFriendApplicationDeleted = "onFriendApplicationDeleted",
  OnFriendApplicationRejected = "onFriendApplicationRejected",
  OnFriendInfoChanged = "onFriendInfoChanged",
  OnFriendAdded = "onFriendAdded",
  OnFriendDeleted = "onFriendDeleted",
  OnJoinedGroupAdded = "onJoinedGroupAdded",
  OnJoinedGroupDeleted = "onJoinedGroupDeleted",
  OnGroupMemberAdded = "onGroupMemberAdded",
  OnGroupMemberDeleted = "onGroupMemberDeleted",
  OnGroupApplicationAdded = "onGroupApplicationAdded",
  OnGroupApplicationDeleted = "onGroupApplicationDeleted",
  OnGroupInfoChanged = "onGroupInfoChanged",
  OnGroupMemberInfoChanged = "onGroupMemberInfoChanged",
  OnGroupApplicationAccepted = "onGroupApplicationAccepted",
  OnGroupApplicationRejected = "onGroupApplicationRejected",
  OnGroupDismissed = "onGroupDismissed",
  OnRecvCustomBusinessMessage = "onRecvCustomBusinessMessage",
  OnUserStatusChanged = "onUserStatusChanged",
}
