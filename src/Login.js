import React, {Component} from 'react';
import {View,StyleSheet, Text, Image, TextInput, AsyncStorage,ToastAndroid, ImageBackground,TouchableOpacity, Alert} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions,Router, } from 'react-native-router-flux';
import {myFetch} from './utils/index'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userclick = (e)=>{
        this.setState({username:e})
    }
    pwdclick = (e)=>{
        this.setState({pwd:e})
    }                       
                    
    login = ()=>{
      if(this.state.username !='' && this.state.pwd !=''){
        this.setState({isloading:true})
        myFetch.post('/login',{
          username:this.state.username,
          pwd:this.state.pwd}
      ).then(res=>{
         if(res.data.status=='1'){
           ToastAndroid.show('用户不存在',200);
         }
         else if(res.data.status=='2') {
          ToastAndroid.show('链接错误',200);
         }
         else{
           AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              this.setState({isloading:false})
              Actions.home();
            })
         }
      })
      }
      else{ToastAndroid.show('请输入账号、密码',200)}
      
  } 
    signup=()=>{
      Actions.Register();
    }
  render() {
    return (
      <ImageBackground source={require('../assets/three.png')} style={{ flex: 1 }}>
        <View style={styles.all}>
          <View style={{ alignItems: 'center' }}>
              <View style={styles.user}>
                  <Icon name='user' color='red'></Icon>
                  <TextInput placeholder='用户名' onChangeText={this.userclick} style={{ fontSize: 18 }}></TextInput>
              </View>
              <View style={styles.pwd}>
                  <Icon name='key' color='red'></Icon>
                  <TextInput onChangeText={this.pwdclick} placeholder='密码' secureTextEntry={true} style={{ fontSize: 18 }}></TextInput>
              </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 25, justifyContent: 'center', flexDirection: 'row' }}>
              <View style={{ width: '30%', height: 40 }}>
                  <TouchableOpacity style={styles.btn}
                      onPress={this.login}>
                      <Text style={{color:'white',fontWeight:"bold"}}>登录</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ width: '10%', height: 40 }}></View>
              <View style={{ width: '30%', height: 40 }}>
                  <TouchableOpacity style={styles.btn}  onPress={this.signup}>
                      <Text style={{color:'white',fontWeight:"bold"}}>注册</Text>
                  </TouchableOpacity>
              </View>
          </View>
          {
              this.state.isloading
              ?<View
                style={{
                  width:'50%',
                  marginLeft:"20%",
                  marginRight:'20%',
                  marginTop:20,
                }}
              ><Text 
                style={{fontSize:20,color:'black',alignItems:'center',justifyContent:'center'}}
              >登录中...</Text></View>
              :null
          }
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'center',
  },
  user:{
    width: '70%',
    borderWidth: 2,
    marginRight: 10, 
    flexDirection: 'row', 
    borderColor: 'gray',
    alignItems: 'center', 
    paddingLeft: 25
  },
  pwd:{
    width: '70%', 
    marginTop: 10, 
    borderWidth: 2, 
    marginRight: 10, 
    flexDirection: 'row', 
    borderColor: 'gray',
    alignItems: 'center', 
    paddingLeft: 25
  },
  btn: {
      height: 40,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:30,
  }
})