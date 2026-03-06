import { setupServer } from "msw/node";
import { postsHandlers } from "./handlers/posts";

// posts 모킹된 놈들을 가짜 서버에 넣겠다.
export const server = setupServer(...postsHandlers);
