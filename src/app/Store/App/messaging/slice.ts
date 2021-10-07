import { createSlice } from "@reduxjs/toolkit";

export type Conversation = {
  id: string,
  name: string,
  image: string,
  previewMsg: string,
  time: string;
}

export type MessagingSlice = {
  conversations: Conversation[];
  isLoadingConversations: boolean;
  currentConversation: Conversation | null;
  conversationSearchboxText: string;
};

export const initialState: MessagingSlice = {
  conversations: [],
  isLoadingConversations: true,
  currentConversation: null,
  conversationSearchboxText: ""
};

const slice = createSlice({
  name: "messaging",
  initialState,
  reducers: {
    setConversations: (state: MessagingSlice, action: any) => {
      state.conversations = action.payload;
    },
    setIsLoadingConversations: (state: MessagingSlice, action: any) => {
      state.isLoadingConversations = action.payload;
    },
    setCurrentConversation: (state: MessagingSlice, action: any) => {
      state.currentConversation = action.payload;
    },
    setConversationSearchboxText: (state: MessagingSlice, action: any) => {
      state.conversationSearchboxText = action.payload;
    },
  },
});

export const {
  setConversations,
  setIsLoadingConversations,
  setCurrentConversation,
  setConversationSearchboxText,
} = slice.actions;

export default slice.reducer;
