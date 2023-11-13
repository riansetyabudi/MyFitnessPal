import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Toggle = ({label, options, value, onChange}) => {
  return (
    <View style={toggle.container}>
      <Text style={toggle.label}>{label}</Text>
      <View style={toggle.optionsContainer}>
        {options.map(option => (
          <Button
            color={option === value ? '#3B6CD4' : '#AAA'}
            onPress={() => onChange(option)}
            title={option}
            key={option}
          />
        ))}
      </View>
    </View>
  );
};

export default function App() {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('center');
  const [alignItems, setAlignItems] = useState('center');
  const layoutStyle = {flexDirection, justifyContent, alignItems};
  const primaryAxis =
    flexDirection === 'row' || flexDirection === 'row-reverse'
      ? 'Horizontal'
      : 'Vertical';
  const secondaryAxis =
    flexDirection === 'row' || flexDirection === 'row-reverse'
      ? 'Vertical'
      : 'Horizontal';
  return (
    <View style={styles.container}>
      <Toggle
        label={'Primary axis (flexDirection)'}
        value={flexDirection}
        options={flexDirectionOptions}
        onChange={option => {
          setFlexDirection(option);
        }}
      />
      <Toggle
        label={`${primaryAxis} distribution (justifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={option => {
          setJustifyContent(option);
        }}
      />
      <Toggle
        label={`${secondaryAxis} alignment (alignItems)`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={option => {
          setAlignItems(option);
        }}
      />
      <View style={[styles.layout, layoutStyle]}>
        <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
        <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
        <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
      </View>
    </View>
  );
}
const flexDirectionOptions = ['row', 'column', 'row-reverse', 'column-reverse'];
const justifyContentOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
  'space-evenly'
];
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch'];
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: '#3B6CD4',
    margin: 5,
  },
});
const toggle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 12,
  },
  label: {
    fontSize: 14,
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:5
  },
});