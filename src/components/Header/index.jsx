import { Container, Content, Logo, Search, Button, ButtonOut } from "./styles";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>

        <Logo>
          <div className="logo">
            <img src={logo} />
          </div>
        </Logo>

        <div className="nav_menu">
          <Search>
            <label>
              <FiSearch size={24} />
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />
            </label>
          </Search>
        </div>

        <div className="user-menu">
          <Button type="button">
            <BsReceipt size={24} />
            Pedidos(0)
          </Button>
        </div>

        <div className="Logout">
          <ButtonOut type="button">
            <FiLogOut size={24} />
          </ButtonOut>
        </div>

      </Content>
    </Container>
  );
}
