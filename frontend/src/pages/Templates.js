// dependencies
import { useState } from "react";
import styled from "styled-components";

// images
import MockupFront from '../images/texturaFrente.png';

// components
import ManageTemplateModal from "../components/ManageTemplateModal";
import NewTemplateModal from "../components/NewTemplateModal";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
`;

const TemplateCard = styled.div`
  background-color: #fff;
  width: 100%;
  height: 300px;
  padding: 1rem;
  text-align: center;

  img {
    height: 200px;
  }
`;

const Templates = () => {
  const [manageTemplateModal, setManageTemplateModal] = useState(false);

  return (
    <section>
      <div className="mb-5">
        <h4>Modelos</h4>
        <button className="btn btn-primary rounded-0 shadow my-3">Novo modelo</button>
      </div>
      <GridContainer>
        {
          new Array(12).fill(0).map(() => (
            <TemplateCard className="card-shadow">
              <img src={MockupFront} />
              <h6 className="mt-3" >Nome modelo</h6>
              <small className="text-muted">Clique para modificar este modelo</small>
            </TemplateCard>
          ))
        }
      </GridContainer>
      <ManageTemplateModal />
      <NewTemplateModal />
    </section>
  )
};

export default Templates;