import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');

class Landing extends React.Component{
    render(){
        return(
            <View>
                <ImageBackground source={myBackground} style={{width: '100%', height: '100%'}}>
                    <View style={styles.viewStyle}>
                         <Text
                          style={styles.titleStyle}
                         >Click below to begin</Text>
                            <Button
                             block={true}
                             style={styles.buttonStyle}
                             onPress={()=>this.props.switchScreen("search")}
                     >
                        <Text style={styles.buttonText}>Start Searching</Text>
                             </Button>
                     </View>
                 </ImageBackground>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      },
    
      titleStyle: {
        fontSize: 30,
        color: 'green',
        alignItems: 'center'
      },
    
      buttonStyle: {
        margin: 10,
       
      },
    
      buttonText: {
        fontSize: 20,
        color: 'white',
      }
}

export default Landing;