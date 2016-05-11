'use strict'

var React = require('react');
var { PropTypes } = React;
var ReactNative = require('react-native');
var { NativeModules, requireNativeComponent, findNodeHandle } = ReactNative;
var { MapboxGLManager } = NativeModules;

var MapMixins = {
  setDirectionAnimated(mapRef, heading) {
    MapboxGLManager.setDirectionAnimated(findNodeHandle(this.refs[mapRef]), heading);
  },
  setZoomLevelAnimated(mapRef, zoomLevel) {
    MapboxGLManager.setZoomLevelAnimated(findNodeHandle(this.refs[mapRef]), zoomLevel);
  },
  setCenterCoordinateAnimated(mapRef, latitude, longitude) {
    MapboxGLManager.setCenterCoordinateAnimated(findNodeHandle(this.refs[mapRef]), latitude, longitude);
  },
  setCenterCoordinateZoomLevelAnimated(mapRef, latitude, longitude, zoomLevel) {
    MapboxGLManager.setCenterCoordinateZoomLevelAnimated(findNodeHandle(this.refs[mapRef]), latitude, longitude, zoomLevel);
  },
  updateAnnotation(mapRef, annotation) {
    MapboxGLManager.updateAnnotation(React.findNodeHandle(this.refs[mapRef]), annotation);
  },
  addAnnotations(mapRef, annotations) {
    MapboxGLManager.addAnnotations(findNodeHandle(this.refs[mapRef]), annotations);
  },
  selectAnnotationAnimated(mapRef, selectedIdentifier) {
    MapboxGLManager.selectAnnotationAnimated(findNodeHandle(this.refs[mapRef]), selectedIdentifier);
  },
  removeAnnotation(mapRef, selectedIdentifier) {
    MapboxGLManager.removeAnnotation(findNodeHandle(this.refs[mapRef]), selectedIdentifier);
  },
  removeAllAnnotations(mapRef) {
    MapboxGLManager.removeAllAnnotations(findNodeHandle(this.refs[mapRef]));
  },
  setVisibleCoordinateBoundsAnimated(mapRef, latitudeSW, longitudeSW, latitudeNE, longitudeNE, paddingTop, paddingRight, paddingBottom, paddingLeft) {
    MapboxGLManager.setVisibleCoordinateBoundsAnimated(findNodeHandle(this.refs[mapRef]), latitudeSW, longitudeSW, latitudeNE, longitudeNE, paddingTop, paddingRight, paddingBottom, paddingLeft);
  },
  setUserTrackingMode(mapRef, userTrackingMode) {
    MapboxGLManager.setUserTrackingMode(findNodeHandle(this.refs[mapRef]), userTrackingMode);
  },
  setTilt(mapRef, tilt) {
    MapboxGLManager.setTilt(findNodeHandle(this.refs[mapRef]), tilt);
  },
  getCenterCoordinateZoomLevel(mapRef, callback) {
    MapboxGLManager.getCenterCoordinateZoomLevel(findNodeHandle(this.refs[mapRef]), callback);
  },
  getDirection(mapRef, callback) {;
    MapboxGLManager.getDirection(findNodeHandle(this.refs[mapRef]), callback);
  },
  getBounds(mapRef, callback) {
    MapboxGLManager.getBounds(findNodeHandle(this.refs[mapRef]), callback);
  },
  mapStyles: MapboxGLManager.mapStyles,
  userTrackingMode: MapboxGLManager.userTrackingMode
};

