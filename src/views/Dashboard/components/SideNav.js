import React from "react";
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";
import { navStyles } from '../styles/styles';
import * as theme from '../../../styles/theme';
import SlideInView from "./SlideInView";

export default function SideNav(props) {

    const handlePress = () => {
        props.close(!props.open)
    }

    return (
        <SlideInView open={props.open} style={[theme.boxShadow, navStyles.sideNav]} >
            <TouchableOpacity style={navStyles.underLay} onPress={handlePress} />
            <FlatList
                data={[
                    { key: 'dashboard', url: require('../../../assets/dashboard.png') },
                    { key: 'inventory', url: require('../../../assets/inventory.png'), url2: require('../../../assets/arrow.png') },
                    { key: 'accessories', url: require('../../../assets/tools.png'), url2: require('../../../assets/arrow.png') },
                    { key: 'crm', url: require('../../../assets/crm.png') },
                    { key: 'service-report', url: require('../../../assets/customer.png') },
                    { key: 'device', url: require('../../../assets/monitor.png') },
                    { key: 'payment-history', url: require('../../../assets/wallet.png') },
                    { key: 'ticket', url: require('../../../assets/invoice.png'), url2: require('../../../assets/arrow.png') },
                    { key: 'settings', url: require('../../../assets/settings.png') },
                    { key: 'logout', url: require('../../../assets/logout.png') }
                ]}
                style={{
                    width: '80%', backgroundColor: 'white', paddingHorizontal: 40, paddingVertical: 30
                }}
                renderItem={
                    ({ item }) =>
                        <TouchableOpacity onPress={handlePress} style={theme.justifyAlign} >
                            <Image
                                style={{ width: 30, height: 30, marginTop: 10, marginRight: 40 }}
                                source={item.url}
                            />
                            <Text style={[navStyles.list, { fontSize: 20, flex: 1 }]} >{item.key}</Text>
                            {item.url2 && <Image source={item.url2} />}
                        </TouchableOpacity>
                }
            />
        </SlideInView>
    )
}