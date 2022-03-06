import React,{useState,useEffect} from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import styling from '../styling/styling'
const styles = StyleSheet.create(styling)

const Cart = ({navigation,route}) => {
    const [arr,setArr] = useState(route.params)
    console.log(arr);
    let removeItem = (ind) =>{
        arr.splice(ind,1)
        setArr([...arr])
    }  
    let sum = 0;
    arr.map((e,i)=> sum += Math.floor(e.price))
    console.log(sum)
    
    const productPress = (obj) => {
        console.log(obj)
        navigation.navigate('Product', obj)
    }
    return (
        <>
        <View>
        <Text style={[styles._h2, styles.bgdark, styles.textCenter, styles.txtWhite, styles.p2, styles.m2, styles.borderDark, styles.shadow1]}>My Cart</Text>
        <View><Text style={styles.headerTitle}>Total Item: {arr.length}</Text></View>
        <View><Text style={styles.headerTitle}>Products Total: ${sum}</Text></View>
        
        </View>
        <ScrollView>
         {arr.map((e,i)=> <View style={[styles.borderDark,styles.card,styles.p2,styles.m2]} key={i}>
             <Text style={styles.txtprime}>Item Id: {i}</Text>
             <Text style={[styles._h2]}>{e.title}</Text>
             <Text style={[styles._h2,styles.blackTransparent,styles.textCenter,styles.mb1,styles.p1]} >${e.price}</Text>
             <TouchableOpacity onPress={()=>productPress(e)}><Text style={[styles.chips,styles.txtWhite,styles.textCenter]}>Review Product</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>removeItem(i)}><Text style={[styles.btn,styles.fs,styles.textCenter]}>Remove</Text></TouchableOpacity>
             </View>)}
             </ScrollView>
        </>
    );
}
export default Cart;