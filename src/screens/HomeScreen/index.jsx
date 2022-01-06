import { FlatList } from 'react-native';
import CoinItem from '../../components/CoinItem';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';

const HoomeScreen = () => {
    return (
        <FlatList data={cryptocurrencies} renderItem={({item}) => <CoinItem marketCoin={item}/>} />
    );
};

export default HoomeScreen;