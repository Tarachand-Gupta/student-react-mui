import { createSlice } from "@reduxjs/toolkit";

export type Conversation = {
  id: string,
  name: string,
  image: string,
}

export type MessagingSlice = {
  conversations: Conversation[];
  isLoadingConversations: boolean;
  currentConversation: Conversation | null;
};

export const initialState: MessagingSlice = {
  conversations: [],
  isLoadingConversations: true,
  currentConversation: null
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
  },
});

export const {
  setConversations,
  setIsLoadingConversations,
  setCurrentConversation,
} = slice.actions;

export default slice.reducer;
