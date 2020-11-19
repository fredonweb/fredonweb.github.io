		var _pegmanMarkerToolTip = this._pegmanMarker.bindTooltip('StreetView va s\'ouvrir dans un nouvel onglet',{
			direction: 'top',
		});
		_pegmanMarkerToolTip.openTooltip;
		setTimeout(function(){
			_pegmanMarkerToolTip.setTooltipContent('Vous pouvez me déplacer ou<br />me cliquer pour me supprimer');
			window.open('https://www.google.com/maps?layer=c&cbll=' + lat + ',' + lng + '');
		},1000);
