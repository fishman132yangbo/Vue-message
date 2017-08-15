# vue-messagebox

a messagebox plugin for vue.

## Usage

import messagebox from 'vue-messageboxs'

Vue.use(messagebox)

this.$messagebox.show({title:'your title',describe:'your describe'},options)

   ##  options  arguments 
   
   ```
    options:{
             buttonName:[],      //button name (length<=2) 
             buttonColor:[],    //button color (length<=2) 
             buttonBgcolor:[],   //button background (length<=2) 
             bgColor:'',  //messagebox background 
             cb:function () {  //click right button callback(点击右键的回掉函数) }
               }