import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faShirt } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const Aside = styled.aside`
  background-color: #242423;
  height: 100%;
  width: 300px;
`;

const Avatar = styled.div`
  background: gray;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  border-radius: 100%;
`;

const NavList = styled.ul`
  padding: 0;
  list-style: none;

  li {
    display: flex;
    color: #fff;
    padding: 1rem 2rem;
    cursor: pointer;

    :hover {
      background-color: #1a1a19;
    }
  }
`;

const Sidebar = () => {
  
  return (
    <Aside>
      <div style={{ margin: '60px 0' }}>
        <Avatar /> 
        <h5 className="text-white text-center mt-3">Geefi</h5>
      </div>
      <nav>
        <NavList>
          {
            [
              {
                title: 'Pedidos de orçamento',
                icon: faDollarSign
              },
              {
                title: 'Modelos',
                icon: faShirt
              }
            ]
            .map(option => (
              <li>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '20px' }}>
                  <FontAwesomeIcon icon={option.icon} color="#fff" style={{ margin: '0 auto' }} />
                </div>
                <span className="ms-3">{option.title}</span>
              </li>
            ))
          }
        </NavList>
      </nav>
    </Aside>
  );
};

export default Sidebar;