import './App.css';
import { Container, Grid } from '@nextui-org/react'
import Header from './components/common/header'
import Card from './components/ScriptCard/index'

function App() {
  return (
      <Container>
        <Header />
        <Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs={4}>
              <Card />
            </Grid>
            <Grid xs={4}>
              <Card />
            </Grid>
            <Grid xs={4}>
              <Card />
            </Grid>
          </Grid.Container>
          
        </Container>
      </Container>
  );
}

export default App;
