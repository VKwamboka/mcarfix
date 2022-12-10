import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import ProfileScreen from "./screens/ProfileScreen";
import ImagesScreen from "./screens/ImagesScreen";
import VideoScreen from "./screens/VideosScreen";

const TabNavigator = createMaterialTopTabNavigator(
{
	Profile: {
	screen: ProfileScreen,
	navigationOptions: {
		tabBarLabel: "Profile",
		showLabel: ({ focused }) => {
		console.log(focused);
		return focused ? true : false;
		},
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="ios-person-circle-outline"
			size={tabInfo.focused ? 25 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	Images: {
	screen: ImagesScreen,
	navigationOptions: {
		tabBarLabel: "Images",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="ios-images-outline"
			size={tabInfo.focused ? 24 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	Video: {
	screen: VideoScreen,
	navigationOptions: {
		tabBarLabel: "Videos",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="ios-videocam-outline"
			size={tabInfo.focused ? 25 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
},
{
	tabBarOptions: {
	showIcon: true,

	style: {
		backgroundColor: "#006600",
		marginTop: 28,
	},
	},
}
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
return (
	<Navigator>
	<ProfileScreen />
	</Navigator>
);
}
