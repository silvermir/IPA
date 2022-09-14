# Image Processesing API
This is an API to resize .jpg images 

## How to get Startet 

### 1. Install dependencies 
npm install

### 2. Build JS code 
npm run build 

### 3. Start Server @port: 3000
npm run start

### 4. visit Homepage
go to http://localhost:3000 and follow the instructions

## Resize Images

### choose Image & Size
to resize an image type the following parameter to the URL

#### filename
the image file you want to change must be in the InputFolder (e.g.: fjord.jpg) 

#### width
enter here the desired image width as a positive number 

#### height
enter here the desired image height as a positive number


### example
http://localhost:3000/api/image?filename=fjord&width=200&height=200


## Scripts

### Linting
npm run lint

### Prettier
npm run prettier

### Jasmine
npm run test

