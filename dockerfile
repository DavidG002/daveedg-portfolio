# ---------- Stage 1: Build ----------
    FROM node:22-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Copy package manifest and lockfile for dependency caching
    COPY package.json pnpm-lock.yaml ./
    
    # Install pnpm globally and all dependencies (including dev dependencies)
    RUN npm install -g pnpm && pnpm install
    
    # Copy the rest of your code
    COPY . .
    
    # Build the project using NX (this will output to the default ".next" directory)
    RUN pnpm next build
    
    # ---------- Stage 2: Production Runner ----------
    FROM node:22-alpine AS runner
    
    # Create a non-root user for security
    RUN addgroup -S appgroup && adduser -S appuser -G appgroup
    USER appuser
    
    # Set production environment
    ENV NODE_ENV=production
    
    # Set working directory
    WORKDIR /app
    
    # Copy the built Next.js output and required files from the builder stage
    COPY --from=builder --chown=appuser:appgroup /app/.next ./.next
    COPY --from=builder --chown=appuser:appgroup /app/package.json ./
    COPY --from=builder --chown=appuser:appgroup /app/pnpm-lock.yaml ./
    COPY --from=builder --chown=appuser:appgroup /app/next.config.js ./
    
    # Copy the public folder
    COPY --from=builder --chown=appuser:appgroup /app/public ./public
    
    # Install production dependencies only
    RUN npm install -g pnpm && pnpm install --prod
    
    # Expose port 3000
    EXPOSE 3000
    
    # Start the Next.js production server
    CMD ["pnpm", "next", "start"]