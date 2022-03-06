import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native'
import axios from 'axios'
import styling from '../styling/styling'
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';
const styles = StyleSheet.create(styling);

const Home = ({ navigation, route }) => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([])
    const [loader,setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);
            setLoader(false)
        })
    }, []);
    const productPress = (obj) => {
        console.log(obj)
        navigation.navigate('Product', obj)
    }
    const cartPress = (obj) => {
        //console.log(obj)
        setCart([...cart,obj])
        // console.log(cart)
        navigation.navigate('Cart', cart)
    }
   
    return (
        <>
            <View>
                <Text style={[styles._h1, styles.bgdark, styles.textCenter, styles.txtWhite, styles.p2, styles.m2, styles.borderDark, styles.shadow1]}>E-Commerce</Text>
            </View>
            <ScrollView>
                {!loader? products.map((e, i) => <TouchableOpacity key={e.id} onPress={() => productPress(e)}><View style={[styles.border, styles.shadow6, styles.mb4, styles.m1, styles.p4, { borderWidth: 15 }]}>
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: e.image }} />
                    <Text style={[styles.p1, styles.fs5, styles.txtprime, styles.alignItemsCenter]}>{e.title}</Text>
                    <TouchableOpacity onPress={() => cartPress(e)}><Text style={[styles.btn, styles.textCenter, styles.m1]}>Add to Cart</Text></TouchableOpacity>
                </View></TouchableOpacity>):<View>
                    <ActivityIndicator size="large" color="#B22222"/>
                    </View>}
            </ScrollView>
        </>
    );
}
export default Home;