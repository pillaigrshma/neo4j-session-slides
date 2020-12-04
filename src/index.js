import React from 'react';
import ReactDOM from 'react-dom';

import {
  Appear,
  Box,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Progress,
  Slide,
  Stepper,
  Text,
  UnorderedList,
} from 'spectacle';

const theme = {
  fonts: {
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color={HEADER_COLOR} />
    </Box>
    <Box padding="1em">
      <Progress color={HEADER_COLOR} />
    </Box>
  </FlexBox>
);

const neo4jLogo = 'src/neo4j_logo.png';
const sampleGraph = 'src/graph_1.png';
const graphDatabases = 'src/graph_dbs.png';
const neo4jPointer = 'src/neo4j_2.png';
const nodeGraph = 'src/graph_2.png';
const labelGraph = 'src/graph_3.png';
const relationshipGraph = 'src/graph_4.png';
const propertyGraph = 'src/graph_5.png';

const SLIDE_BG_COLOR = "#edf2fb";
const HEADER_COLOR = "#2f3e46";
const HEADER_SIZE = "36px";
const TEXT_COLOR = "#354f52"
const TEXT_HILGHLIGHT_COLOR = "#5fa8d3";

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">

    <Slide backgroundColor={SLIDE_BG_COLOR}>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          <Image src={neo4jLogo} width={300} />
        </Heading>
        <Heading margin="0px" fontSize="h3" color={HEADER_COLOR}>
          and Graph Databases
        </Heading>
      </FlexBox>
    </Slide>


    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>Agenda</Heading>
      <UnorderedList fontSize="24px" color={TEXT_COLOR}>
        <Appear elementNum={0}>
          <ListItem>
            <CodeSpan fontSize="26px">Introduction to Graphs</CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>
            <CodeSpan fontSize="26px">Why Graph Database ?</CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            <CodeSpan fontSize="26px">Why Neo4j ?</CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem>
            <CodeSpan fontSize="26px">Graph Modelling</CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={4}>
          <ListItem>
            <CodeSpan fontSize="26px">Querying Graphs using Cypher</CodeSpan>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>


    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
        Introduction to Graphs
      </Heading>
      <UnorderedList fontSize="24px" color={TEXT_COLOR}>
        <Appear elementNum={0}>
          <ListItem><CodeSpan fontSize="26px">Simply nodes, edges and properties</CodeSpan></ListItem>
        </Appear>
        <Appear elementNum={1}>
          <FlexBox marginTop={-40} key={`sample-graph-1`} >
            <Image src={sampleGraph} width={500} height={400} />
          </FlexBox>
        </Appear>
        <Appear elementNum={2}>
          <ListItem><CodeSpan fontSize="26px">Graphs are everywhere!</CodeSpan></ListItem>
        </Appear>
      </UnorderedList>
    </Slide>


    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
        Why Graph Database?
      </Heading>
      <Grid gridTemplateColumns="2fr 2fr" gridColumnGap={15}>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={1}>
            <ListItem><CodeSpan fontSize="26px">Better problem solving</CodeSpan></ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem><CodeSpan fontSize="26px">Performance</CodeSpan></ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem><CodeSpan fontSize="26px">Flexibility</CodeSpan></ListItem>
          </Appear>
          <Appear elementNum={4}>
            <ListItem><CodeSpan fontSize="26px">Agility</CodeSpan></ListItem>
          </Appear>
        </UnorderedList>
        <Appear elementNum={0}>
          <FlexBox paddingTop={0} key={`logo-1`} flex={1} flexDirection="column">
            <Image src={graphDatabases} width={600} />
          </FlexBox>
        </Appear>
      </Grid>
    </Slide>

    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
        Why Neo4j?
      </Heading>
      <UnorderedList fontSize="24px" color={TEXT_COLOR}>
        <Appear elementNum={0}>
          <ListItem><CodeSpan fontSize="26px">Open source</CodeSpan></ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem><CodeSpan fontSize="26px">Most Active Graph Community</CodeSpan></ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem><CodeSpan fontSize="26px">Good performance</CodeSpan></ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem><CodeSpan fontSize="26px">Easy to learn and use</CodeSpan></ListItem>
        </Appear>
        <Appear elementNum={4}>
          <ListItem><CodeSpan fontSize="26px">Large customer base</CodeSpan></ListItem>
          <CodeSpan marginLeft="50px" fontSize="22px">- Adobe, Airbnb, Allianz, Cisco, Ebay, Microsoft..</CodeSpan>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
        Graph Modelling
      </Heading>
      <UnorderedList fontSize="24px" color={TEXT_COLOR}>
        <ListItem><CodeSpan fontSize="26px">Resource Description Framework (RDF)</CodeSpan></ListItem>
        <ListItem>
          <CodeSpan fontSize="26px">
            <Appear elementNum={0} transitionEffect={{ to: { fontSize: '30px', color: TEXT_HILGHLIGHT_COLOR }, from: { fontSize: "26px", color: TEXT_COLOR } }}>
              Labeled Property Graph Model
            </Appear>
          </CodeSpan>
        </ListItem>
      </UnorderedList>
      <Appear elementNum={0}>
        <Image src={neo4jPointer} width={250} style={{ marginLeft: 100, marginTop: -20 }} />
      </Appear>
    </Slide>


    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
        Labeled Property Graph Model
      </Heading>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={100}>
        <FlexBox alignItems="flex-start" flexDirection="column" marginLeft={50}>
          <Text style={{ fontSize: "32px", color: {TEXT_COLOR} }}>
            <Appear elementNum={0} transitionEffect={{ to: { color: TEXT_HILGHLIGHT_COLOR }, from: { color: TEXT_COLOR } }}>
              Nodes
            </Appear>
          </Text>
          <Text style={{ fontSize: "32px", color: {TEXT_COLOR} }}>
            <Appear elementNum={2} transitionEffect={{ to: { color: TEXT_HILGHLIGHT_COLOR }, from: { color: TEXT_COLOR } }}>
              Labels
            </Appear>
          </Text>
          <Text style={{ fontSize: "32px", color: {TEXT_COLOR} }}>
            <Appear elementNum={4} transitionEffect={{ to: { color: TEXT_HILGHLIGHT_COLOR }, from: { color: TEXT_COLOR } }}>
              Relationships
            </Appear>
          </Text>
          <Text style={{ fontSize: "32px", color: {TEXT_COLOR} }}>
            <Appear elementNum={6} transitionEffect={{ to: { color: TEXT_HILGHLIGHT_COLOR }, from: { color: TEXT_COLOR } }}>
              Properties
            </Appear>
          </Text>
        </FlexBox>
        <Stepper
          defaultValue={[]}
          values={[
            [],
            [nodeGraph, 400],
            [nodeGraph, 400],
            [labelGraph, 500],
            [labelGraph, 500],
            [relationshipGraph, 500],
            [relationshipGraph, 500],
            [propertyGraph, 500],
          ]}
        >
          {(value, step) => (
            <Appear>
              <Image src={value && value[0]} width={value && value[1] || 400} style={{ marginLeft: 50, marginTop: 50 }} />
            </Appear>
          )}
        </Stepper>
      </Grid>
    </Slide>

    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
        Cypher
      </Heading>
      <UnorderedList fontSize="24px" color={TEXT_COLOR}>
        <Appear elementNum={0}>
          <ListItem><CodeSpan fontSize="26px">Clauses</CodeSpan></ListItem>
          <CodeSpan marginLeft="50px" fontSize="22px">- Create, Match, Merge, Return, Where..</CodeSpan>
        </Appear>
        <Appear elementNum={1}>
          <ListItem><CodeSpan fontSize="26px">Constraints</CodeSpan></ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem><CodeSpan fontSize="26px">Indexes</CodeSpan></ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem><CodeSpan fontSize="26px">Plugins</CodeSpan></ListItem>
          <UnorderedList>
            <ListItem><CodeSpan fontSize="24px" color={TEXT_COLOR}>APOC (Awesome Procedures on Cypher)</CodeSpan></ListItem>
            <ListItem><CodeSpan fontSize="24px" color={TEXT_COLOR}>Graph Algorithms</CodeSpan></ListItem>
          </UnorderedList>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h3" color={HEADER_COLOR}>
          Thank you!
        </Heading>
        <Text color={TEXT_COLOR}>Greeshma Pillai</Text>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
