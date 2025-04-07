/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Messaging } from '@adobe/react-native-aepmessaging';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  MobileCore,
  LogLevel,
} from '@adobe/react-native-aepcore';

import ContentCardScreen from './ContentCardScreen';

import {ComponentConfig, demo1, demo2, splitPromotionCardData,notificationPrompt, iconsGrid, subjectCards, adobeImageTemplate, frontEndGeneratedJson1} from './ComponentConfig';

// Custom Button component that matches the provided image style
interface StyledButtonProps {
  title: string;
  onPress: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity 
    style={styles.styledButton} 
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [refreshKey, setRefreshKey] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  };

  useEffect(() => {
    MobileCore.setLogLevel(LogLevel.DEBUG);
    MobileCore.initializeWithAppId('3149c49c3910/4f6b2fbf2986/launch-7d78a5fd1de3-development')
    .then(() => {
      console.log('AEP SDK Initialized');
    })
    .catch((error) => {
      console.log('AEP SDK Initialization error', error);
    });
  });

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text style={styles.textStyle}>
        ------- Local Cached Cards -------
      </Text>

      <View style={styles.buttonRow}>
        <StyledButton
          title="Card (1)"
          onPress={() => {
            console.log('Button pressed!');
            contentCardToShow = demo1;
            setRefreshKey(prevKey => prevKey + 1);
          }}
        />
        <StyledButton
          title="Card (2)"
          onPress={() => {
            console.log('Button pressed!');
            contentCardToShow = demo2;
            setRefreshKey(prevKey => prevKey + 1);
          }}
        />
        <StyledButton
          title="Card (AI)"
          onPress={() => {
            console.log('Button pressed!');
            contentCardToShow = frontEndGeneratedJson1;
            setRefreshKey(prevKey => prevKey + 1);
          }}
        />
      </View>

      <View style={styles.buttonSpacing}>
      <StyledButton
        title="Load & Show"
        onPress={async () => {
          console.log('Log only button pressed!');
          Messaging.updatePropositionsForSurfaces(['card/ms']);
          const result = await Messaging.getPropositionsForSurfaces(['card/ms']);
          const dynamicContentCards = handleContentCardArray(result['card/ms']);
          console.log('dynamicContentCards' + JSON.stringify(dynamicContentCards));
          contentCardToShow = dynamicContentCards[0];
          setRefreshKey(prevKey => prevKey + 1);
        }}
      />
      </View>

      <View style={styles.contentCardContainer}>
        <ContentCardScreen key={refreshKey} {...(contentCardToShow || {})} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  paddingVertical: 12,
  paddingHorizontal: 20,
  overflow: 'hidden',
  marginBottom: 15,
  color: 'gray',
  },
  buttonSpacing: {
    marginTop: 20,
  },
  contentCardContainer: {
    width: '90%',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
  },
  styledButton: {
    backgroundColor: '#C27B50', // Orange/brown color from the image
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded corners like in the image
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


function handleContentCardArray(array: any) {
  const result: ComponentConfig[] = [];
  if (!Array.isArray(array)) {
    console.error('Error: array is not an array');
  }else {
    array.forEach((scope: any) => {
      if(Array.isArray(scope.items)) {
        scope.items.forEach((item: any) => {
          if(item.schema === 'https://ns.adobe.com/personalization/json-content-item') {
            if(item.data && item.data.content && typeof item.data.content === 'object') {
              result.push(item.data.content as ComponentConfig);
            }
          }else {
            console.log(`Current scope is: (schema) ${JSON.stringify(item.schema)}`);
          }
        });
      }else {
        console.error('Current scope include zero items');
      }
    });
  }
  return result;
}

export default App;

var contentCardToShow: ComponentConfig | null = null;
