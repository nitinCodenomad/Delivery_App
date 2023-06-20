import React from 'react';
import { View, Text, SectionList } from 'react-native';

const MySectionList = () => {
  const sections = [
    {
      title: 'Section 1',
      data: [
        { type: 'subheader', text: 'Subheader 1' },
        'Item 1.1',
        'Item 1.2',
        { type: 'subheader', text: 'Subheader 2' },
        'Item 1.3'
      ]
    },
    {
      title: 'Section 2',
      data: [
        { type: 'subheader', text: 'Subheader 3' },
        'Item 2.1',
        { type: 'subheader', text: 'Subheader 4' },
        'Item 2.2',
        'Item 2.3'
      ]
    },
    { title: 'Section 3', data: ['Item 3.1', 'Item 3.2', 'Item 3.3'] },
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'subheader') {
      return (
        <View style={{ backgroundColor: 'lightgray', padding: 16 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.text}</Text>
        </View>
      );
    }

    return (
      <View style={{ padding: 16 }}>
        <Text>{item}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={{ backgroundColor: 'lightgray', padding: 16 }}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default Menu;
