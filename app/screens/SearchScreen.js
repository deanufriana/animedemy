import React,{Component} from 'react'
import {Text,View,StyleSheet,ScrollView,Image,TextInput,FlatList,SectionList,TouchableOpacity} from 'react-native'
import {Container, Header, Left, Body, Right, Icon, Content} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

class SearchScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            sections:[{
                title:'A',data:['A Cheeky Angel','A Half Heavenly Girl','A Spirit of the Sun','A.I. Love You','A.I. Hunter']
            },
            {
                title:'B',data:['Baby and I','Baby Love','Bakugan Battle Brawlers','Bambino!','Bambino! Secondo']
            },
            {
                title:'C',data:['C.M.B.','Cash Girl','Candy Candy','Captain Tsubasa','Cardcaptor Sakura']
            },
            {
                title:'D',data:['Daa! Daa! Daa!','Daikichis','Dan Doh!!','Danganronpa','Darah Satria']
            },
            {
                title:'E',data:['Eternal Blue Sky','Eternal Sabath','Esper Mami','Eromanga Sensei']
            }],
        text:''
        }
    }

    render(){
        return(
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    <Header style={{backgroundColor:'#010101'}}>
                        <Left style={{flex:1,marginLeft:5}}>
                            <Icon name='md-arrow-back' style={{color:'white'}}/>
                        </Left>
                        <Body style={{flex:8}}>
                            <TextInput
                            value={this.state.text}
                            onChange={(text)=>this.setState({text:text})}
                            style={styles.input}
                            placeholder='Search'
                            placeholderTextColor='grey'
                            />
                        </Body>
                        
                    </Header>
                    <Content>
                    <View style={styles.container}>
                        <SectionList
                        sections={this.state.sections}
                        renderItem={({item}) =><TouchableOpacity><Text style={styles.item}>{item}</Text></TouchableOpacity> }
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                        />
                    </View>
                       
                    </Content>
                    
                
                
                </LinearGradient>

            </Container>
        )
    }
}

export default SearchScreen

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    
    },
    input:{
        borderRadius:16,
        width:300,
        height:30,
        backgroundColor:'white',
        padding:7,
        marginRight:20
        
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        color:'#00C0C1',
        fontFamily:'Roboto-Bold',
        fontWeight: 'bold',
        backgroundColor: '#1A222E',
      },
      item: {
        padding: 10,
        fontSize: 14,
        fontFamily:'Roboto-Bold',
        height: 44,
        color:'white'
      }})