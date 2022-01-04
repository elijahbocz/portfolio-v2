import styled from "styled-components";

const StyledImageRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 6px;
    margin: 0 0.75rem;
  }

  img:hover {
    cursor: pointer;
  }

  .modal-content {
    margin: auto;
  }

  .img-container {
    margin: 0 0.5rem;
  }

  @media (max-width: 768px) {
    display: block;

    img {
      margin: 0.75rem;
    }
  }
`;

export default StyledImageRow;
