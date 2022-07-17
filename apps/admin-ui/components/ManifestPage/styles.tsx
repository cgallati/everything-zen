import styled from "styled-components"

export const List = styled.ul`
  padding: 0.5rem 0 0 0;
  margin: 0 2rem;
`

export const Title = styled.h1`
  font: normal normal normal 24px/41px Title Wave;
  letter-spacing: 2.4px;
  color: #13293a;
  text-align: center;
  padding: 2rem 0 0 0;
`

export const HR = styled.div`
  width: 75%;
  max-width: 350px;
  height: 0;
  margin: auto;
  background: #00263a;
  border-bottom: 0.25px solid #00263a;
  opacity: 0.5;
`

export const ReservationCard = styled.li`
  display: block;
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  list-style-type: none;
  margin: 2rem auto;
  font: normal normal 300 11px/13px Source Sans Pro;
  letter-spacing: 2.12px;
  color: #00263a;
  max-width: 400px;
`

export const CardHeader = styled.div`
  display: flex;
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: #00263a;
  color: white;
  height: 5rem;
  letter-spacing: 3.2px;
  h2 {
    font: normal normal 300 16px/27px Source Sans Pro;
  }
`

export const ContactInfo = styled.div`
  padding: 1.25rem 1.5rem;
  h2 {
    margin: 0.25rem 0;
    font: normal normal 400 16px/27px Source Sans Pro;
  }
`

export const PartyInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  div {
    flex-grow: 1;
  }
  padding: 0 1rem 1.25rem 1.5rem;
  h3 {
    margin: 0.25rem 0;
    font: normal normal 400 16px/27px Source Sans Pro;
    letter-spacing: 3px;
    span {
      font-weight: 300;
    }
  }
  h3:first-child {
    letter-spacing: 3.38px;
  }
`

export const CancelButton = styled.button`
  background: none;
  border: none;
  margin-bottom: 0.5rem;
  font: normal normal 400 13px/13px Source Sans Pro;
  letter-spacing: 2px;
  color: #00263a;
  cursor: pointer;
`

export const CancellationText = styled.h2`
  color: #7e0000;
  font-family: "Stencilia-A", sans-serif;
  font-size: 10px;
  line-height: 15px;
`
export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
    border: "none",
    boxShadow: "inset 0 0 2px #00000029, 0 0 2px #00000066",
  },
}

export const ModalContent = styled.div`
  min-width: 13rem;
  h2 {
    margin: 0 auto 1rem;
    font: normal normal normal 14px/14px Source Sans Pro;
    letter-spacing: 2px;
    color: #00263a;
    text-align: center;
    width: 100%;
  }

  button {
    background: white;
    height: 2rem;
    width: 6rem;
    border: none;
    border-radius: 3px;
    box-shadow: inset 0 0 2px #00000029, 0 0 2px #00000066;
    font: normal normal normal 14px/14px Source Sans Pro;
    letter-spacing: 2.3px;
    color: #00263a;
    text-align: center;
    cursor: pointer;
    :active {
      color: white;
      background: #00263a;
    }
  }

  button:last-of-type {
    float: right;
  }
`
