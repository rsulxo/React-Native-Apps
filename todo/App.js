// import
import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';


// create 
class App extends React.Component{

  // this is the state function for the text given and todo array
  state = {
    text: "",
    todo: []
  }

  // addTodo function adds todos to our array
  addTodo = () => {
    var newTodo = this.state.text;  //new var which is text
    var arr = this.state.todo;      //new array which is todo
    arr.push(newTodo);              //push text into todo
    this.setState({todo: arr, text:""});     //thus setting state of todo to array and state of text to clear the text input
  }

  deleteTodo = (t) => {             //access to 't'
    var arr = this.state.todo;      //get the current val of array 
    var pos = arr.indexOf(t);       //get the pos in the array of whatever this value 't' is 
    arr.splice(pos,1);              //removes item from the pos we got and use 1 to remove 1 item
    this.setState({todo: arr});     //new state which will pass through the todo array
  }

  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}> 
        <Text style = {styles.todo}
        onPress={()=>{this.deleteTodo(t)}} 
        >{t}</Text>
        </TouchableOpacity>
      )
    }) //maps every item in the array
  }

  render(){
    return( 
      <View style={styles.wholeStyle}>  
        <View style = {styles.viewStyle}>
          <Text style = {styles.header}> To-do List </Text>
          <TextInput 
          style = {styles.inputStyle}
          onChangeText = {(text) => this.setState({text})} 
          value={this.state.text} //this is so the text input clears after entering values
          />
          <Button
          title = "Add To-do"
          color = "#C51162"
          onPress = {this.addTodo}
          />
          <View style={{marginTop: 100}}/>
          {this.renderTodos()} 
        </View>
      </View>
    )
  }
}

// styles 
const styles = {
  wholeStyle: {
    backgroundColor: '#F8BBD0',
    flex: 1
  },

  viewStyle: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#F8BBD0'
  },

  inputStyle:{
    height: 40,
    width: 350,
    borderColor: "#C51162",
    borderWidth: 1
  },

  header:{
    fontSize: 30,
    color: '#C51162',
    fontWeight: 'bold'
  },

  todo: {
    fontSize: 24,
    color: 'white'
  }
}

// export 
export default App;