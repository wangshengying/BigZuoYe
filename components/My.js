import React,{useState,useEffect,Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, //相当于div
  Text,
  StatusBar,
  Image,
  Animated,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';

import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {WebView} from 'react-native-webview';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class Doc extends Component {
	constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl:require('../assets/icon/people.png')
        }
    }
	takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
	}
    render() {
        return (
            <>
            <SafeAreaView>
                <ScrollView>
                <View style={{backgroundColor:'#fff'}}>
                    {/* head */}
                    <View style={{width:'100%',height:260,backgroundColor:'#f23030'}}>
                        <View style={{width:'100%',height:100,marginTop:40,flexDirection:'row',justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>{this.takephoto()}}>
								<Image style={{width:120,height:120,borderRadius:60}} source={this.state.imageUrl} />
							</TouchableOpacity>
                        </View>
                        <View style={{width:'100%',height:20,marginTop:40,flexDirection:'row',justifyContent:'center'}}>
                            <Image style={{width:120,height:25}} source={require('../assets/icon/text1.png')} />
                        </View>
                    </View>
                    {/* line */}
                    <View style={{width:'100%',height:40,flexDirection:'row'}}>
                        <View style={{width:40,height:40,marginLeft:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:30,height:30,}} source={require('../assets/icon/small1.png')} />
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:16}}>我的个人中心</Text>
                        </View>
                    </View>
					{/* medium */}
					<View style={{width:'100%',height:300}}>
						<View style={style1.Box}>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/shezhi.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>账户管理</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/weizhi.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>收货地址</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/xinxi.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的信息</Text>
                        		</View>
							</View>
						</View>
						{/*  */}
						<View style={style1.Box}>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/dingdan.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的订单</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/erweima.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的二维码</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/jifen.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的积分</Text>
                        		</View>
							</View>
						</View>
						{/*  */}
						<View style={style1.Box}>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/shoucang.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的收藏</Text>
                        		</View>
							</View>
						</View>
					</View>
					{/* line2 */}
					<View style={{width:'100%',height:10,backgroundColor:'#eee'}}></View>
					<View style={{width:'100%',height:40,flexDirection:'row'}}>
                        <View style={{width:40,height:40,marginLeft:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:30,height:30,}} source={require('../assets/icon/single.png')} />
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:16}}>E族活动</Text>
                        </View>
                    </View>
					{/* medium*/}
					<View style={{width:'100%',height:200}}>
						<View style={style1.Box}>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/weixiu.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>居家维修保养</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/car.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>出行接送</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/shouzengren.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的受赠人</Text>
                        		</View>
							</View>
						</View>
						{/*  */}
						<View style={style1.Box}>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/zhusu.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的住宿优惠</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/huodong.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的活动</Text>
                        		</View>
							</View>
							<View style={style1.box1}>
								<View style={style1.box2}>
									<Image style={style1.img1} source={require('../assets/icon/fabu.png')}/>
								</View>
								<View style={style1.box3}>
                            		<Text style={{fontSize:16}}>我的发布</Text>
                        		</View>
							</View>
						</View>
					</View>
					{/* bottom */}
					<View style={{ alignItems: 'center' }}>
						<View style={{ width: '50%', height: 40 }}>
							<TouchableOpacity style={style1.btn} onPress={() => Actions.login()}>
								<Text style={{color:'white',fontWeight:"bold"}}>退出登录</Text>
							</TouchableOpacity>
						</View>
					</View>
                </View>
                </ScrollView>
            </SafeAreaView>
            </>
        )
    }
}
const style1 = StyleSheet.create({
	Box:{
		width:'100%',
		height:100,
		flexDirection:'row',
	},
	box1:{
		width:'33.3%',
		height:100,
		justifyContent:'center'
	},
	box2:{
		width:'100%',
		height:60,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	img1:{
		width:35,
		height:33
	},
	box3:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	btn:{
		width: 200,
		height: 40,
		color: '#fff',
		textAlignVertical: 'center',
		borderRadius: 20,
		backgroundColor: 'red'
	},
	btn: {
        height: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
    },
});