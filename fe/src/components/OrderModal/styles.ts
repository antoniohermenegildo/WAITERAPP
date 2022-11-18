import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #ffffff;
  width: 480px;
  border-radius: 0.5rem;
  padding: 2rem;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;

    button{
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container{
    margin-top: 2rem;

    small{
      font-size: 0.9rem;
      opacity: 0.8;
    }

    div{
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong{
    font-weight: 500;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .order-items{
    margin-top: 1rem;

    .item{
      display: flex;

      & + .item{
        margin-top: 1rem;
      }
    
      img{
        border-radius: 0.5rem;
      }

      .quantity{
        font-size: 0.9rem;
        color: #666666;
        display: block;
        min-width: 20px;
        margin-left: 0.75rem;
      }

      .product-details{
        margin-left: 4px;

        strong{
          display: block;
          margin-bottom: 4px;
        }

        span{
          font-size: 0.8rem;
          color: #666666;
        }
      }
    }
  }

  .total{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    
    span{
      font-weight: 500;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  .primary{
    background: #333333;
    border-radius: 3rem;
    border: 0;
    color: #ffffff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    padding: 14px 24px;
    color: #D73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 12px;
  }
`;
