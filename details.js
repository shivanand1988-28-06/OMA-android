import React from "react" ;
import { NavigationAction } from "@react-navigation/native";
import {Text,Image , Viev,StyleSheet} from "react-native" ;




const styles =  StyleSheet.create({
    container : {
        margin : 30 ,
        display : "flex" ,
        justifyContent : "center" ,
        alignItems : "center"
    } ,
    omaImg:{
        width :500 ,
        height : 400 ,
        
    }
});

const Userdetails =({ route})=>{
    

return (
    <>
    
       <Image source={require("./assets/OMA-Feature.png")} style = {styles.omaImg}></Image>
         <Text> Welcome {route.params.name}</Text>
         <Text> Our Team Will Connect With You As Soon As Possible , Thanks For The Sign-Up</Text>
    
    </>
)
}

export default Userdetails ;