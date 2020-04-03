
import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import Doc from './components/Doc';
import Msg from './components/Msg';
import My from './components/My';
import Out from './components/Out';
import SwiperPage from './src/SwiperPage';
import { Grid, Icon } from '@ant-design/react-native';


console.disableYellowBox = true;

const App = () => {
	useEffect(()=>{
		SplashScreen.hide();
	},[])
	// let [isLogin,setLogin] = useState(false);
	// let [isInstall,setInstall] = useState(true);
	// let now = 0;
	// let init = ()=>{
	// 	AsyncStorage.getItem('isInstall')
	// 	.then(res=>{
	// 		console.log('isinstall',res)
	// 		if(res){
	// 			setInstall(false);
	// 		}
	// 	})
	// 	AsyncStorage.getItem('user')
	// 	.then(res=>{
	// 		let user = JSON.parse(res)
	// 		console.log(user)
	// 		if(!user){
	// 			SplashScreen.hide();
	// 		}
	// 		if(user&&user.token){
	// 			setLogin(true);
	// 			SplashScreen.hide();
	// 		}
	// 	})
	// }
	// useEffect(()=>{
	// 	init();
	// },[])
	// let afterInstall = ()=>{
	// 	console.log('after install')
	// 	setInstall(false)
	// }
	// if(isInstall){
	// 	return <View style={{flex:1}}>
	// 		<SwiperPage afterInstall={afterInstall}/>
	// 	</View>
	// }

	return (
		<Router
			// backAndroidHandler={()=>{
			// 	if(Actions.currentScene != 'home'){
			// 		Actions.pop();
			// 		return true;
			// 	}else{
			// 		if(new Date().getTime()-now<2000){
			// 			BackHandler.exitApp();
			// 		}else{
			// 			ToastAndroid.show('确定要退出吗',100);
			// 			now = new Date().getTime();
			// 			return true;
			// 		}
			// 	}
				
			// }}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
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
							<Scene key='首页'
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
							<Scene key='商品分类'
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
						</Scene>
					</Drawer>
					{/* <Scene key='light' component={Mybox}/> */}
				</Lightbox>

				{/* <Scene initial={!isLogin} key="login" component={Login} /> */}

				{/* <Scene key="login" component={ShowMyName}/> */}
				{/* <Scene key="login1" component={Login}/> */}
			</Modal>
			{/* <Scene component={Message}/> */}
			</Overlay>
		</Router>
	);
};

export default App;