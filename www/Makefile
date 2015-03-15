VERSION = 0.1

BUILD_PATH   = build
INSTALL_PATH = /shared/notes

$(shell mkdir -p $(BUILD_PATH))

.DELETE_ON_ERROR:

.PHONY: all
all: $(BUILD_PATH)/index.html $(BUILD_PATH)/scripts/notes.${VERSION}.js $(BUILD_PATH)/style/notes.${VERSION}.css

$(BUILD_PATH) $(BUILD_PATH)/scripts $(BUILD_PATH)/style:
	mkdir -p $@

$(BUILD_PATH)/index.html: index.html | $(BUILD_PATH)
	sed 's/<VERSION>/${VERSION}/g' $< > $@

$(BUILD_PATH)/scripts/notes.${VERSION}.js: scripts/notes.js $(shell find scripts -type f) | node_modules/babelify $(BUILD_PATH)/scripts
	browserify $< -t babelify --outfile $@

$(BUILD_PATH)/style/notes.${VERSION}.css: $(shell find style -type f) | $(BUILD_PATH)/style
	sass style/notes.scss > $@

node_modules/babelify:
	npm install --save-dev babelify

.PHONY: install
install: all | $(INSTALL_PATH)
	rsync -Ccar $(BUILD_PATH)/ $(INSTALL_PATH)

.PHONY: clean
clean:
	rm -rf $(BUILD_PATH)/*
