import React from 'react';
import {View,Text} from 'react-native';
import {Header, Item, Icon, Input, Button} from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';  


class Search extends React.Component{
state = {
    pokeSearch: "",
    onCall: true,
    data: {}
}

searchPoke = () => {
    this.setState({onCall:true})
    var self = this; // this allows you to use the context of this inside of a function that doesnt have access to it
    
    if(this.state.pokeSearch == ""){
        this.state.pokeSearch = "" + Math.floor(Math.random() * 100) + 1;
    }

    //axios call to the pokemon url
    // it will reach the website server 
    axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())

    //use a promise & then function to take the response variable
    // that comes back from the API and we're gonna log the data 
    .then(function(response){
        console.log(response.data);

        // set the state of data to the response object
        self.setState({data: response.data});

        // set state of oncall to false so once the pokemon has been searched
        // and sets state, we then pass into search components
        // we want the search body to show on screen 
        self.setState({onCall: false});
    })

    .catch(function(error){
        console.log(error);
    })

    }

renderBody = () => {
    if(this.state.onCall) {
        return (
            <PokeLoader />
        )
    } else {
        return (
            <SearchBody data = {this.state.data} />
        )
    }
}

render(){
    return(
        <View style={{flex: 1}}>
            <Header
                searchBar
                rounded
            >
                <Item>
                    <Input 
                        value={this.state.pokeSearch}
                        placeholder="Search Pokemon"
                        onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
                    />
                    <Button
                        block={true}
                        style={styles.buttonStyle}
                        onPress={this.searchPoke}
                    >
                        <Text style={styles.buttonText}><Icon name="ios-search" /></Text>
                    </Button>
                </Item>

            </Header>
            
            {this.renderBody()}
        </View>
        )
    }

}

const styles = {
    buttonStyle: {
        width: 50,
        backgroundColor: 'purple'
      },
    
      buttonText: {
        fontSize: 10,
        color: 'white',
      }
}
export default Search;