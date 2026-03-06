import { render } from "@testing-library/react";
import SnapshotButton from ".";

test("Button 컴포넌트 스냅샷 테스트", () => {
  const { container } = render(<SnapshotButton>클릭하세요</SnapshotButton>);
  expect(container).toMatchSnapshot();
});

test("비활성화 상태", () => {
  const { container } = render(<SnapshotButton disabled>클릭</SnapshotButton>);
  expect(container).toMatchSnapshot();
});

test("로딩 상태", () => {
  const { container } = render(<SnapshotButton isLoading>클릭</SnapshotButton>);
  expect(container).toMatchSnapshot();
});
