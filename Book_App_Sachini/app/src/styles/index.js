import {StyleSheet} from 'react-native';
import COLORS from '../const/color';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width/2-30;

const STYLES=StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },

    InputIcons: {
        marginTop: 15,
        position: 'absolute',
    },

    Input: {
        color: COLORS.light,
        paddingLeft:30,
        borderBottomWidth:0.5,
        flex:1,
        fontSize:18,
    },
    BtnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 40,
    },
    Line: {
        height: 1,
        width: 30,
        backgroundColor: COLORS.light,
    },
    BtnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.light,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    BtnImage: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    Header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    SearchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
    },
    InputSearch: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
        flex: 1,
    },
    SortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    Catcontainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    CateText: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    CategoryTextSelected: {
        color: COLORS.blue,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.blue,
    },
    CardStyle: {
        height: 225,
        backgroundColor: COLORS.lightblue,
        width: windowWidth,
        marginHorizontal:2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
});

export default STYLES;