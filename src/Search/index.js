import { View, Text } from 'react-native'
import React from 'react'
import CustomerSearch from '../CustomComponents/SearchTextInput'
import Tabs from '../Navigation/TopTabs'
const Search = () => {
    return (
        <View>
            <CustomerSearch />
            <Tabs />
        </View>
    )
}

export default Search