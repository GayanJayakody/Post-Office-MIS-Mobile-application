jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.useFakeTimers();
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('react-native-maps', () => {                                           
  const React = require.requireActual('react');                                  
  const MapView = require.requireActual('react-native-maps');                    
                                                                                 
  class MockCallout extends React.Component {                                    
    render() {                                                                   
      return React.createElement('Callout', this.props, this.props.children);    
    }                                                                            
  }                                                                              
                                                                                 
  class MockMarker extends React.Component {                                     
    render() {                                                                   
      return React.createElement('Marker', this.props, this.props.children);     
    }                                                                            
  }                                                                              
                                                                                 
  class MockMapView extends React.Component {                                    
    render() {                                                                   
      return React.createElement('MapView', this.props, this.props.children);    
    }                                                                            
  }                                                                              
                                                                                 
  MockCallout.propTypes = MapView.Callout.propTypes;                             
  MockMarker.propTypes = MapView.Marker.propTypes;                               
  MockMapView.propTypes = MapView.propTypes;                                     
  MockMapView.Marker = MockMarker;                                               
  MockMapView.Callout = MockCallout;                                             
  return MockMapView;                                                            
}); 