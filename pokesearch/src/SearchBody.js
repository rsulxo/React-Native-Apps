import React from 'react';
import {ScrollView, Text, Image, View, Dimensions, ImageBackground} from 'react-native';
import {ListItem, List} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class SearchBody extends React.Component{
    render(){
        
        //this is requesting any data coming in from props 
        var pokemon = this.props.data;
        if (!pokemon){
            return <View/>
        }
        return(
            <ImageBackground 
                style={styles.bgimg}
                source={{uri:"http://pokemongolive.com/img/posts/raids_loading.png"}}
            >
                <ScrollView style={{flex:1}}>
                    <Text style={styles.title}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image 
                            source={{uri: pokemon.sprites.front_default}}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItem style={styles.listDivider} itemDivider>
                            <Text style={{fontWeight:'bold', color: 'white'}}>Size</Text>
                        </ListItem>
                        <ListItem >
                            <Text style={{fontWeight:'bold',}}>Weight - {pokemon.weight/10}kg</Text>
                        </ListItem>
                        <ListItem >
                            <Text style={{fontWeight:'bold',}}>Height - {pokemon.height/10}m</Text>
                        </ListItem>
                        <ListItem style={styles.listDivider} itemDivider>
                                <Text style={{fontWeight: 'bold', color: 'white'}}>Abilities</Text>
                            </ListItem>
                            <List 
                                dataArray={pokemon.abilities}
                                renderRow={(item)=>
                                    <ListItem>
                                        <Text>{item.ability.name}</Text>
                                    </ListItem>	
                                }
                            >
                                </List>


                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }

}

const styles = {

    bgimg: {
        height: height,
        width: width
        
    },

    title : {
        fontSize: 25,
        color: '#FFF',
        textAlign: 'center'
    },

    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    img: {
		height: 200,
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
    },

    info: {
        backgroundColor: 'white',
        opacity: 0.8
    },

    listDivider: {
        backgroundColor: 'red',
    }
    
}

export default SearchBody;