import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import styling from '../styling/styling'
const styles = StyleSheet.create(styling)

const Product = ({ navigation, route }) => {
    const [product, setProduct] = useState({})
   
    useEffect(() => {
        const obj = route.params
        setProduct(obj)
    }, [])
    

    return (
        <>
            <ScrollView>
                <Text style={[styles._h2, styles.bgdark, styles.textCenter, styles.txtWhite, styles.p2, styles.m2, styles.borderDark, styles.shadow1]}>{product.title}</Text>
                <View style={[styles.m3]}>
                    <Image style={[{ width: '100%', height: 300 }]} source={{ uri: product.image }} />
                    <Text style={[styles._h2, styles.m1, styles.textCenter, styles.blackTransparent, styles.p2, { borderRadius: 50 }, styles.shadow3]}>$ {product.price}</Text>
                    <Text style={[styles.fs2, styles.m1, styles.fs, styles.textCenter, styles.blackTransparent, styles.p2, { borderRadius: 20 }, styles.shadow1]}>{product.description}</Text>
                    <Text style={[styles.txtprime, styles.textRight, styles.fs3]}>Category: {product.category}</Text>
                   
                </View>
            </ScrollView>


        </>
    );
}
export default Product;