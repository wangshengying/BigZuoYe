import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image ,AsyncStorage} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import Doc from './components/Doc';
import Msg from './components/Msg';
import My from './components/My';
import Out from './components/Out';
import SwiperPage from './src/SwiperPage';
import Login from './src/Login';
import SignUp from './src/Register';
import { Grid, Icon } from '@ant-design/react-native';
import Register from './src/Register';

console.disableYellowBox = true;

const App = () => {
	useEffect(()=>{
		AsyncStorage.clear();
		SplashScreen.hide();
	},[])
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}

	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Scene key="root">
				<Tabs 
					key='tabbar'
					hideNavBar
					activeTintColor="red"
					inactiveTintColor="blue"
					tabBarStyle={{backgroundColor:'#ccc'}}
				>
				{/* 首页栏 */}
				<Scene title='首页'
					key='home'
					hideNavBar
					icon={
						({focused})=><Icon 
							color={focused?'red':'gray'} 
							name="home"
						/>
					}
				>
						<Scene key="docs" hideNavBar component={Msg} />
						<Scene key='Out' component={Out} />
				</Scene>
				{/* 列表栏 */}
				<Scene title='商品分类'
					 key='sort'
					hideNavBar
					icon={({focused})=><Icon color={focused?'red':'gray'} name='home'/>}
					>
					<Scene key="docs" component={Doc}/>
				</Scene>
				{/* 个人中心栏 */}
				<Scene key='个人中心'
					hideNavBar
					icon={({focused})=><Icon color={focused?'red':'gray'} name='home'/>}
					>
					<Scene key="my" component={My}/>
				</Scene>
				</Tabs>
				 <Scene hideNavBar initial={!isLogin} key="login" component={Login} />
     			 <Scene hideNavBar key="Register" component={Register}/>
			</Scene>
		</Router>
	);
};

export default App;