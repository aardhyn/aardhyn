.phony: build dev clean

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm lint
	pnpm build

clean:
	rm -rf dist node_modules src/panda
