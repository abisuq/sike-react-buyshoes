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
	webpack --watch -d --progress js/app.jsx build/app.js --module-bind "js=babel" --module-bind "jsx=babel"
	
.PHONY: minjs
js:
	webpack --watch -d -p --progress js/app.jsx build/app.js --module-bind "js=babel" --module-bind "jsx=babel"
