# Docker's commonly used Commands

This repository contains commonly used Docker commands for reference. Whether you're a beginner or an experienced user, these commands will help you efficiently manage your Docker containers and images.

## Usage

Below are some commonly used Docker commands along with a brief description of each:

### Build Docker image

- `$ docker build .`: Build Docker image from the Dockerfile in the current directory.
- `$ docker build -t "studynotion:1.0" .`: Build Docker image with a specified tag.
- `$ docker build -t "studynotion:1.0" .`: ERROR - Image name should be in lowercase.

### List Docker images

- `$ docker images ls`: List all Docker images on the system.

### Run Docker container

- `$ docker run f208561303b4`: Run Docker container from the specified image.
- `$ docker run --rm -d --name "studynotion" -p 3001:3000 f208561303b4`: Run Docker container with port mapping and a specified name.
- `$ docker run --rm -d --name "studynotion" -p 3001:3000 f208561303b4`: Another option with the same container name.

### Stop Docker container

- `$ docker stop studynotion`: Stop Docker container by container name.

### List Docker containers

- `$ docker ps`: List running Docker containers.
- `$ docker ps -a`: List all Docker containers.

### Remove Docker container

- `$ docker rm b8afa5eaaf18 dc6a7389ba91 697ca78367f9`: Remove Docker containers by container ID.
- `$ docker stop b8afa5eaaf18 dc6a7389ba91 697ca78367f9`: Stop multiple Docker containers by container ID.

### Additional Docker Commands
- `$ docker run --rm --name nameSave -v myVolume:/sumP  -it name_info:1.0`: Create volume named myVolume in the sumP Directory.



### Additional Docker Commands

- `$ docker system prune -a`: Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.
- `$ docker-compose up -d`: Start Docker containers defined in the `docker-compose.yml` file in detached mode.
- `$ docker-compose down`: Stop and remove Docker containers defined in the `docker-compose.yml` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this repository by adding more useful Docker commands or by improving the existing ones. If you have any questions or suggestions, please feel free to open an issue or pull request. Happy Dockering! 🐳
