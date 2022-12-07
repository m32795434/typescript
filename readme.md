## Notes how I set up the proyect
mpn init -y
tsc --init
npm i -D concurrently
-Create the src and build folders, and set them as rootDir and outDir, respectively.
-set the: "compilerOptions": {}, "files": [
    "./src/index.ts",
  ], because I don't want all my code to compile
-script start: tsc -w (don't indicate a file path)