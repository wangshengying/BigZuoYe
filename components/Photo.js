import React, { Component } from 'react'
import { Animated, Easing, 
    View, ActivityIndicator, Text, Image,
    FlatList, Dimensions ,ScrollView, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {WebView} from 'react-native-webview';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const {width} = Dimensions.get('window')
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl:''
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
            <View style={{flex:1}}>
                <Image 
                    style={{width:300,height:300}} 
                    source={this.state.imageUrl}
                />
                <Button 
                    onPress={()=>{this.takephoto()}}
                    style={styles.btn}
                >拍照</Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width: 200,
        height: 40,
        color: '#fff',
        textAlignVertical: 'center',
        borderRadius: 20,
        backgroundColor: 'red'
    },
})