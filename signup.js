

import * as React from 'react';
import {useState} from "react" ;
import { View, Text , StyleSheet ,SafeAreaView , TextInput , Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native';
import Video from "react-native-video" ;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    video: {
      height: "100%" ,
      width :"100%" ,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex : -1
    },
    input : {
      height: 40,
      marginTop:  50,
      marginLeft : 30 ,
      marginRight : 30, 
      borderWidth: 1,
      borderColor : "white" ,
      padding: 10,
      color: "white" ,
      borderRadius : 10
    },
    button:{
        width : "30%" ,
      paddingTop : 50  ,
      marginLeft : 140 ,
      
    borderRadius : 10 ,
      
      
    },
       email:{
        height: 40,
      marginTop:  50,
      marginLeft : 30 ,
      marginRight : 30, 
      borderWidth: 1,
      borderColor : "white" ,
      padding: 10,
      color: "white" ,
      borderRadius : 10
       } ,
       text:{
        color : "white" ,
        paddingLeft:20 
       }
    
  });


  const Signup =({navigation})=> {
    const [user , setUser] = useState("") ;
    const [password , setPassword ] = useState("") ;
    const [email, setEmail] = useState("") ;
    const [mobileNumber , setMobile] = useState("") ;
    
      const videoBuffer =(data)=>{
        console.log("video buffer" , data)
      }
    
      const videoError =(data)=>{
        console.log("video error" , data)
      }
    
     const submit = async()=>{
        let collection = {} ;
        collection.user = user ;
        collection.email = email ;
        collection.mobileNumber = mobileNumber ;
        collection.password = password ;
       
      await fetch(`http://10.0.2.2:8080/user/adduser`,{
          method : "post" ,
          dataType: 'jsonp',
          body : JSON.stringify(collection) ,
          headers : {
            
            Accept : "application/json"  ,
            "Content-Type" : "application/json" ,
          },
          
        }).then(response=>{
          return response.json() ;
        }).catch(error=>console.warn("error",error))
        .then(response=>{
          if (response.value == true){
             navigation.navigate("Userdetails" , {name : response.data.user});
             setUser("") ;
             setMobile("");
             setEmail("");
             setPassword("");
          }else{

          }
        });
        
        
         
      }
    
      return (
        
        
      <View style = {styles.container}>
          <View>
    
            <ImageBackground source={require("./assets/OMA-Feature.png")} style = {{width : 100 , height: 80 ,marginTop : 20 ,marginLeft : 20}}/>
           <Text style = {styles.text}>ONE MORE APP</Text>
            </View>
              <Video  
              repeat = {true}
              muted = {false}
              volume = {1.0}
              rate = {1.0}
              onBuffer = {videoBuffer} 
              onError = {videoError}
              resizeMode={"cover"}
              source = {require("./assets/Untitled.mp4")} style = {styles.video}  />
              
           
              <SafeAreaView>
                <TextInput
                 placeholder='Your Name' 
                 placeholderTextColor={"white"}
                 style={styles.input}
                 onChangeText={setUser}
                 value={user}/>
    
               <TextInput
                placeholder='Your Email'
                placeholderTextColor={"white"}
                 style={styles.email}
                 onChangeText={setEmail}
                 value={email}/>
    
                <TextInput style={styles.email}
                 placeholder = 'Your Mobile No.' 
                 placeholderTextColor={"white"}
                 onChangeText={setMobile}
                 value={mobileNumber}/>
    
    <TextInput
                placeholder='Type Your Password'
                placeholderTextColor={"white"}
                 style={styles.input}
                 onChangeText={setPassword}
                 value={password}/>
    
              </SafeAreaView>
    
             <View style = {styles.button}>
              <Button
              onPress={submit}
               title="Submit"
      
      accessibilityLabel="Learn more about this button" 
      
    />
    </View> 
               
               </View>
               
     
        
        
       
        
      );
    }
    
    export default Signup;