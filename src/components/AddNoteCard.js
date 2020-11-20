import styled from 'styled-components';

const Container = styled.div({
  height: '25vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed #545454',
  fontSize: '3rem',
  transition: 'all 0.3s ease-in',
  cursor: 'pointer',

  '&:hover': {
    background: '#000',
    color: '#FFF',
    border: '1px dashed #FFF',
  },
});

// Add icons package from ant https://ant.design/components/icon/
// and use some neat icon
export const AddNoteCard = () => <Container>+</Container>;
