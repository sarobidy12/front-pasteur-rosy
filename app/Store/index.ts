import { configureStore } from "@reduxjs/toolkit";
import { pictureSlice } from "./Picture/slice";
import { bestCkristianSlice } from "./BestCkristian/slice";
import { lifeWithJesusSlice } from "./LifeWithJesus/slice";
import { categorySlice } from "./Category/slice";
import { EventSlice } from "./Event/slice";
import { thinkingPastorSlice } from "./ThinkingPastor/slice";
import { chatSlice } from "./Chat/slice";
import { BiographySlice } from "./Biography/slice";
import { podcastSlice } from "./Podcast/slice";
import { discoverSlice } from "./Discover/slice";
import { teachingSlice } from "./Teaching/slice";
import { UserSlice } from "./User/slice";
import { MessageSlice } from "./Message/slice";

// config the store
const store = configureStore({
  reducer: {
    picture: pictureSlice.reducer,
    bestCkristian: bestCkristianSlice.reducer,
    lifeWithJesus: lifeWithJesusSlice.reducer,
    category: categorySlice.reducer,
    event: EventSlice.reducer,
    thinkingPastor: thinkingPastorSlice.reducer,
    chat: chatSlice.reducer,
    biography: BiographySlice.reducer,
    podcast: podcastSlice.reducer,
    discover: discoverSlice.reducer,
    teaching: teachingSlice.reducer,
    user: UserSlice.reducer,
    message: MessageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
