VERSION = 0.1

INSTALL_PATH = /shared/notes

.DELETE_ON_ERROR:

RESULTS = index.html scripts/notes.${VERSION}.js style/notes.${VERSION}.css

.PHONY: all
all: index.html scripts/notes.${VERSION}.js style/notes.${VERSION}.css

index.html: index.tmpl
	sed 's/<VERSION>/${VERSION}/g' $< > $@

.PHONY: scripts/notes.${VERSION}.js
scripts/notes.${VERSION}.js: scripts/notes.js | node_modules/babelify
	browserify $< -t babelify --outfile $@

.PHONY: style/notes.${VERSION}.css
style/notes.${VERSION}.css:
	sass style/notes.scss > $@

node_modules/babelify:
	npm install --save-dev babelify

.PHONY: install
install: ${RESULTS} | ${INSTALL_PATH}/scripts ${INSTALL_PATH}/style
	cp index.html ${INSTALL_PATH}
	cp scripts/notes.${VERSION}.js ${INSTALL_PATH}/scripts
	cp style/notes.${VERSION}.css ${INSTALL_PATH}/style

${INSTALL_PATH} ${INSTALL_PATH}/scripts ${INSTALL_PATH}/style:
	mkdir -p $@

.PHONY: clean
clean:
	rm -rf index.html
	rm -rf scripts/notes.*.js
	rm -rf style/notes.*.css