<<<<<<< HEAD
var ReactMapView = requireNativeComponent('RCTMapbox', {
    name: 'RCTMapbox',
    propTypes: {
      accessToken: React.PropTypes.string.isRequired,
      attributionButtonIsHidden: React.PropTypes.bool,
      logoIsHidden: React.PropTypes.bool,
      annotations: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string,
        coordinates: React.PropTypes.array.isRequired,
        alpha: React.PropTypes.number,
        fillColor: React.PropTypes.string,
        strokeColor: React.PropTypes.string,
        strokeWidth: React.PropTypes.number
      })),
      centerCoordinate: React.PropTypes.shape({
        latitude: React.PropTypes.number.isRequired,
        longitude: React.PropTypes.number.isRequired
      }),
      centerCoordinateZoom: React.PropTypes.shape(),
      debugActive: React.PropTypes.bool,
      direction: React.PropTypes.number,
      rotateEnabled: React.PropTypes.bool,
      scrollEnabled: React.PropTypes.bool,
      showsUserLocation: React.PropTypes.bool,
      disableBackgroundUserLocation: React.PropTypes.bool,
      styleURL: React.PropTypes.string,
      userTrackingMode: React.PropTypes.number,
      zoomEnabled: React.PropTypes.bool,
      zoomLevel: React.PropTypes.number,
      tilt: React.PropTypes.number,
      compassIsHidden: React.PropTypes.bool,
      onRegionChange: React.PropTypes.func,
      onOpenAnnotation: React.PropTypes.func,
      onLongPress: React.PropTypes.func,
      onUserLocationChange: React.PropTypes.func,
      // Fix for https://github.com/mapbox/react-native-mapbox-gl/issues/118
      scaleY: React.PropTypes.number,
      scaleX: React.PropTypes.number,
      translateY: React.PropTypes.number,
      translateX: React.PropTypes.number,
      rotation: React.PropTypes.number,
      // Fix for https://github.com/mapbox/react-native-mapbox-gl/issues/175
      renderToHardwareTextureAndroid: React.PropTypes.bool,
      onLayout: React.PropTypes.bool,
      accessibilityLiveRegion: React.PropTypes.string,
      accessibilityComponentType: React.PropTypes.string,
      accessibilityLabel: React.PropTypes.string,
      testID: React.PropTypes.string,
      importantForAccessibility: React.PropTypes.string
    },
    defaultProps() {
      return {
        centerCoordinate: {
          latitude: 0,
          longitude: 0
        },
        debugActive: false,
        direction: 0,
        rotateEnabled: true,
        scrollEnabled: true,
        showsUserLocation: false,
        disableBackgroundUserLocation: false,
        styleURL: NativeModules.MapboxGLManager.mapStyles.streets,
        userTrackingMode: NativeModules.MapboxGLManager.userTrackingMode.none,
        zoomEnabled: true,
        zoomLevel: 0,
        tilt: 0,
        compassIsHidden: false
      };
    }
});

=======
>>>>>>> upstream/master
var ReactMapViewWrapper = React.createClass({
  statics: {
    Mixin: MapMixins
  },
  defaultProps() {
    return {
      centerCoordinate: {
        latitude: 0,
        longitude: 0
      },
      debugActive: false,
      direction: 0,
      rotateEnabled: true,
      scrollEnabled: true,
      showsUserLocation: false,
      styleURL: MapboxGLManager.mapStyles.streets,
      userTrackingMode: MapboxGLManager.userTrackingMode.none,
      zoomEnabled: true,
      zoomLevel: 0,
      tilt: 0,
      compassIsHidden: false
    };
  },
  propTypes: {
    accessToken: PropTypes.string.isRequired,
    attributionButtonIsHidden: PropTypes.bool,
    logoIsHidden: PropTypes.bool,
    annotations: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      coordinates: PropTypes.array.isRequired,
      alpha: PropTypes.number,
      fillColor: PropTypes.string,
      strokeColor: PropTypes.string,
      strokeWidth: PropTypes.number
    })),
    centerCoordinate: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
    centerCoordinateZoom: PropTypes.shape(),
    debugActive: PropTypes.bool,
    direction: PropTypes.number,
    rotateEnabled: PropTypes.bool,
    scrollEnabled: PropTypes.bool,
    showsUserLocation: PropTypes.bool,
    styleURL: PropTypes.string,
    userTrackingMode: PropTypes.number,
    zoomEnabled: PropTypes.bool,
    zoomLevel: PropTypes.number,
    tilt: PropTypes.number,
    compassIsHidden: PropTypes.bool,
    onRegionChange: PropTypes.func,
    onOpenAnnotation: PropTypes.func,
    onLongPress: PropTypes.func,
    onUserLocationChange: PropTypes.func
  },
  handleOnChange(event) {
    if (this.props.onRegionChange) this.props.onRegionChange(event);
  },
  handleUserLocation(event) {
    if (this.props.onUserLocationChange) this.props.onUserLocationChange(event);
  },
  handleOnOpenAnnotation(event) {
    if (this.props.onOpenAnnotation) this.props.onOpenAnnotation(event);
  },
  handleOnLongPress(event) {
    if (this.props.onLongPress) this.props.onLongPress(event);
  },
  render() {
    return (
      <ReactMapView
        onRegionChange={this.handleOnChange}
        onUserLocationChange={this.handleUserLocation}
        onOpenAnnotation={this.handleOnOpenAnnotation}
        onLongPress={this.handleOnLongPress}
        {...this.props} />
    );
  }
});

var ReactMapView = requireNativeComponent('RCTMapbox');

module.exports = ReactMapViewWrapper;
