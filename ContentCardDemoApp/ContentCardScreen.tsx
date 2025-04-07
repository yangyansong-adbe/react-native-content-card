import React from 'react';
import { View, Text, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native';

// Define types for our JSON structure
import {ComponentConfig, ComponentStyle} from './ComponentConfig';

/**
 * Transforms style objects to handle unsupported properties
 * - If fillWidth: true is present, it's removed and replaced with width: '100%'
 */
const transformStyle = (style: ComponentStyle): ComponentStyle => {
  // Create a new style object to avoid mutating the original
  const newStyle: ComponentStyle = { ...style };

  // Handle fillWidth property
  if (newStyle.fillWidth === true) {
    console.log('found fillWidth=true in style');
    newStyle.width = '100%';
    delete newStyle.fillWidth;
  }

  return newStyle;
};

const renderComponent = (config: ComponentConfig): React.ReactElement | null => {
  const style = transformStyle(config.style || config.tyle || {});

  switch (config.type) {
    case 'view':
      return (
        <View style={style as ViewStyle}>
          {config.children?.map((childConfig, index) => (
            <React.Fragment key={index}>
              {renderComponent(childConfig)}
            </React.Fragment>
          ))}
        </View>
      );

    case 'text':
      return (
        <Text style={style as TextStyle}>
          {config.content}
        </Text>
      );

    case 'image':
      return (
        <Image
          style={style as ImageStyle}
          source={{ uri: config.content || config.url }}
        />
      );

    default:
      return null;
  }
};


const ContentCardScreen = (obj: ComponentConfig) => {
  return renderComponent(obj);
};

export default ContentCardScreen;
