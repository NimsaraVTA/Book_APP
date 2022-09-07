import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../const/color';
import STYLES from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import Books from './CategoryList';

const Cat = ({navigation})=>{

    const Categories =['Novels', 'Short Stories', 'Educational', 'Anthology'];

    const [categoryIndex, SetcatagoryIndex]=React.useState(0);

    const Categorylists = () =>{
        return(
            <View style={STYLES.Catcontainer}>
                {Categories.map((items,index)=>(
                    <TouchableOpacity key={index}
                    activeOpacity={0.8}
                    onPress={()=> SetcatagoryIndex(index)}>
                    <Text style={[STYLES.CateText, categoryIndex==index && STYLES.CategoryTextSelected]}>{items}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    };

    const Card = ({book}) =>{
        return( 
            <View style={STYLES.CardStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail',book)}>
            <View style={{alignItems: 'flex-end'}}>
                <View style={{
                    width: 30, 
                    height: 30, 
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: book.like ? 
                    'rgb(245,42,42,0.2)' : 'rgb(0,0,0,0.2)'
                    }}>
                <Icon name='favorite' size={18} color={book.like ? COLORS.red : COLORS.dark} />
                </View>
            </View>
            <View style={{height:100,alignItems:'center'}}>
                    <Image style={{flex: 1, resizeMode: 'center'}} source={book.img} />
            </View>
            <Text style={{fontWeight:'bold', fontSize:17, marginTop: 8, color: COLORS.black}}>{book.name}</Text>

            <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>${book.price}</Text>
            <View
            style={{
                height: 30,
                width: 30,
                backgroundColor: COLORS.blue,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: COLORS.white}}>+</Text>
            </View>
            </View>
            </TouchableOpacity>
        </View>
    
        );
    }

    return(
        <SafeAreaView
        style={{flex:1, paddingHorizontal:20, backgroundColor: COLORS.white}}>
        
        <View style={STYLES.Header}>
            <View>
                <Text style={{fontSize: 25, fontWeight: 'bold', color:COLORS.black}}>Welcome to</Text>
                <Text style={{fontSize: 38, fontWeight: 'bold', color: COLORS.blue}}>Book Readers</Text>
            </View>

            <Icon name="menu-book" size={28} style={{color: COLORS.black}} />
        </View>
        <View
        style={{marginTop: 30, flexDirection: 'row'}}>
            <View style={STYLES.SearchContainer}>
                <Icon name='search' size={25} style={{marginLeft:20}}/>
                <TextInput placeholder='Search Book' style={STYLES.InputSearch} />
            </View>

            <View style={STYLES.SortBtn}>
                <Icon name='sort' size={30} style={{color: COLORS.white}} />
            </View>
        </View>
        <Categorylists />
        <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            marginBottom: 10,
            paddingBottom: 50,
        }}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2} 
        data={Books} 
        renderItem={({item}) => <Card book={item} />} />
        </SafeAreaView>
    )
}

export default Cat;