import React, { Component } from 'react';
import Button from 'react-native-button';
import moment from 'moment';
import {
    View, 
    Text, 
    SafeAreaView,
    StyleSheet,
    ToastAndroid,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Pagination} from '@ant-design/react-native';
// import Icon from 'react-native-vector-icons/Feather'

export default class Out extends Component {
    constructor(){
        super()
        this.state={
            tits:[],
            pages:1,
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.pages)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                tits:res.data
            })
        })
        
    }
    componentDidUpdate(preProps,prevState){
        if(this.state.pages != prevState.pages){
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.pages)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    tits:res.data
                })
            })
        }
    }
    front = ()=>{
        if(this.state.pages>1){
            this.setState({
                pages: this.state.pages-1
            })
        }else{
            ToastAndroid.show('前面没有啦',100);
        }
    }
    back= ()=>{
        this.setState({
            pages: this.state.pages+1
        })
    }
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.one}>
                        <Icon style={styles.icon} name='chevron-left'onPress={()=>Actions.pop()} />
                            <Text 
                            style={{
                                width:"60%",
                                height:40,
                                textAlign:'center',
                                marginLeft:'auto',
                                marginRight:"auto",
                                fontSize:20,
                                color:'white',
                                marginTop:5
                            }}
                        >我的发布</Text>
                        <Text style={styles.dote} >...</Text>
                    </View>
                    <View style={{width:'100%',height:480,marginTop:20}}>
                     {
                        this.state.tits.map((item)=>{
                            var replay='';
                            var flag = Math.floor(Math.random()*10);
                            item.create_at = moment(item.create_at).format("YYYY-MM-DD");
                            if( flag % 2 != 0){
                                replay = 
                                    <Text style={{ color:'#f23030',fontSize:14,}}>
                                        待回复
                                    </Text>
                            }else{
                                replay = 
                                    <Text style={{ color:'#333',fontSize:14,}}>
                                        已回复
                                    </Text>
                            }
                            return <View style={styles.V1} >
                                <Text style={{width:'65%',paddingLeft:'2%'}}>
                                    {item.title ? (item.title.length > 10? item.title.substr(0, 10) + "..." : item.title) : ""}
                                </Text>
                                <Text style={{width:'20%'}}>
                                    {item.create_at}
                                </Text>
                                <Text>
                                    {replay}
                                </Text>
                            </View>
                        })
                    }
                    </View>
                    {/* 翻页 */}
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Button style={styles.btn1} onPress={()=>this.front()}>上一页</Button>
                        <Text style={styles.sml}>第{this.state.pages}页</Text>
                        <Button style={styles.btn2} onPress={()=>this.back()}>下一页</Button>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>  
        )
    }
}


const styles = StyleSheet.create({
    one:{
        width:'100%',
        height:50,
        backgroundColor:'red',
        flexDirection: 'row',
        paddingLeft:'3%',
        justifyContent:"center",
        paddingTop:'1%',
        paddingRight:'5%',
    },
    icon:{
        color:'white',
        fontSize:30,
    },
    dote:{
        position:"absolute",
        top:0, 
        left:"95%",
        color:'white',
        fontSize:30,
    },
    V1:{
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        fontSize:17,
    },
    btn1:{
        width:100,
        height:30,
        backgroundColor:'red',
        color:'white',
        textAlignVertical:'center',
        borderRadius:30,
        marginTop:20
    },
    btn2:{
        width:100,
        height:30,
        backgroundColor:'red',
        color:'white',
        textAlignVertical:'center',
        borderRadius:30,
        marginLeft:70,
        marginTop:20
    },
    sml:{
        marginTop:25,
        marginLeft:80,
        fontSize:15
    }
})