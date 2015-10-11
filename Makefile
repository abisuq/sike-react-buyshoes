.PHONY: all
all:
	(make css & make js & make server & wait)
	

.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output build/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,build/*'

.PHONY: clean
clean:
	rm -r bundle
	
.PHONY: js
js:
	babel --watch js/app.jsx --out-file build/app.js