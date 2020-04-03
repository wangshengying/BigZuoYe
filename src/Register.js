import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity,ImageBackground,StyleSheet, Alert, ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from './utils/index'
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
        }
    }
    userclick = (a)=>{
        this.setState({username:a})
    }
    pwdclick = (a)=>{
        this.setState({pwd:a})
    }
    register= ()=>{
      if(this.state.username !='' && this.state.pwd !=''){
        myFetch.post('/signup',{
          username:this.state.username,
          pwd:this.state.pwd}
      ).then(res=>{
         if(res.data.status=='1'){
           ToastAndroid.show('已有账号，可直接登录',200);
         }
         else if(res.data.status=='2') {
          ToastAndroid.show('网络错误',200);
         }
         else{
           AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              Actions.login();
            })
         }    
      })
      }
      else{ToastAndroid.show('请输入账号、密码',200)}
      
  }
  login=()=>{
    Actions.login();
  } 
    render() {
        return (
          <ImageBackground source={require('../assets/three.png')} style={{ flex: 1 }} >
            <View style={{flex:1,justifyContent: 'center'}}>
              <View style={styles.all}>
                <View style={{ alignItems: 'center', width: '80%', height: 150 }}>
                    <View style={[styles.bod, { marginTop: 26 }]}>
                        <Icon name='user' color='red'></Icon>
                        <TextInput placeholder='用户名' onChangeText={this.userclick} style={{ fontSize: 18 }}></TextInput>
                    </View>
                    <View style={styles.bod}>
                        <Icon name='key' color='red'></Icon>
                        <TextInput placeholder='密码' onChangeText={this.pwdclick} style={{ fontSize: 18 }}></TextInput>
                    </View>
                  </View>
                  <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center'}}>
                      <View style={{ width: '70%', height: 40 }}>
                          <TouchableOpacity style={styles.btn} onPress={this.register}>
                              <Text style={{ color:'white', fontWeight:"bold"}}>注册</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={{ width: '50%', height: 40 ,marginTop:20}}>
                          <TouchableOpacity style={styles.btn} onPress={this.login}>
                              <Text style={{ color:'white', fontWeight:"bold"}}>返回</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View> 
        </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
  all: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30,
  },
  bod:
  {
    width: '80%',
    height: 45,
    marginTop: 5,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  }
})