import React,{useState,useEffect,Component} from 'react';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, //相当于div
  ScreenWidth,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';
import Button from 'react-native-button';
// import { Button } from '@ant-design/react-native';

export default class Msg extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: false,
            items:[]
        }
    }
    componentDidMount() {
        // 轮播图
        var item;
        for (let i = 0; i < 3; i++){
            switch (i){
                case 0:{
                    item = '../assets/icon/next3.png';

                    break;
                }
                case 1:{
                    item = '../assets/icon/next3.png';
                    break;
                }
                default:{
                    item = '../assets/icon/next3.png';
                    break;
                }
            }
            this.state.items.push(item);

        }
        console.log(this.state.items + '111');
        this.setState({
            isShow: true,
            items: this.state.items
        })
    }
    render() {
        // 轮播图
        let H = 200;
        return (
            <>
            <SafeAreaView>
                <ScrollView>
                <View>
                    <View style={{
                        width:'100%',
                        height:50,
                        justifyContent:'center',
                        flexDirection:'row',
                        marginTop:'5%',
                        backgroundColor:'red'
                        }}>
                        <View style={{
                            backgroundColor:'#fbb8b8',
                            width:40,
                            height:40,
                            marginTop:5,
                            flexDirection:'row',
                            justifyContent:'center',
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius:25
                        }}>
                            <Image style={{width:25,height:25,marginTop:7}} source={require('../assets/icon/search2.png')}/>
                        </View>
                        <TextInput
                        style={{
                            backgroundColor:'#fbb8b8',
                            borderColor:'#ccc',
                            color:'#c9c9c9',
                            width:250,
                            height:40,
                            marginTop:5,
                            borderTopRightRadius:25,
                            borderBottomRightRadius:25
                        }}
                        placeholder='请输入搜索的关键字' placeholderTextColor='white'>
                        </TextInput>
                        <View style={{
                            backgroundColor:'red',
                            width:40,
                            height:40,
                            marginTop:5,
                            flexDirection:'row',
                            justifyContent:'center',
                        }}>
                            <Image style={{width:25,height:25,marginTop:7}} source={require('../assets/icon/bug.png')}/>
                        </View>
                    </View>
                    {/* 轮播图 */}
                    <View style={{height: H, alignItems:'center', backgroundColor:'blue',position:"relative"}}>

                        <Swiper autoplay = {true} height = {H} showsPagination = {true} dotColor="white"
                                activeDotColor='red' horizontal={true}>
                            {
                                this.state.items.map((item, index) => {
                                    return (<Image style={{height: H, width:ScreenWidth}} key = {index} resizeMode='cover' source={require('../assets/icon/next.png')}/>)
                                })
                            }
                        </Swiper>
                    </View>

                    {/* middle */}

                    <View style={{width:'100%',height:400,backgroundColor:'#fff'}}>
                        <View style={style1.H1}>
                            <View style={style1.M1}>
                                <Image style={{width:100,height:100}} source={require('../assets/icon/pink.png')}/>
                            </View>
                            <Text style={style1.T1}>居家维修保养</Text>
                            <Text style={style1.T2}>＞</Text>
                        </View>
                        <View style={style1.H1}>
                            <View style={style1.M1}>
                                <Image style={{width:100,height:100}} source={require('../assets/icon/yellow.png')}/>
                            </View>
                            <Text style={style1.T1}>住宿优惠</Text>
                            <Text style={style1.T3}>＞</Text>
                        </View>
                        <View style={style1.H1}>
                            <View style={style1.M1}>
                                <Image style={{width:100,height:100}} source={require('../assets/icon/green.png')}/>
                            </View>
                            <Text style={style1.T1}>出行接送</Text>
                            <Text style={style1.T3}>＞</Text>
                        </View>
                        <View style={style1.H1}>
                            <View style={style1.M1}>
                                <Image style={{width:100,height:100}} source={require('../assets/icon/blue.png')}/>
                            </View>
                            <Text style={style1.T1}></Text>
                            <Text style={style1.T4}>＞</Text>
                        </View>
                    </View>
                    {/* 发布需求 */}
                    <View style={{width:'100%',height:40,fontSize:16, flexDirection:'row',justifyContent:'center',marginTop:20}}>
                        <View style={{width:300,height:40,color:'white'}}>
                            <Button style={style1.btn} onPress={()=>Actions.Out()} >发布需求</Button>
                        </View>
                    </View>
                   {/*bottom */}
                   <View style={{width:'100%',height:30,flexDirection:'row',justifyContent:'center',marginTop:20}}>
                        <Image style={{width:100,height:10}} source={require('../assets/icon/bottom.png')} />
                   </View>
                </View>
                </ScrollView>
            </SafeAreaView>

            </>
        )
    }
}
const style1 = StyleSheet.create({
	H1:{
        width:'100%',
        height:100,
        marginLeft:20,
        flexDirection:'row',
        alignItems:'center',
    },
    M1:{
        width:100,
        height:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    T1:{
        marginLeft:30,
        fontSize:16,
        color:'#5d5d5d'
    },
    T2:{
        marginLeft:200,
        fontSize:16,
        color:'#5d5d5d'
    },
    T3:{
        marginLeft:230,
        fontSize:16,
        color:'#5d5d5d'
    },
    T4:{
        marginLeft:295,
        fontSize:16,
        color:'#5d5d5d'
    },
    btn:{
        width:300,
        height:50,
        backgroundColor:'#f23030',
        color:'#fff',
        textAlignVertical:'center',
        borderRadius:30,
    }
});