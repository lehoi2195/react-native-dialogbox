

export default (dimensions, platform, pixelRatio) => {
	const screen = {
		pixel: 1 / pixelRatio.get(),
		...dimensions.get('window'),
		isIOS: platform.OS === 'ios'
	};

	return {
		popupContainer: {
			position: 'absolute',
			top: 0,
			left: 0,
			justifyContent: 'center',
			alignItems: 'center',
			width: screen.width,
			height: screen.height,
			overflow: 'hidden',
			backgroundColor: 'rgba(00, 00, 00, 0)',
		},
		overlay: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: screen.width,
			height: screen.height,
			backgroundColor: '#000',
			opacity: .5,
		},
		//style View dialog
		tipBoxView: {
			backgroundColor: '#fff',
			justifyContent: 'center',
			alignItems: 'center',
			width: screen.width - 70,
			borderRadius: 12,
			overflow: 'hidden',
		},
		tipBoxViewTab: {
			backgroundColor: '#fff',
			justifyContent: 'center',
			alignItems: 'center',
			width: screen.width / 2,
			borderRadius: 12,
			overflow: 'hidden',
		},
		tipBox: {
			paddingTop: 3,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		tipTitleBox: {
			height: 30,
			width: screen.width - 50,
			justifyContent: 'center',
			alignItems: 'center',
		},
		//style Title
		tipTitle: {
			fontSize: screen.isIOS ? 18 : 17,
			fontWeight: '200',
			textAlign: 'center',
			color: 'black'
		},
		//style content
		tipContentBox: {
			flexDirection: 'column',
			marginBottom: 5,
			marginTop: 0,
			justifyContent: 'center',
			alignItems: 'center',
		},
		//style nội dung thông báo
		tipContent: {
			fontSize: 14,
			margin: 15,
			marginTop: screen.isIOS ? 5 : 7,
			marginBottom: screen.isIOS ? 7 : 5,
			textAlign: 'center',
			color: 'black'
		},
		line: {
			height: screen.pixel,
			width: screen.width - 50,
			backgroundColor: '#ddd',
		},

		//style row - Không + có
		btnBox: {
			width: screen.width - 50,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			height: 40,
		},
		btnBoxTab: {
			width: screen.width / 2,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			height: 40,
		},
		btnBoxMulti: {
			width: screen.width - 50,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: 'auto',
		},
		btnBoxMultiTab: {
			width: screen.width / 2,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: 'auto',
		},
		btnTextBox: {
			flexGrow: 1,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center',
		},
		btnTextBoxMulti: {
			flexGrow: 1,
			flexDirection: 'row',
			height: 50,
			justifyContent: 'center',
			alignItems: 'center',
		},
		// style line dọc
		btnLineVertical: {
			height: 40,
			width: screen.pixel,
			backgroundColor: '#ddd',
		},
		btnLineHorizontal: {
			height: screen.pixel,
			width: '100%',
			backgroundColor: '#ddd',
		},
		//style Text btn
		btnText: {
			textAlign: 'center',
			fontSize: 14,
			color: '#149be0',
		},
		btnTextTextBoxMulti: {
			flex: 1,
			textAlign: 'center',
			fontSize: 16,
			color: '#149be0',
		},
		hidden: {
			position: 'absolute',
			height: 0,
			width: 0,
			top: 0,
			left: 0,
		},
	};
};

