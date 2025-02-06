Build container
`docker build -f Dockerfile.server -t bitbolic-server .`

Explore container
`docker run -it bitbolic-server sh`

Run container
`docker run -p 3000:3000 bitbolic-server`