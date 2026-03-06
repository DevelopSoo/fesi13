// toBe, toEqual
// toBeInTheDocument -> 문서 상에 존재하니?
// 매 테스트 마다 실행할 수 있게 설정 파일을 만든 것
import { server } from "@/mocks/server";
import "@testing-library/jest-dom";

// 모든 테스트 전에 서버를 키겠다
beforeAll(() => server.listen());

// msw에 데이터를 추가하거나 삭제하거나 ....
// 매 테스트마다 영향을 주지 않아야 한다.
afterEach(() => server.resetHandlers());

// 모든 테스트 후에 서버를 끄겠다.
afterAll(() => server.close());
