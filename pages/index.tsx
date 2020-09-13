import * as React from 'react';

import {
  Column,
  Container,
  Flex,
  Grid,
  Heading,
  List,
  ListItem,
  Space,
  Text,
} from 'ether-ui';

import Link from 'next/link';

const Home: React.FC = () => (
  <Grid
    gap={{
      default: '12',
      md: '24',
    }}
  >
    <header className='bg-gray-200'>
      <Container>
        <Space paddingY='5'>
          <Flex direction='row' alignX='between' alignY='center' wrap='wrap'>
            <Heading
              level='1'
              size={{
                default: '2xl',
                sm: '3xl',
                md: '4xl',
              }}
              weight='bold'
              leading='tight'
            >
              Site Name
            </Heading>

            <Flex direction='row' spaceX='5'>
              <Link href='/'>Home</Link>
              <Link href='/'>About</Link>
              <Link href='/'>News</Link>
              <Link href='/'>Contact</Link>
            </Flex>
          </Flex>
        </Space>
      </Container>
    </header>

    <Container>
      <Grid
        columns='12'
        gapX={{
          default: '0',
          md: '10',
        }}
        gapY={{
          default: '10',
          md: '0',
        }}
      >
        <Column
          span={{
            default: '12',
            md: '8',
            lg: '9',
          }}
        >
          <Flex direction='col' spaceY='5'>
            <Heading
              level='2'
              size={{
                default: '2xl',
                sm: '3xl',
                md: '4xl',
              }}
              weight='bold'
              leading='tight'
            >
              Content Heading
            </Heading>

            <Text
              size={{
                default: 'sm',
                md: 'base',
              }}
              leading='relaxed'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              sapiente rerum magnam corporis molestiae consectetur ea vel quae
              porro neque. Nostrum illum ab libero, suscipit quod unde impedit
              explicabo dolore.
            </Text>

            <Text
              size={{
                default: 'sm',
                md: 'base',
              }}
              leading='relaxed'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              sapiente rerum magnam corporis molestiae consectetur ea vel quae
              porro neque. Nostrum illum ab libero, suscipit quod unde impedit
              explicabo dolore.
            </Text>
          </Flex>
        </Column>

        <Column
          span={{
            default: '12',
            md: '4',
            lg: '3',
          }}
        >
          <Flex direction='col' spaceY='5'>
            <Heading
              level='3'
              size={{
                default: 'xl',
                sm: '2xl',
                md: '3xl',
              }}
              weight='bold'
              leading='tight'
            >
              Sidebar Heading
            </Heading>

            <Text
              size={{
                default: 'sm',
                md: 'base',
              }}
              leading='relaxed'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              sapiente rerum magnam corporis molestiae consectetur ea vel quae
              porro neque. Nostrum illum ab libero, suscipit quod unde impedit
              explicabo dolore.
            </Text>
          </Flex>
        </Column>
      </Grid>
    </Container>

    <footer className='bg-gray-200'>
      <Space paddingY='10'>
        <Container>
          <Grid columns='3'>
            {Array(3)
              .fill('')
              .map((_, i) => (
                <Column
                  span={{
                    default: '3',
                    md: '1',
                  }}
                  key={i}
                >
                  <List gap='3'>
                    <ListItem>
                      <Link href='/'>Home</Link>
                    </ListItem>

                    <ListItem>
                      <Link href='/'>About</Link>
                    </ListItem>

                    <ListItem>
                      <Link href='/'>News</Link>
                    </ListItem>

                    <ListItem>
                      <Link href='/'>Contact</Link>
                    </ListItem>
                  </List>
                </Column>
              ))}
          </Grid>
        </Container>
      </Space>
    </footer>
  </Grid>
);

export default Home;
