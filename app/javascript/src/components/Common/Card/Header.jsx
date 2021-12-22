import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui/v2";

const Header = ({ label, children }) => (
  <div className="flex w-full mb-2">
    <h5 className="neeto-ui-text-gray-800 mr-auto">{label}</h5>
    {children}
  </div>
);

const Menu = ({ children }) => (
  <Dropdown
    buttonStyle="link"
    icon={MenuVertical}
    onClose={function noRefCheck() {}}
    position="bottom-end"
  >
    {children}
  </Dropdown>
);

const MenuItem = ({ label, ...otherProps }) => <li {...otherProps}>{label}</li>;

Header.Menu = Menu;
Header.MenuItem = MenuItem;

export default Header;
