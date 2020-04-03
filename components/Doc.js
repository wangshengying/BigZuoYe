import React,{useState,useEffect,Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, //相当于div
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';

export default class Doc extends Component {
    render() {
        return (
            <>
            <SafeAreaView>
                <ScrollView>
                <View>
                    <View style={{
                        width:'100%',
                        height:'6%',
                        justifyContent:'center',
                        flexDirection:'row',
                        marginTop:'5%',
                        
                        }}>
                        <TextInput
                        style={{
                            backgroundColor:'#eeeeee',
                            borderColor:'#ccc',
                            color:'#c9c9c9',
                            width:400,
                            height:50,
                            borderRadius:10,
                        }}
                        placeholder='请输入商品名称' placeholderTextColor='#888'>
                        </TextInput>
                        <View style={{}} >
                            <Image source={require('../assets/icon/search.png')}/>
                        </View>
                    </View>
                    <View 
                    style={{
                        width:'100%',
                        height:50,
                        color:'#eeeeee',
                        justifyContent:'center',
                        flexDirection:'row',
                        backgroundColor:'#fff',
                        paddingTop:'3%'
                        }}>
                        <Text style={style1.box}>综合</Text>
                        <Text style={style1.box}>销量</Text>
                        <Text style={style1.box}>新品</Text>
                        <Text style={style1.box}>价格</Text>
                        <Text style={style1.box}>信用</Text>
                    </View>
                    
                    <View style={{width:'100%', height:1100, backgroundColor:'#eee'}}>
                        {/* Big */}
                        <View style={style1.Big}>
                            <View style={style1.box1}>
                                <View style={style1.img} >
                                    <Image source={require('../assets/icon/one.png')}/>
                                </View>
                                <Text style={style1.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi上好佳</Text>
                                <Text style={style1.txt2}>36.00</Text>
                            </View>
                            {/* box2 */}
                            <View style={[style1.box1,style1.add]}>
                                <View style={style1.img} >
                                    <Image source={require('../assets/icon/two.png')}/>
                                </View>
                                <Text style={style1.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi上好佳</Text>
                                <Text style={style1.txt2}>36.00</Text>
                            </View>
                        </View>
                        {/* Big */}
                        <View style={style1.Big}>
                            <View style={style1.box1}>
                                <View style={style1.img} >
                                    <Image source={require('../assets/icon/one.png')}/>
                                </View>
                                <Text style={style1.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi上好佳</Text>
                                <Text style={style1.txt2}>36.00</Text>
                            </View>
                            {/* box2 */}
                            <View style={[style1.box1,style1.add]}>
                                <View style={style1.img} >
                                    <Image source={require('../assets/icon/two.png')}/>
                                </View>
                                <Text style={style1.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi上好佳</Text>
                                <Text style={style1.txt2}>36.00</Text>
                            </View>
                        </View>
                        {/* Big */}
                        <View style={style1.Big}>
                            <View style={style1.box1}>
                                <View style={style1.img} >
                                    <Image source={require('../assets/icon/one.png')}/>
                                </View>
                                <Text style={style1.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi上好佳</Text>
                                <Text style={style1.txt2}>36.00</Text>
                            </View>
                            {/* box2 */}
                            <View style={[style1.box1,style1.add]}>
                                <View style={style1.img} >
                                    <Image source={require('../assets/icon/two.png')}/>
                                </View>
                                <Text style={style1.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi上好佳</Text>
                                <Text style={style1.txt2}>36.00</Text>
                            </View>
                        </View>
                        {/* Big */}
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
            </>
        )
    }
}
const style1 = StyleSheet.create({
	box:{
	  width:'20%',
	  height:50,
	  textAlign:'center',
	  fontSize:15,
	  color:'#888'
	},
	Big:{
		width:'100%',
		height:'28%',
		flexDirection:'row',
		justifyContent:'center',
		marginTop:'3%'
	},
	box1:{
		width:'45%',
		height:'100%',
		backgroundColor:'#fff',
		paddingTop:'5%'
	},
	add:{
		marginLeft:'2.5%'
	},
	img:{
		width:'100%',
		alignItems:'center',
        justifyContent:'center'
	},
	txt:{
		fontSize:14,
		color:'#888',
		textAlign:"left",
		marginLeft:'5%',
		marginTop:'5%'
	},
	txt2:{
		color:'red',
		textAlign:"left",
		marginLeft:'5%',
		marginTop:'3%',
		marginBottom:'5%'
	}
});
