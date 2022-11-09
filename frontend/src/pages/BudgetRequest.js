// dependencies
import { useEffect, useRef, useState, forwardRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

// images
import MockupFront from '../images/texturaFrente.png';
import MockupBack from '../images/texturaCostas.png';

const GridContainer = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: min-content;
  gap: 1rem;
`;

const BudgetCard = styled.article`
  display: flex;
  background-color: #fff;
  height: 200px;
  width: 100%;
`;

const Img = styled.img`
  height: 100%;
`;

const BudgetRequest = (props) => {
  const [budgets, setBudgets] = useState(new Array(20).fill(0));
  const loadingRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
  
      if (target.isIntersecting) {
        setBudgets(old => [...old, ...new Array(10).fill(0)]);
        console.log('add')
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });

    if (loadingRef.current)
      observer.observe(loadingRef.current);
  }, []);

  return (
    <section>
      <h4 className="mb-5">Pedidos de orçamento</h4>
      <GridContainer>
        {
          budgets.map((budget, i) => (
            <BudgetCard key={i} className="card-shadow">
              <div className="d-flex justify-content-between bg-light h-100 w-100 p-2">
                <Img src={MockupFront} alt="" />
                <Img src={MockupBack} alt="" />
              </div>
              <div className="d-flex flex-column h-100 w-100 p-2">
                <div style={{ flex: 1 }}>
                  <strong>Cliente:&nbsp;</strong>
                  Geefi<br/>
                  <strong>Telefone:&nbsp;</strong>
                  67 9 8451-0819<br/>
                  <strong>Email:&nbsp;</strong>
                  geefi@gmail.com
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="border-0 py-2 px-3 rounded-pill text-white"
                    style={{ 
                      backgroundColor: '#23c660'
                    }}
                  >
                    <FontAwesomeIcon icon={brands('whatsapp')} color="#fff" size="xl" />
                    <span className="ms-2">Entrar em contato</span>
                  </button>
                </div>
              </div>
            </BudgetCard>
          ))
        }
        
      </GridContainer>
      <div ref={loadingRef} className='d-flex justify-content-center mt-4'>
        <div className="spinner-border mx-auto" />
      </div>
    </section>
      
  );
};

export default BudgetRequest;