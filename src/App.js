import { Deck, Slide, Text, Heading, OrderedList, ListItem, Link, Table, TableRow, TableCell, UnorderedList } from 'spectacle';
import './App.css';
const theme = {
  colors: {
    primary: '#fff',
    secondary: '#f5f5f5',
    tertiary: '#705697AA'
  },
  fonts: 'Quicksand'
}

function App() {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Introduction to Cypress</Heading>
        <Table className="table-new">
          <TableRow>

            <TableCell flex="1" width="50%" height="100%">
              <div className="img"></div>
            </TableCell>
            <TableCell flex="1" width="50%" height="100%">

              <Text fontSize="h5">Priyanka Shete</Text>
              <Text fontSize="h6">Senior software developer</Text>
              <Link href="http://piyukore06.netlify.app/">priyanka.codes</Link>
            </TableCell>
          </TableRow>
        </Table>
      </Slide>

      <Slide>
        <Heading>
          Testing Pyramid vs Testing Trophy
          <div className="example-image-4">
          </div>
        </Heading>

      </Slide>

      <Slide>
        <Heading>End to End tests (E2E)</Heading>
        <OrderedList>
          <ListItem>Most important and realistic results</ListItem>
          <ListItem>Testing in browser inclusive whole world</ListItem>
          <ListItem>Selenium</ListItem>
          <UnorderedList>
            <ListItem>Common</ListItem>
            <ListItem>Fragile with modern dynamic webapps</ListItem>
          </UnorderedList>
        </OrderedList>
      </Slide>

      <Slide>
        <Heading>Biggest Pain Points in E2E testing</Heading>
        <OrderedList>
          <ListItem>Asynchronity and external dependencies</ListItem>
          <UnorderedList>
            <ListItem>Selenium works outside the browser</ListItem>
            <ListItem>Need to build explicit waits in tests 🤦🏻‍♀️</ListItem>
          </UnorderedList>
          <ListItem>Flakiness</ListItem>
          <ListItem>Harder setup</ListItem>
        </OrderedList>
      </Slide>
      <Slide>
        <Heading>Enter Cypress</Heading>
        <div className="example-logo">
        </div>
      </Slide>


      <Slide>
        <Heading>Cypress: built for modern Javascript Webapps</Heading>
        <OrderedList>
          <ListItem>Focus on Developer Experience</ListItem>
          <UnorderedList>
            <ListItem>Easy Setup - Quick Start</ListItem>
            <ListItem>Asynchronity problem</ListItem>
            <ListItem>Awesome debugging</ListItem>
            <ListItem>Conveniet Mocking</ListItem>
            <ListItem>Amazing Docs</ListItem>
          </UnorderedList>
        </OrderedList>
      </Slide>
      <Slide>
        <Heading>Cypress: Win-win</Heading>
        <UnorderedList>
          <ListItem>Batteries Included</ListItem>
          <OrderedList>
            <ListItem>Testing Framework (Mocha)</ListItem>
            <ListItem>Assertion Library (Chai)</ListItem>
            <ListItem>Launcher / Test Runner</ListItem>
            <ListItem>Browser</ListItem>
            <ListItem>Proxy (Request Stubbing)</ListItem>
          </OrderedList>
          <ListItem>CI-Friendly</ListItem>

        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Simple Test</Heading>
        <div className="example-image">
        </div>
      </Slide>

      <Slide>
        <Heading>Synchronisation of Asynchronous commands</Heading>
        <div className="example-image-2">
        </div>
      </Slide>

      <Slide>
        <Heading>Waiting for Requests</Heading>
        <div className="example-image-3">
        </div>
      </Slide>

      <Slide>
        <Heading>Mocking</Heading>
        <UnorderedList>
          <ListItem>cy.server(); cy.route('GET', '**url', mock);</ListItem>
          <ListItem>cy.intercept('GET', '**url', mock);</ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Debugging ♥️</Heading>
        <UnorderedList>
          <ListItem>Dev tools from Browser</ListItem>
          <ListItem>Time traveling (Before / After Snapshots)</ListItem>
          <ListItem>cy.get('selector').debug()</ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Unlimited Guddies</Heading>
        <UnorderedList>
          <ListItem>Screenshots</ListItem>
          <ListItem>Videos</ListItem>
          <ListItem>Plugin System</ListItem>
          <ListItem>Reporting with Dashboard</ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Advanced Usage</Heading>
        <UnorderedList>
          <ListItem>Cypress Movie</ListItem>
          <ListItem>Cypress Book</ListItem>
          <ListItem>Visual Regression</ListItem>
          <ListItem>Coverage</ListItem>
          <ListItem>A11y Testing</ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>The Downsides</Heading>
        <UnorderedList>
          <ListItem>Only Chromium Engines (Chrome, Electron, Edge, Firefox)</ListItem>
          <ListItem>One origin, One browser, One tab only</ListItem>
          <ListItem>File upload is hacky</ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Thank you 🙏🏻</Heading>
      </Slide>
    </Deck>
  );
}

export default App;
