import React, { Component } from 'react';
import { Text,View ,KeyboardAvoidingView , StyleSheet, TextInput, Button, Alert, Image } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json


export default class App extends Component {
  state = {
      username: "",
      password: "",
      errorvalueEmail: "Email can't be empty",
      errorvaluePass: "Password can't be empty",
      successButton: false,
      successButton2: false,
      successButton3: false,
      
  };
  
    

  _handleTextChange = username => {
   
    username = this.setState({ username });
    
 
    
     if (this.state.username.indexOf('@') === -1)  {
    this.setState({
             errorvalueEmail: "Not Correct format for email Address",
             successButton2: false
        });
  }
  else if( this.state.username.length <= 0 ){
       
 this.setState({
             errorvalueEmail: "Email can't be empty",
             successButton2: false
        });
    }
  
  else if (this.state.username.indexOf('.') === -1) {
      this.setState({
          errorvalueEmail: "Not Correct format for email Address",
             successButton2: false
        });
  }
    else{
      
       this.setState({
             errorvalueEmail: "",
             successButton2: true
        })
      
    }
      
        
      
  

  };
    _handleTextChange2 = password => {
    password = this.setState({ password});
    
    if(this.state.password.length >= 5 && this.state.password.length <= 15){
      console.log(this.state.password.length );
this.setState({
            errorvaluePass: null,
            successButton3: true,
            successButton : false
            
        })
        
        if (this.state.successButton2 && this.state.successButton3 ){
          this.setState({
          successButton : true
          })}
     
    }
        else {
           this.setState({
          
          errorvaluePass: "Password length must be 6-14 characters",
          successButton3: false,
            successButton : false
           })
         
        }
        
         
  

   
  };
  
  

  _handleButtonPress = () => {

    
    const { username, password } = this.state;

    Alert.alert('LOGIN SUCCESS');
    
    
    
  };

  render() {
    

    
    
    return (
     <KeyboardAvoidingView style={styles.container}
      behavior="padding"
     >
       
     
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/be33dce20cf0d42593287677525dfca5' }}
          style={styles.logoimage}
        />
      
          <Text style={{fontSize:20, textAlign: 'left',}}>
       EMAIL
        </Text>
        <TextInput
        
           placeholder={'Input Email Address'}
          value={this.state.username}
          onChangeText={this._handleTextChange}
       style={styles.formDesign}
        />
        <Text style={styles.error}>
         {this.state.errorvalueEmail}
        </Text>
        
           <Text style={{fontSize:20, textAlign: 'left',}}>
      PASSWORD 
        </Text>
        
      
        <TextInput
       placeholder={'Input Password'}
          value={this.state.password}
          onChangeText={this._handleTextChange2}
           secureTextEntry={true}
          style={styles.formDesign}
        />
       <Text style={styles.error}>
          {this.state.errorvaluePass}
        </Text>
       
       
        <Button
        disabled={!this.state.successButton}
          title="Sign In"
          onPress={this._handleButtonPress}
          
          style={styles.buttonLogin}
        />
      <View style={{ height: 50 }} />
     </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   // paddingTop: 0,
    backgroundColor: '#ecf0f1',
  },
  logoimage:{
    
    width:300,
    height:208,
    marginBottom:40,
   alignItems: 'center',
  },

   error: {
    margin: 5,
    fontSize: 12,
   
    fontStyle: 'italic',
    textAlign: 'left',
    color: '#ff0000',
  },
  formDesign: {
    width: 350,
    height: 46,
    padding: 10,
    borderWidth: 3,
    borderColor: '#341769',
    marginBottom: 10,
    
  },
  buttonLogin: {
    padding: 10,
    width:300,
      alignSelf:'left'
    
  },
});
