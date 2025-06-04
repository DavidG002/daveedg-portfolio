# ---------- Stage 1: Build ----------
    FROM node:18-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Copy package manifest and lockfile for dependency caching
    COPY package.json pnpm-lock.yaml ./
    
    # Install pnpm globally and all dependencies (including dev dependencies)
    RUN npm install -g pnpm && pnpm install
    
    # Copy the rest of your code
    COPY . .

    ARG NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    ARG AUTH_PASSWORD
    ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=$NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    ENV AUTH_PASSWORD=$AUTH_PASSWORD
    
    # Build the project using NX (this will output to the default ".next" directory)
    RUN pnpm next build
    
    # ---------- Stage 2: Production Runner ----------
    FROM node:18-alpine AS runner
    
    # Set production environment
    ENV NODE_ENV=production
    
    # Set working directory
    WORKDIR /app
    
    # Copy the built Next.js output and required files from the builder stage.
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/package.json ./
    COPY --from=builder /app/pnpm-lock.yaml ./
    COPY --from=builder /app/next.config.js ./

    # *** Copy the public folder ***
    COPY --from=builder /app/public ./public
    
    # Install production dependencies only
    RUN npm install -g pnpm && pnpm install --prod
    
    # Expose port 3000 (or whichever port you plan to use)
    EXPOSE 3000
    
    # Start the Next.js production server (uses "next start" so NX CLI isn’t needed)
    CMD ["pnpm", "next", "start"]