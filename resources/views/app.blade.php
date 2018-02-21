<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		
		<title>{{ config('app.name') }}</title>
		<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
	</head>
	<body>
		<div id="app">
			<v-app>
				<v-navigation-drawer fixed v-model="drawer" app>
					<v-list>
						<v-list-tile v-for="item in mainMenuItems" :key="item.name" :to="{name: item.name}">
							<v-list-tile-action>
								<v-icon v-html="item.icon"></v-icon>
							</v-list-tile-action>
							
							<v-list-tile-content>
								<v-list-tile-title v-html="item.title"></v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
				</v-navigation-drawer>
				
				<v-toolbar color="indigo" dark fixed app>
					<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
					<v-toolbar-title>{{ config('app.name') }}</v-toolbar-title>
				</v-toolbar>

				<v-content>
					<v-container fluid>
						<h2 class="headline" v-if="$router.currentRoute.meta.title" v-text="$router.currentRoute.meta.title"></h2>

						<router-view></router-view>

						<notification />							
					</v-container>
				</v-content>

				<v-footer color="indigo" app>
					<span class="white--text">&copy; {{ date("Y") }}</span>
				</v-footer>						
			</v-app>			
		</div>
		<script>
		    window.baseUrl = "<?php echo url('/') ?>/";
		</script>
		<script src="{{ asset('js/app.js')}}"></script>
	</body>
</html>
