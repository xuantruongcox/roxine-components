/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";

import Button from "./components/button";
import IcoBox from "./components/ico-box";
import Photography from "./components/photography";
import Grid from "./components/grid";


function App() {
  return (
    <div className="App">
      {/* BUTTONS */}
      <section sx={{ variant: "section" }}>
        <Container>
          <h1>BUTTON STYLES</h1>
          <Button type='buttons.primary'>Primary</Button>
          &nbsp; &nbsp;
          <Button type='buttons.highlight'>HIGHLIGHT</Button>
          &nbsp; &nbsp;
          <Button type='buttons.facebook'>FACEBOOK</Button>
          &nbsp; &nbsp;
          <Button type='buttons.google'>GOOGLE</Button>
        </Container>
      </section>

      {/* CARDS */}
      <section>
        <Container>
          <h1>CARD STYLES</h1>
        </Container>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          '@media only screen and (min-width: 768px)': {
            flexDirection: 'row'
          }
        }}>
          {/* IcoBox */}
          <IcoBox>
            {/* BOX HEADER */}
            <IcoBox.Header>
              <IcoBox.Header.Icon name='custom-icon-pen-tool' />
              <IcoBox.Header.Name>PIXEL PERFECT</IcoBox.Header.Name>
            </IcoBox.Header>
            {/* BOX BODY */}
            <IcoBox.Body>
              <IcoBox.Body.Summary>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet
              </IcoBox.Body.Summary>
              <IcoBox.Body.Link>
                LEARN MORE
              </IcoBox.Body.Link>
            </IcoBox.Body>
          </IcoBox>
          &nbsp; &nbsp;
          {/* Photography */}
          <Photography src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80' />
        </Container>
      </section>

      {/* GRID SYSTEM */}
      <section sx={{ variant: 'section' }}>
        <Container>
          <Grid>
            <Grid.Column className='col-12 col-md-1'>col_1</Grid.Column>
            <Grid.Column className='col-12 col-md-2'>col_2</Grid.Column>
            <Grid.Column className='col-12 col-md-9'>col_9</Grid.Column>

            <Grid.Column className='col-12 col-md-4'>col_4</Grid.Column>
            <Grid.Column className='col-12 col-md-2'>col_2</Grid.Column>
            <Grid.Column className='col-12 col-md-6'>col_6</Grid.Column>

            <Grid.Column className='col-12 col-md-7'>col_7</Grid.Column>
            <Grid.Column className='col-12 col-md-3'>col_3</Grid.Column>
            <Grid.Column className='col-12 col-md-2'>col_2</Grid.Column>

            <Grid.Column className='col-12 col-md-8'>col_8</Grid.Column>
            <Grid.Column className='col-12 col-md-4'>col_4</Grid.Column>

            <Grid.Column className='col-12 col-md-10'>col_10</Grid.Column>
            <Grid.Column className='col-12 col-md-2'>col_2</Grid.Column>

            <Grid.Column className='col-12 col-md-11'>col_11</Grid.Column>
            <Grid.Column className='col-12 col-md-1'>col_1</Grid.Column>

            <Grid.Column className='col-12 col-md-12'>col_12</Grid.Column>



          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default App;
