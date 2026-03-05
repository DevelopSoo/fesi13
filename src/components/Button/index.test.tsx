import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

test("버튼을 클릭하면 onClick 함수가 호출되는지 확인", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>버튼</Button>);

  const button = screen.getByText("버튼");
  await user.click(button);

  // onClick props에 들어간 함수가 호출되는지 확인
  expect(handleClick).toHaveBeenCalled();
});
