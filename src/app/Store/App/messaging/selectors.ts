import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../MainStore";
import { initialState } from "./slice";

const messagingSlice = (state: RootState) => state.messaging || initialState;

export const selectConversations = createSelector(
  [messagingSlice],
  (state) => state.conversations
);

export const selectIsLoadingConversations = createSelector(
  [messagingSlice],
  (state) => state.isLoadingConversations
);

export const selectCurrentConversation = createSelector(
  [messagingSlice],
  (state) => state.currentConversation
);

export const selectConversationSearchboxText = createSelector(
  [messagingSlice],
  (state) => state.conversationSearchboxText
);