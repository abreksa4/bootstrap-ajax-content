# bootstrap-ajax-content

_Allows fetching Bootstrap Tab, Pill, Panel, and Modal HTML content via ajax automagically_

This ia not a robust solution, and should only be used to load content when a GET request is all that is required. 

Requires jQuery 1.12.4 and Bootstrap 3.3.7

Browse `./dist` to view a demo.

Include `<script>$('locator').ajaxifyContent();</<script>` to active ajax content loading on that element.

## Tab
```
<li data-url="partial/tab2.html"><a data-toggle="tab" href="#menu1">Menu 1</a></li>
...
<div class="tab-content">
	...
	<div id="menu1" class="tab-pane fade">
	</div>
	...
```

## Pill
```
<li data-url="partial/tab2.html"><a data-toggle="pill" href="#menu1Pill">Menu 1</a>
...
<div class="tab-content">
	...
	<div id="menu1Pill" class="tab-pane fade">
	</div>
	...
```

## Panels
```
<div class="panel panel-default" data-url="partial/panel3.html">
	...
	<div class="panel-body"></div>
	...
```
### Collapsible panels
The same goes for collapsible panels, by default no content is loaded until the panel is opened. Panels that are open by default (`<div id="collapse2" class="panel-collapse collapse in">`) are treated as normal panels. 
```
<div class="panel-group">
	<div class="panel panel-default" data-url="partial/panel2.html">
		...
		<div id="collapse2" class="panel-collapse collapse">
			<div class="panel-body"></div>
		...
```
## Modals
```
<div id="myModal" class="modal fade" role="dialog" data-url="partial/modal1.html">
	<div class="modal-dialog">
		<div class="modal-content">
		</div>
	...
```
The content returned from `data-url` overwrites all content under `.modal-content`.

