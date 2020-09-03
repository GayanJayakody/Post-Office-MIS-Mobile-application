import React, { Component } from 'react'
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MapStyles } from './styles'

//let { width, height } = Dimensions.get('window');
//const ASPECT_RATIO = width / height;
const LATITUDE = 6.9271;
const LONGITUDE = 79.8612;
//const LATITUDE_DELTA = 0.0922;
//const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Map extends Component {

	constructor() {
		super();
		this.state = {
			lat: LATITUDE,
			lng: LONGITUDE
		};
	}

	render() {
		return (
			<View style={MapStyles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={MapStyles.map}
					showsUserLocation={true}
					followsUserLocation={true}
					showsMyLocationButton={true}
					zoomEnabled={true}
					zoomControlEnabled={true}
					region={{
						latitude: this.state.lat,
						longitude: this.state.lng,
						latitudeDelta: 0.0122,
						longitudeDelta: 0.022
					}}
				>
					<Marker
						coordinate={{
							latitude: this.state.lat,
							longitude: this.state.lng
						}}
					/>
				</MapView>
				<GooglePlacesAutocomplete
					styles={{ description: { fontWeight: 'bold', backgroundColor: 'white' }, }}
					autoFillOnNotFound={true}
					placeholder='Search'
					fetchDetails={true}
					onPress={(data, details = geometry.location) => {  // eslint-disable-line
						this.setState({ lat: details['geometry']['location']['lat'], lng: details['geometry']['location']['lng'] }) // eslint-disable-line
					}}
					query={{
						key: 'Place your Google map key here',
						language: 'en'
					}}
				/>
			</View>
		)
	}
}



export default Map



