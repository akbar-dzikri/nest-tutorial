/*
  Warnings:

  - The primary key for the `Articles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `role` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Anggota', 'Pengajar', 'Admin');

-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_userId_fkey";

-- AlterTable
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Articles_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Articles_id_seq";

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ADD COLUMN     "role" "Role" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Users_id_seq";

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
