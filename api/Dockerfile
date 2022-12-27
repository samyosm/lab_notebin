FROM eclipse-temurin:17-jdk-alpine
COPY build/libs/notebin-api-0.0.1.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]