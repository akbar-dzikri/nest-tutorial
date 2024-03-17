-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "name" TEXT,
    "generasi" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT,
    "content" TEXT NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);
