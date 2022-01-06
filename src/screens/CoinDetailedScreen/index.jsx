import { View, Text } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import Coin from '../../../assets/data/crypto.json';
import CoinDetailHeader from './components/CoinDetailedHeader';

const CoinDetailedScreen = () => {
    const { 
        image: { small }, 
        name, 
        symbol, 
        market_data: { market_cap_rank } 
    } = Coin;

    return (
        <View>
            <CoinDetailHeader 
            image={small} 
            name={name} 
            symbol={symbol} 
            marketCapRank={market_cap_rank}/>
        </View>
    );
};

export default CoinDetailedScreen