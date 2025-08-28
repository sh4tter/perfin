# Multi-stage build for Spring Boot application
FROM openjdk:17-jdk-slim as builder

# Set working directory
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Make mvnw executable
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# Production stage
FROM openjdk:17-jdk-slim

# Create application directory
WORKDIR /app

# Create a non-root user
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 --gid 1001 appuser

# Copy the built JAR from builder stage
COPY --from=builder /app/target/finance-tracker-0.0.1-SNAPSHOT.jar app.jar

# Change ownership
RUN chown appuser:appgroup app.jar

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:8080/api/health || exit 1

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]