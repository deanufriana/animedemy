import { Container, Button, ListItem, List, Icon } from "native-base";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  AsyncStorage
} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import deviceStorage from "../data/deviceStorage"

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubsribe: false,
      isLogin: false,
      token: false
    };
  }

  displayButton() {

    if (!this.state.isSubsribe) {
      return (
        <Button
          style={{
            width: 100,
            backgroundColor: "#CE0606",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            height: 40
          }}
          onPress={() => this.setState({ isSubsribe: !this.state.isSubsribe })}
        >
          <Text style={{ color: "white" }}>Subscribe</Text>
        </Button>
      );
    }
    return (
      <Button
        style={{
          width: 100,
          backgroundColor: "#010101",
          borderColor: "#CE0606",
          alignSelf: "center",
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          height: 40
        }}
        onPress={() => this.setState({ isSubsribe: false })}
      >
        <Text style={{ color: "#CE0606" }}>Unsubscribe</Text>
      </Button>
    );


  }

  logout = async () => {
    await AsyncStorage.removeItem('token').then(() =>
      this.props.navigation.push("Directory")
    )
  };

  displayLogout() {
    if (deviceStorage.getKey()) {
      return (
        <Button
          style={{ width: "100%", backgroundColor: "red", height: 40 }}
          onPress={this.logout}
        >
          <Text style={{ color: "white", marginLeft: 20 }}>Logout</Text>
        </Button>
      );
    } else {
      return <View style={{ height: 40 }} />;
    }
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      this.setState({
        token: true
      })
    }
  }

  render() {
    // {
    //   alert(JSON.stringify(deviceStorage.getKey()));
    // }
    return (
      <Container>
        <LinearGradient
          colors={["#010101", "#1A222E"]}
          style={styles.linearGradient}
        >
          <View
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
          >
            <View style={{ flex: 1, marginTop: 10 }}>
              <Image
                source={require("../assets/img/logo.png")}
                style={{ width: 140, height: 50 }}
              />
            </View>
            <View style={{ flex: 2, marginTop: 20 }}>
              {this.state.token && this.displayButton() || <Button
                style={{
                  backgroundColor: "#00C0C1",
                  alignSelf: "center",
                  width: 100,
                  height: 40,
                  justifyContent: "center"
                }}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={{ color: "white" }}>Login</Text>
              </Button>}
            </View>

            {/* {this.state.isSubsribe?(<Button style={{padding:10,backgroundColor:'#CE0606',alignSelf:'center'}} onPress={()=>this.setState({isSubsribe:false})}>
              <Text style={{color:'white'}} >
                Subscribe
              </Text>
            </Button>):(
              <Button style={{padding:10,backgroundColor:'white',borderColor:'#CE0606',alignSelf:'center',borderWidth:2}} onPress={()=>this.setState({isSubsribe:true})}>
              <Text style={{color:'#CE0606'}}>
                Subscribe
              </Text>
            </Button>
            )} */}
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Directory')}>
            <View style={{ flex: 2, marginLeft: 20, justifyContent: "center" }} >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Roboto-Medium",
                  fontSize: 14
                }}
              >
                Directory
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{ flex: 9, flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 24,
                color: "#00C0C1",
                fontFamily: "Roboto-Medium",
                marginLeft: 10
              }}
            >
              Category
            </Text>

            <View
              style={{
                borderTopColor: "#00C0C1",
                borderTopWidth: 3,
                marginTop: 5
              }}
            />
            <List>
              <ListItem
                onPress={() => this.props.navigation.push('Category', { id: 1 })}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Roboto-Medium",
                    fontSize: 14
                  }}
                >
                  Adventure
                </Text>
              </ListItem>
              <ListItem
                onPress={() => this.props.navigation.push('Category', { id: 2 })} >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Roboto-Medium",
                    fontSize: 14
                  }}
                >
                  Action
                </Text>
              </ListItem>
              <ListItem
                onPress={() => this.props.navigation.push('Category', { id: 3 })} >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Roboto-Medium",
                    fontSize: 14
                  }}
                >
                  Comedy
                </Text>
              </ListItem>
            </List>
          </View>

          {this.state.token && this.displayLogout()}
        </LinearGradient>
      </Container>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});
