"use client"; // 빼먹지 말기

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";

export default function Dropdown() {
  return (
    <Menu>
      <MenuButton className="data-active:bg-blue-200">My account</MenuButton>
      <MenuItems anchor="right">
        <MenuItem disabled>
          <a className="block data-focus:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
