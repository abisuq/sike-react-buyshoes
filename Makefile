.PHONY: all
all:
	(make css & make js & make server & wait)
	

.PHONY: css
css:
	mkdir -p build
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output build/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,build/*'

.PHONY: clean
clean:
	rm -r build
	
.PHONY: js
js:
	webpack --watch -d --progress js/app.js build/app.js --module-bind "js=babel" --display-error-details --colors
	
.PHONY: minjs
minjs:
	webpack --watch -d -p --progress js/app.js build/app.js --module-bind "js=babel"
