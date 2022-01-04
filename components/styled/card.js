import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2rem;
  padding: 1rem;
  background: white;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;

  a {
      color: #3D59AB;
      margin: 0 0.75rem;
      padding: 2px 1px 0;
      text-decoration none;
  }

  a:hover {
      border-bottom: 1px solid #3D59AB;
  }

  a:focus {
    border-bottom: 1px solid #3D59AB;
  }
  
  .card-title {
    font-size: 1.2rem;
    text-align: center;
  }

  .links {
    text-align: center;
  }

  @media (max-width: 1058px) {
    margin: 0.66rem;
   }

  @media (max-width: 768px) {
   margin: 0.66rem;
  }
`

export default StyledCard
