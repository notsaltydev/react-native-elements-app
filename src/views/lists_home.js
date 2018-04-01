import _ from 'lodash';

import Expo from 'expo';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Col,
  Row,
  Icon,
  List,
  ListItem,
  Avatar
} from 'react-native-elements';

import colors from 'HSColors';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'thot leader',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
  },
  {
    name: 'jsa',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
  },
  {
    name: 'katy friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
  },
];

const log = () => console.log('this is an example method');

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO',
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer',
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
  },
];

const list3 = [
  {
    image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    icon: null,
    title: null,
  },
  {
    image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: null,
    title: null,
  },
  {
    image_url: null,
    icon: null,
    title: 'LR',
  },
  {
    image_url: null,
    icon: {name: 'user', type: 'font-awesome'},
    title: null,
  },
  {
    image_url: null,
    icon: {name: 'user-female', type: 'simple-line-icon'},
    title: null,
  },
  {
    image_url: null,
    icon: {name: 'baidu', type: 'entypo'},
    title: null,
  },
]

class Icons extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      selectedIndex: 0,
      value: 0.5,
      dataSource: ds.cloneWithRows(list1),
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{ name: rowData.icon }}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const buttons = ['Button1', 'Button2'];
    const { selectedIndex } = this.state;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Icon color="white" name="invert-colors" size={62} />
          <Text style={styles.heading}>Lists</Text>
        </View>
        <List>
          {list2.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              onPress={log}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </List>
        <List>
          {
            list2.map((l, i) => (
              <ListItem
                key={i}
                leftIcon={{ name: 'user-circle-o', type: 'font-awesome', style: {color: 'blue'} }}
                title={l.name}
                titleStyle={{color: 'red'}}
                subtitle={l.subtitle}
                rightTitle='11:00am'
                rightTitleStyle={{color: 'green'}}
              />
            ))
          }
        </List>
        <List>
          <ListItem
            roundAvatar
            title="Limited supply! Its like digital gold!"
            subtitle={
              <View style={styles.subtitleView}>
                <Image
                  source={require('../images/rating.png')}
                  style={styles.ratingImage}
                />
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            }
            avatar={require('../images/avatar1.jpg')}
          />
        </List>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </List>
        <View style={[styles.headerContainer, {backgroundColor: '#18CDCA', marginTop: 20}]}>
          <Icon color="white" name="hdd-o" size={62} type="font-awesome" />
          <Text style={styles.heading}>Cards</Text>
        </View>
        <View style={styles.container}>
          <Card title="CARD WITH DIVIDER">
            {users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })}
          </Card>
          <Card containerStyle={{ marginTop: 15 }} title="FONTS">
            <Text style={styles.fonts} h1>h1 Heading</Text>
            <Text style={styles.fonts} h2>h2 Heading</Text>
            <Text style={styles.fonts} h3>h3 Heading</Text>
            <Text style={styles.fonts} h4>h4 Heading</Text>
            <Text style={styles.fonts}>Normal Text</Text>
          </Card>
          <Card
            containerStyle={{ marginTop: 15, marginBottom: 15 }}
            title="TILES"
          >
            <View>
              <Tile
                imageSrc={{
                  uri: 'https://static1.squarespace.com/static/5477887ae4b07c97883111ab/5478c08fe4b0fa4e5a552532/57e101f3579fb32aef30d4af/1491426124625/Porthmeor+Sunset+21.jpg',
                }}
                title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
                titleStyle={{ fontSize: 20 }}
                featured
                caption="Mahatma Gandhi"
                activeOpacity={1}
                width={310}
              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <Tile
                imageSrc={{
                  uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
                icon={{
                  name: 'heart',
                  type: 'font-awesome',
                  size: 60,
                  color: 'red',
                }}
                featured
                activeOpacity={0.8}
                onPress={() => {
                  'Tile pressed';
                }}
                width={310}
              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <Tile
                imageSrc={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
                }}
                title="Half Dome, Yosemite"
                titleStyle={{ fontSize: 20 }}
                activeOpacity={1}
                width={310}
                contentContainerStyle={{ height: 70 }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ color: 'green' }}>Visit</Text>
                  <Text style={{ color: 'blue' }}>Find out More</Text>
                </View>
              </Tile>
            </View>
          </Card>
          <Card
            containerStyle={{
              marginTop: 15,
              marginBottom: 15,
            }}
            title="AVATARS"
          >
            {_.chunk(list3, 3).map((chunk, chunkIndex) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }} key={chunkIndex}>
                {chunk.map((l, i) => (
                  <Avatar
                    large
                    rounded
                    source={l.image_url ? { uri: l.image_url } : null}
                    icon={l.icon}
                    title={l.title}
                    key={`${chunkIndex}-${i}`}
                  />
                ))}
              </View>
            ))}
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78'
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Icons;