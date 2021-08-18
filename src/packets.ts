import { SocketEvent } from "./enums/socket.events";

export interface Packet {
  event: SocketEvent;
  id: string;
}

export interface CheerData {
  bitCount: string;
  cheererName: string;
  logoUrl: string;
}

export interface CheerPacket extends Packet {
  event: SocketEvent.cheer;
  data: CheerData;
}

export interface SpecialUserJoinData {
  username: string;
}

export interface SpecialUserJoinPacket extends Packet {
  event: SocketEvent.specialUserJoin;
  data: SpecialUserJoinData;
}

export interface RaidData {
  raiderCount: number;
  raider: string;
  logoUrl: string;
}

export interface RaidPacket extends Packet {
  event: SocketEvent.raid;
  data: RaidData;
}

export interface SubData {
  logoUrl: string;
  subscriberUsername: string;
  subTier: string;
  message: string;
  months: number;
}

export interface SubPacket extends Packet {
  event: SocketEvent.sub;
  data: SubData;
}

export interface TeamMemberJoinData {
  logoUrl: string;
}

export interface TeamMemberJoinPacket extends Packet {
  event: SocketEvent.teamMemberJoin;
  data: TeamMemberJoinData;
}

export interface DeletedChatMessageData {
  messageId: string;
}

export interface ChatMessageData {
  userId: string;
  username: string;
  displayName: string;
  messageId: string;
  message: string;
  logoUrl: string;
  isMod: boolean;
  isVip: boolean;
  isPartner: boolean;
  isSubscriber: boolean;
  isBroadcaster: boolean;
  isTeamMember: boolean;
  emotes?: {
    [emoteid: string]: string[];
  };
  type: string | undefined;
  id: string | undefined;
  teamMemberIconUrl: string | undefined;
}

export interface DeletedChatMessagePacket extends Packet {
  event: SocketEvent.deleteChatMessage;
  data: DeletedChatMessageData;
}

export interface ChatMessagePacket extends Packet {
  event: SocketEvent.chatMessage;
  data: ChatMessageData;
}

export interface FollowData {
  followerName: string;
  logoUrl: string;
  followerUserId: string;
}

export interface FollowPacket extends Packet {
  event: SocketEvent.follow;
  data: FollowData;
}

export interface TimerData {
  minutes: number;
  description: string;
}

export interface TimerPacket extends Packet {
  event: SocketEvent.timer;
  data: TimerData;
}

export interface BanUserData {
  userId: string;
}

export interface BanUserPacket extends Packet {
  event: SocketEvent.banUser;
  data: BanUserData;
}

export interface TimeoutUserData {
  userId: string;
}

export interface TimeoutUserPacket extends Packet {
  event: SocketEvent.timeoutUser;
  data: TimeoutUserData;
}

export type WebSocketPacket =
  | BanUserPacket
  | ChatMessagePacket
  | CheerPacket
  | DeletedChatMessagePacket
  | FollowPacket
  | RaidPacket
  | SpecialUserJoinPacket
  | SubPacket
  | TeamMemberJoinPacket
  | TimeoutUserPacket
  | TimerPacket;
